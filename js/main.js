// Page interactions and event wiring.
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  renderCategories();
  renderCart();

  // Search and filter functionality
  document.getElementById("search-input").addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    const active =
      document.querySelector(".category-chip.active")?.dataset.category ||
      "All";
    applyFilters(query, active);
  });

  // Category filter functionality
  document
    .getElementById("category-list")
    .addEventListener("click", (event) => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      document
        .querySelectorAll(".category-chip")
        .forEach((chip) => chip.classList.remove("active"));
      button.classList.add("active");
      applyFilters(
        document.getElementById("search-input").value.trim().toLowerCase(),
        button.dataset.category,
      );
    });

    // Cart functionality
  document.getElementById("menu-grid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-add]");
    if (button) addToCart(button.dataset.add);
  });

  // Cart item quantity change and removal functionality   
  document.getElementById("cart-items").addEventListener("click", (event) => {
    const change = event.target.closest("[data-change]");
    const remove = event.target.closest("[data-remove]");
    if (change)
      changeQuantity(change.dataset.change, Number(change.dataset.amount));
    if (remove) removeFromCart(remove.dataset.remove);
  });

  document.getElementById("cart-toggle").addEventListener("click", openCart);
  document.getElementById("cart-close").addEventListener("click", closeCart);
  document.getElementById("cart-overlay").addEventListener("click", closeCart);
  document.getElementById("checkout-button").addEventListener("click", () => {
    document.getElementById("checkout-modal").classList.add("visible");
  });
  document.getElementById("checkout-close").addEventListener("click", () => {
    document.getElementById("checkout-modal").classList.remove("visible");
  });
  document
    .getElementById("checkout-form")
    .addEventListener("submit", placeOrder);
});

// Function to apply search and category filters to the menu items
function applyFilters(query, category) {
  const filtered = FOOD_ITEMS.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;
    const matchesSearch = `${item.name} ${item.category} ${item.description}`
      .toLowerCase()
      .includes(query);
    return matchesCategory && matchesSearch;
  });
  renderMenu(filtered);
}