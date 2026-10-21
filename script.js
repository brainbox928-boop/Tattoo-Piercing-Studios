/* ==========================================================================
  ROYAL INK STUDIO — APP LOGIC (Vanilla ES6)
   All editable content (prices, names, images, artists, slots) lives in
   APP_DATA below. Update this object only — no HTML digging required.
   ========================================================================== */

const APP_DATA = {

  // ---- Tattoo styles grouped by project size; null price means artist quote ----
  tattooPricingGroups: [
    {
      name: "Small & Simple Tattoos",
      styles: [
        { id: "tattoo-small-simple", name: "Small/simple design", price: 400 },
        { id: "tattoo-small-lettering", name: "Small lettering", price: 400 },
        { id: "tattoo-fine-line", name: "Fine-line piece", price: 450 },
        { id: "tattoo-small-detailed", name: "Small detailed piece", price: 500 }
      ]
    },
    {
      name: "Medium Tattoos",
      styles: [
        { id: "tattoo-medium-custom", name: "Medium custom design", price: 600 },
        { id: "tattoo-medium-realism", name: "Medium realism", price: 700 },
        { id: "tattoo-medium-portrait", name: "Medium portrait", price: 800 },
        { id: "tattoo-medium-detailed", name: "Detailed custom piece", price: 900 }
      ]
    },
    {
      name: "Large Tattoos",
      styles: [
        { id: "tattoo-large-custom", name: "Large custom piece", price: 900 },
        { id: "tattoo-large-realism", name: "Large realism", price: 1200 },
        { id: "tattoo-back-chest-detailed", name: "Detailed back/chest piece", price: 1500 },
        { id: "tattoo-large-artwork", name: "Large custom artwork", price: 1800 }
      ]
    },
    {
      name: "Sleeves & Large-Scale Work",
      styles: [
        { id: "tattoo-half-sleeve", name: "Half sleeve", price: 1500 },
        { id: "tattoo-full-sleeve", name: "Full sleeve", price: 2500 },
        { id: "tattoo-large-back", name: "Large back piece", price: 3000 },
        { id: "tattoo-large-chest", name: "Large chest piece", price: 3000 },
        { id: "tattoo-japanese-large", name: "Japanese-style large piece", price: 2500 },
        { id: "tattoo-full-back", name: "Full back/large-scale project", price: 4000 },
        { id: "tattoo-bodysuit", name: "Full bodysuit projects — custom quote", price: null }
      ]
    }
  ],

  // ---- Piercing options: id, name, price (USD), description, bullet features, icon ----
  piercingOptions: [
    {
      id: "piercing-earlobe",
      name: "Earlobe",
      price: 40,
      icon: "bi-circle",
      description: "Classic single or double lobe piercing with surgical steel stud.",
      features: ["4-6 week healing", "Includes starter jewelry", "Quick 10-min session"]
    },
    {
      id: "piercing-nose",
      name: "Nose (Nostril)",
      price: 55,
      icon: "bi-flower1",
      description: "Precision nostril piercing using a hollow needle technique.",
      features: ["2-4 month healing", "Titanium jewelry", "Sterile single-use needle"]
    },
    {
      id: "piercing-septum",
      name: "Septum",
      price: 65,
      icon: "bi-dash-circle",
      description: "Clean septum piercing, ideal for circular barbells and rings.",
      features: ["6-8 week healing", "Adjustable jewelry", "Discreet 'flip-up' option"]
    },
    {
      id: "piercing-cartilage",
      name: "Cartilage / Helix",
      price: 70,
      icon: "bi-soundwave",
      description: "Upper ear cartilage piercing for curated ear stacking looks.",
      features: ["3-12 month healing", "Flat-back titanium", "Great for ear curation"]
    }
  ],

  // ---- Studio artists available for booking ----
  artists: [
    { id: "artist-mara", name: "Mara Voss — Realism Specialist" },
    { id: "artist-kai", name: "Kai Reyes — Traditional & Blackwork" },
    { id: "artist-lena", name: "Lena Achterberg — Fine Line Expert" },
    { id: "artist-theo", name: "Theo Brandt — Piercing Specialist" }
  ],

  // ---- Available appointment time slots ----
  timeSlots: ["11:00 AM", "12:30 PM", "2:00 PM", "3:30 PM", "5:00 PM", "6:30 PM"],

  // NOTE: Gallery photos are now managed directly in index.html (static HTML)
  // so they can be edited without touching JavaScript. See the ".masonry-item"
  // blocks inside the #gallery section.

  // ---- Aftercare products available for pre-order ----
  products: [
    {
      id: "prod-balm",
      name: "Healing Balm — Tattoo Aftercare",
      price: 18.99,
      img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80",
      description: "Fragrance-free balm to soothe and moisturize fresh tattoos."
    },
    {
      id: "prod-saline",
      name: "Sterile Saline Spray",
      price: 9.99,
      img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=500&q=80",
      description: "Gentle saline solution for daily piercing cleaning."
    },
    {
      id: "prod-soap",
      name: "Antimicrobial Tattoo Soap",
      price: 14.5,
      img: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=500&q=80",
      description: "pH-balanced, fragrance-free soap for the healing process."
    },
    {
      id: "prod-jewelry",
      name: "Titanium Aftercare Jewelry Set",
      price: 32,
      img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=500&q=80",
      description: "Hypoallergenic titanium jewelry set for healed piercings."
    },
    {
      id: "prod-wrap",
      name: "Breathable Protective Wrap",
      price: 11.75,
      img: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&w=500&q=80",
      description: "Second-skin adhesive wrap protecting fresh tattoos while healing."
    },
    {
      id: "prod-kit",
      name: "Complete Aftercare Kit",
      price: 49.99,
      img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=500&q=80",
      description: "Everything you need: balm, soap, saline spray & wrap bundled."
    }
  ],

  // ---- Business constants ----
  depositRate: 0.5 // 50% deposit required before an appointment is confirmed
};

