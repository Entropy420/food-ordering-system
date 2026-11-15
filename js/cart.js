// ================= SHOPPING CART CORE =================

const DELIVERY_FEE = 35;

// Load previously saved cart items.
let cart = JSON.parse(
    localStorage.getItem("crave-cart") || "[]"
);


// Save cart data in localStorage.
function saveCart() {
    localStorage.setItem(
        "crave-cart",
        JSON.stringify(cart)
    );
}


// Add a food item to the cart.
function addToCart(id) {

    const food = FOOD_ITEMS.find(
        item => item.id === Number(id)
    );

    if (!food) return;

    const existing = cart.find(
        item => item.id === food.id
    );

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            ...food,
            quantity: 1
        });
    }

    saveCart();

    console.log("Added to cart:", food.name);
    console.log("Current cart:", cart);
}


// Increase or decrease item quantity.
function changeQuantity(id, amount) {

    const item = cart.find(
        entry => entry.id === Number(id)
    );

    if (!item) return;

    item.quantity += amount;

    // Remove item if quantity reaches zero.
    if (item.quantity <= 0) {
        removeFromCart(id);
        return;
    }

    saveCart();
}


// Remove an item completely.
function removeFromCart(id) {

    cart = cart.filter(
        item => item.id !== Number(id)
    );

    saveCart();
}


// Calculate subtotal.
function getSubtotal() {

    return cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
}


// Calculate final total.
function getTotal() {

    const delivery = cart.length > 0
        ? DELIVERY_FEE
        : 0;

    return getSubtotal() + delivery;
}


// Expose cart functions to other JavaScript files.
window.Cart = {
    addItem: addToCart,
    changeQuantity: changeQuantity,
    removeItem: removeFromCart,
    getItems: () => cart,
    getSubtotal: getSubtotal,
    getTotal: getTotal
};