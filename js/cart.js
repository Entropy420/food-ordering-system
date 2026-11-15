// Shopping cart, quantity controls, totals and checkout (Student 2's module).
const DELIVERY_FEE = 35;
let cart = JSON.parse(localStorage.getItem("crave-cart") || "[]");

function saveCart() {
  localStorage.setItem("crave-cart", JSON.stringify(cart));
  renderCart();
}

function addToCart(id) {
  const food = FOOD_ITEMS.find((item) => item.id === Number(id));
  if (!food) return;
  const existing = cart.find((item) => item.id === food.id);
  if (existing) existing.quantity += 1;
  else cart.push({ ...food, quantity: 1 });
  saveCart();
  showToast(`${food.name} added to your order`);
}

function changeQuantity(id, amount) {
  const item = cart.find((entry) => entry.id === Number(id));
  if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0)
    cart = cart.filter((entry) => entry.id !== Number(id));
  saveCart();
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== Number(id));
  saveCart();
}

function getSubtotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function renderCart() {
  const list = document.getElementById("cart-items");
  const count = document.getElementById("cart-count");
  const subtotalEl = document.getElementById("subtotal");
  const deliveryEl = document.getElementById("delivery-fee");
  const totalEl = document.getElementById("total");
  const checkout = document.getElementById("checkout-button");
  if (!list) return;
  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = getSubtotal();
  const delivery = cart.length ? DELIVERY_FEE : 0;
  if (count) count.textContent = quantity;
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (deliveryEl) deliveryEl.textContent = formatPrice(delivery);
  if (totalEl) totalEl.textContent = formatPrice(subtotal + delivery);
  if (checkout) checkout.disabled = cart.length === 0;

  if (!cart.length) {
    list.innerHTML =
      '<p class="py-10 text-center text-stone-500">Your cart is empty. Add something delicious!</p>';
    return;
  }
  list.innerHTML = cart
    .map(
      (item) => `
    <div class="flex gap-3 border-b border-stone-100 pb-4">
      <img src="${item.image}" alt="" class="h-20 w-20 rounded-xl object-cover">
      <div class="min-w-0 flex-1">
        <div class="flex justify-between gap-2"><h3 class="font-bold">${item.name}</h3><button data-remove="${item.id}" class="text-xs font-semibold text-stone-400 hover:text-red-500">Remove</button></div>
        <p class="mt-1 text-sm text-stone-500">${formatPrice(item.price)} each</p>
        <div class="mt-2 flex items-center justify-between"><div class="cart-quantity flex items-center gap-2"><button data-change="${item.id}" data-amount="-1" aria-label="Decrease quantity">−</button><span class="w-4 text-center text-sm font-bold">${item.quantity}</span><button data-change="${item.id}" data-amount="1" aria-label="Increase quantity">+</button></div><span class="font-extrabold">${formatPrice(item.price * item.quantity)}</span></div>
      </div>
    </div>`,
    )
    .join("");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.add("hidden"), 2200);
}

function placeOrder(event) {
  event.preventDefault();
  if (!cart.length) return;
  const name = document.getElementById("customer-name").value.trim();
  const phone = document.getElementById("customer-phone").value.trim();
  const address = document.getElementById("customer-address").value.trim();
  const orderId = `CR${Date.now().toString().slice(-6)}`;
  const total = getSubtotal() + DELIVERY_FEE;
  const order = {
    orderId,
    name,
    phone,
    address,
    items: cart,
    total,
    createdAt: new Date().toISOString(),
  };
  const previousOrders = JSON.parse(
    localStorage.getItem("crave-orders") || "[]",
  );
  previousOrders.push(order);
  localStorage.setItem("crave-orders", JSON.stringify(previousOrders));
  cart = [];
  localStorage.removeItem("crave-cart");
  document.getElementById("checkout-modal").classList.remove("visible");
  document.getElementById("checkout-form").reset();
  closeCart();
  renderCart();
  showToast(`Order ${orderId} confirmed! Total: ${formatPrice(total)}`);
}

function openCart() {
  document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("cart-overlay").classList.add("visible");
}
function closeCart() {
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("visible");
}