/* ==========================================================================
   APPLICATION STATE
   ========================================================================== */
const cart = {}; // { productId: { ...product, qty } }
let selectedServicePrice = 0;
let selectedServiceLabel = "—";
let selectedServiceId = "";
let checkoutMode = "booking"; // "booking" (service + products) or "shop-only" (products only, no artist required)

// Field ids that are only required when booking an appointment
const BOOKING_ONLY_FIELD_IDS = [
  "serviceCategory", "serviceSelect", "artistSelect", "locationType",
  "appointmentDate", "appointmentTime", "designNotes", "clientAge"
];

/* ==========================================================================
   UTILITIES
   ========================================================================== */
const formatCurrency = (amount) => `$${Number(amount).toFixed(2)}`;

function getTattooStyles() {
  return APP_DATA.tattooPricingGroups.flatMap((group) => group.styles.map((style) => ({ ...style, group: group.name })));
}

function getServiceById(id) {
  return [...getTattooStyles(), ...APP_DATA.piercingOptions].find((s) => s.id === id);
}

function getProductById(id) {
  return APP_DATA.products.find((p) => p.id === id);
}

/* ==========================================================================
   RENDER: PRICING GRIDS (Tattoo / Piercing)
   ========================================================================== */
function renderPricingGrid(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = items.map((item) => `
    <div class="col-md-6 col-lg-3">
      <div class="pricing-card">
        <div class="price-icon"><i class="bi ${item.icon}"></i></div>
        <h5 class="mb-2">${item.name}</h5>
        <p class="price-tag mb-2">${formatCurrency(item.price)}</p>
        <p class="text-muted small mb-3">${item.description}</p>
        <ul>
          ${item.features.map((f) => `<li><i class="bi bi-check2"></i>${f}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

function renderTattooPricingGrid() {
  const container = document.getElementById("tattooPricingGrid");
  container.innerHTML = APP_DATA.tattooPricingGroups.map((group) => `
    <div class="col-md-6">
      <div class="pricing-card">
        <h5 class="mb-3">${group.name}</h5>
        <ul class="tattoo-price-list">
          ${group.styles.map((style) => `
            <li><span>${style.name.replace(" — custom quote", "")}</span>
              <strong>${style.price === null ? "Custom quote" : `from ${formatCurrency(style.price)}`}</strong>
            </li>
          `).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   RENDER: AFTERCARE SHOP GRID
   ========================================================================== */
function renderShopGrid() {
  const grid = document.getElementById("shopGrid");
  grid.innerHTML = APP_DATA.products.map((product) => `
    <div class="col-sm-6 col-lg-4">
      <div class="shop-card">
        <img src="${product.img}" alt="${product.name}" loading="lazy">
        <div class="shop-card-body">
          <h6 class="mb-1">${product.name}</h6>
          <p class="text-muted small flex-grow-1">${product.description}</p>
          <div class="d-flex justify-content-between align-items-center mt-2">
            <span class="price-tag">${formatCurrency(product.price)}</span>
            <button class="btn btn-outline-accent btn-sm add-to-cart-btn" data-product-id="${product.id}">
              <i class="bi bi-bag-plus"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  // Attach add-to-cart listeners
  grid.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", () => addToCart(btn.dataset.productId));
  });
}

/* ==========================================================================
   CART LOGIC
   ========================================================================== */
function addToCart(productId) {
  const product = getProductById(productId);
  if (!product) return;

  if (cart[productId]) {
    cart[productId].qty += 1;
  } else {
    cart[productId] = { ...product, qty: 1 };
  }
  renderCart();
  bumpCartBadge();
}

function updateCartQty(productId, delta) {
  if (!cart[productId]) return;
  cart[productId].qty += delta;
  if (cart[productId].qty <= 0) {
    delete cart[productId];
  }
  renderCart();
}

function removeFromCart(productId) {
  delete cart[productId];
  renderCart();
}

function getCartItems() {
  return Object.values(cart);
}

function getCartSubtotal() {
  return getCartItems().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
  return getCartItems().reduce((sum, item) => sum + item.qty, 0);
}

function bumpCartBadge() {
  const badge = document.getElementById("navCartCount");
  badge.classList.remove("pop");
  void badge.offsetWidth; // force reflow to restart animation
  badge.classList.add("pop");
}

// Builds the HTML markup for a single cart line item (shared by sidebar + offcanvas)
function buildCartLineItem(item) {
  return `
    <div class="cart-line-item" data-cart-id="${item.id}">
      <img src="${item.img}" alt="${item.name}">
      <div class="item-info">
        <h6>${item.name}</h6>
        <small>${formatCurrency(item.price)} x ${item.qty}</small>
      </div>
      <div class="qty-controls d-flex align-items-center gap-2">
        <button class="btn btn-sm btn-outline-secondary qty-decrease" data-id="${item.id}">-</button>
        <span class="small">${item.qty}</span>
        <button class="btn btn-sm btn-outline-secondary qty-increase" data-id="${item.id}">+</button>
        <button class="btn btn-sm btn-outline-danger remove-item" data-id="${item.id}"><i class="bi bi-trash"></i></button>
      </div>
    </div>
  `;
}

function renderCart() {
  const items = getCartItems();
  const subtotal = getCartSubtotal();
  const count = getCartCount();

  // Nav badge
  document.getElementById("navCartCount").textContent = count;

  // Checkout sidebar
  const sidebarList = document.getElementById("cartItemsList");
  const emptyMsg = document.getElementById("emptyCartMsg");
  document.getElementById("cartItemCount").textContent = `${count} item${count !== 1 ? "s" : ""}`;

  if (items.length === 0) {
    sidebarList.innerHTML = `<p class="text-muted small mb-0" id="emptyCartMsg">Your cart is empty. Add products from the Aftercare Shop.</p>`;
  } else {
    sidebarList.innerHTML = items.map(buildCartLineItem).join("");
  }

  // Offcanvas mirror
  const offcanvasList = document.getElementById("offcanvasCartItems");
  offcanvasList.innerHTML = items.length === 0
    ? `<p class="text-muted small">Your cart is empty. Add products from the Aftercare Shop.</p>`
    : items.map(buildCartLineItem).join("");

  document.getElementById("summaryProductsSubtotal").textContent = formatCurrency(subtotal);
  document.getElementById("offcanvasCartTotal").textContent = formatCurrency(subtotal);

  // Re-attach qty/remove listeners (delegated per render since innerHTML is rebuilt)
  document.querySelectorAll(".qty-increase").forEach((btn) =>
    btn.addEventListener("click", () => updateCartQty(btn.dataset.id, 1))
  );
  document.querySelectorAll(".qty-decrease").forEach((btn) =>
    btn.addEventListener("click", () => updateCartQty(btn.dataset.id, -1))
  );
  document.querySelectorAll(".remove-item").forEach((btn) =>
    btn.addEventListener("click", () => removeFromCart(btn.dataset.id))
  );

  updateTotals();
}

/* ==========================================================================
   BOOKING WIZARD LOGIC
   ========================================================================== */
function populateArtists() {
  const select = document.getElementById("artistSelect");
  select.innerHTML = `<option value="" selected disabled>Choose artist…</option>` +
    APP_DATA.artists.map((a) => `<option value="${a.id}">${a.name}</option>`).join("");
}

function populateTimeSlots() {
  const select = document.getElementById("appointmentTime");
  select.innerHTML = `<option value="" selected disabled>Select time slot…</option>` +
    APP_DATA.timeSlots.map((t) => `<option value="${t}">${t}</option>`).join("");
}

// Populates the "Service / Style" dropdown based on chosen category (tattoo/piercing)
function populateServiceOptions(category) {
  const select = document.getElementById("serviceSelect");
  select.disabled = false;
  select.innerHTML = `<option value="" selected disabled>Choose style or piercing…</option>`;

  if (category === "tattoo") {
    APP_DATA.tattooPricingGroups.forEach((group) => {
      const options = group.styles.map((style) => {
        const priceText = style.price === null ? "Custom quote" : `from ${formatCurrency(style.price)}`;
        return `<option value="${style.id}">${style.name} — ${priceText}</option>`;
      }).join("");
      select.insertAdjacentHTML("beforeend", `<optgroup label="${group.name}">${options}</optgroup>`);
    });
  } else {
    const options = APP_DATA.piercingOptions.map((style) =>
      `<option value="${style.id}">${style.name} — ${formatCurrency(style.price)}</option>`
    ).join("");
    select.insertAdjacentHTML("beforeend", options);
  }
}

function updateTotals() {
  const deposit = selectedServicePrice * APP_DATA.depositRate;
  const productsSubtotal = getCartSubtotal();
  const totalDueToday = deposit + productsSubtotal;

  document.getElementById("summaryServiceName").textContent = selectedServiceLabel;
  document.getElementById("summaryServicePrice").textContent = formatCurrency(selectedServicePrice);
  document.getElementById("summaryDeposit").textContent = formatCurrency(deposit);
  document.getElementById("summaryTotalDueToday").textContent = formatCurrency(totalDueToday);
}

/* ==========================================================================
   CHECKOUT MODE SWITCH
   "booking"   -> full wizard (service, artist, date/time) is required.
   "shop-only" -> booking fields are hidden and no longer required; the
                  client can pay for aftercare products alone.
   ========================================================================== */
function setCheckoutMode(mode) {
  checkoutMode = mode;
  const isBooking = mode === "booking";

  document.getElementById("serviceArtistCard").classList.toggle("d-none", !isBooking);
  document.getElementById("dobFieldCol").classList.toggle("d-none", !isBooking);
  document.getElementById("customQuoteField").classList.toggle("d-none", !isBooking || !selectedServiceId.startsWith("tattoo-"));
  document.getElementById("serviceSummaryRow").classList.toggle("d-none", !isBooking);
  document.getElementById("servicePriceRow").classList.toggle("d-none", !isBooking);
  document.getElementById("depositRow").classList.toggle("d-none", !isBooking);
  document.getElementById("remainingBalanceNote").classList.toggle("d-none", !isBooking);

  // Only fields required for booking should block submission when hidden
  BOOKING_ONLY_FIELD_IDS.forEach((id) => {
    document.getElementById(id).required = isBooking;
  });

  document.getElementById("paymentCardTitle").textContent = isBooking
    ? "Manual Payment — 50% Deposit Due Today"
    : "Manual Payment — Total Due Today";
  document.getElementById("submitBtnText").textContent = isBooking
    ? "Continue to Manual Payment"
    : "Continue to Product Payment";
  document.getElementById("policyAgreeText").textContent = isBooking
    ? "I agree to studio policies and understand my appointment is pending until the 50% deposit is received and verified."
    : "I confirm my aftercare order details and understand fulfillment begins after payment is verified.";

  if (!isBooking) {
    selectedServicePrice = 0;
    selectedServiceLabel = "—";
    selectedServiceId = "";
    document.getElementById("serviceCategory").value = "";
    document.getElementById("serviceSelect").innerHTML = `<option value="" selected disabled>Select a service first…</option>`;
    document.getElementById("serviceSelect").disabled = true;
    document.getElementById("customQuoteAmount").required = false;
    document.getElementById("customQuoteAmount").value = "";
  }

  document.getElementById("shopOnlyEmptyCartWarning").classList.add("d-none");
  updateTotals();
}

function attachCheckoutModeHandlers() {
  document.getElementById("modeBooking").addEventListener("change", () => setCheckoutMode("booking"));
  document.getElementById("modeShopOnly").addEventListener("change", () => setCheckoutMode("shop-only"));
}

/* ==========================================================================
   CART OFFCANVAS -> CHECKOUT NAVIGATION
   Bootstrap's dismiss handler calls preventDefault() on <a> triggers, so the
   href jump is blocked. Close the offcanvas first, then scroll manually once
   it has fully hidden. "Proceed to Checkout" always means "pay for the cart",
   so it forces Aftercare Shop Only mode (no booking fields required).
   ========================================================================== */
function attachProceedToCheckoutHandler() {
  const checkoutBtn = document.getElementById("proceedToCheckoutBtn");
  const offcanvasEl = document.getElementById("cartOffcanvas");

  checkoutBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const goToShopCheckout = () => {
      document.getElementById("modeShopOnly").checked = true;
      setCheckoutMode("shop-only");
      document.getElementById("payment").scrollIntoView({ behavior: "smooth" });
    };

    const offcanvasInstance = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
    offcanvasEl.addEventListener("hidden.bs.offcanvas", goToShopCheckout, { once: true });
    offcanvasInstance.hide();
  });
}

/* ==========================================================================
   "BOOK APPOINTMENT" CTAs -> BOOKING WIZARD NAVIGATION
   Forces Book an Appointment mode and lands directly on the Service &
   Artist card, regardless of whichever mode was previously active.
   ========================================================================== */
function attachBookAppointmentCtaHandlers() {
  document.querySelectorAll(".js-book-appointment-cta").forEach((cta) => {
    cta.addEventListener("click", (event) => {
      event.preventDefault();
      document.getElementById("modeBooking").checked = true;
      setCheckoutMode("booking");
      document.getElementById("serviceArtistCard").scrollIntoView({ behavior: "smooth" });
    });
  });
}

/* ==========================================================================
   BOOKING FORM SUBMISSION & SUCCESS MODAL
   ========================================================================== */
function attachBookingFormHandlers() {
  const categorySelect = document.getElementById("serviceCategory");
  const serviceSelect = document.getElementById("serviceSelect");
  const form = document.getElementById("bookingForm");

  categorySelect.addEventListener("change", () => {
    populateServiceOptions(categorySelect.value);
    selectedServicePrice = 0;
    selectedServiceLabel = "—";
    selectedServiceId = "";
    document.getElementById("customQuoteField").classList.add("d-none");
    document.getElementById("customQuoteAmount").required = false;
    document.getElementById("customQuoteAmount").value = "";
    updateTotals();
  });

  serviceSelect.addEventListener("change", () => {
    const service = getServiceById(serviceSelect.value);
    if (service) {
      selectedServiceId = service.id;
      const isTattoo = categorySelect.value === "tattoo";
      const quoteField = document.getElementById("customQuoteField");
      const quoteInput = document.getElementById("customQuoteAmount");
      quoteField.classList.toggle("d-none", !isTattoo);
      quoteInput.required = isTattoo;
      quoteInput.min = service.price ?? 1;
      quoteInput.value = service.price ?? "";

      if (isTattoo) {
        selectedServicePrice = Number(quoteInput.value) || 0;
        selectedServiceLabel = service.name;
      } else {
        selectedServicePrice = service.price;
        selectedServiceLabel = service.name;
      }
    }
    updateTotals();
  });

  document.getElementById("customQuoteAmount").addEventListener("input", (event) => {
    const selectedStyle = getServiceById(serviceSelect.value);
    selectedServicePrice = Number(event.target.value) || 0;
    selectedServiceLabel = selectedStyle
      ? `${selectedStyle.name} (${formatCurrency(selectedServicePrice)})`
      : "—";
    updateTotals();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    // Shop-only checkouts have nothing to pay for without at least one product
    if (checkoutMode === "shop-only" && getCartItems().length === 0) {
      document.getElementById("shopOnlyEmptyCartWarning").classList.remove("d-none");
      document.getElementById("cartItemsList").scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    document.getElementById("shopOnlyEmptyCartWarning").classList.add("d-none");

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      // Scroll to first invalid field for better UX
      const firstInvalid = form.querySelector(":invalid");
      if (firstInvalid) firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    continueToManualPayment();
  });
}

function continueToManualPayment() {
  const appointment = checkoutMode === "booking";
  const productsTotal = getCartSubtotal();
  const deposit = appointment ? selectedServicePrice * APP_DATA.depositRate : 0;
  const order = {
    type: appointment ? "appointment" : "aftercare",
    client: {
      name: document.getElementById("clientName").value.trim(),
      email: document.getElementById("clientEmail").value.trim(),
      phone: document.getElementById("clientPhone").value.trim()
    },
    booking: appointment ? {
      service: document.getElementById("serviceCategory").selectedOptions[0].textContent,
      style: selectedServiceLabel,
      artist: document.getElementById("artistSelect").selectedOptions[0].textContent,
      location: document.getElementById("locationType").selectedOptions[0].textContent,
      date: document.getElementById("appointmentDate").value,
      time: document.getElementById("appointmentTime").value,
      notes: document.getElementById("designNotes").value.trim(),
      serviceTotal: selectedServicePrice,
      deposit
    } : null,
    products: getCartItems().map(({ id, name, price, qty }) => ({ id, name, price, qty })),
    productsTotal,
    totalDue: deposit + productsTotal,
    currency: "USD"
  };

  sessionStorage.setItem("royalInkPendingCheckout", JSON.stringify(order));
  window.location.href = "payment.html";
}

/* ==========================================================================
   MISC UI HELPERS
   ========================================================================== */
function setMinDates() {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("appointmentDate").min = today;
}

function setFooterYear() {
  document.getElementById("footerYear").textContent = new Date().getFullYear();
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderTattooPricingGrid();
  renderPricingGrid("piercingPricingGrid", APP_DATA.piercingOptions);
  renderShopGrid();
  populateArtists();
  populateTimeSlots();
  attachBookingFormHandlers();
  attachProceedToCheckoutHandler();
  attachBookAppointmentCtaHandlers();
  attachCheckoutModeHandlers();
  setCheckoutMode("booking");
  setMinDates();
  setFooterYear();
  renderCart();
});
