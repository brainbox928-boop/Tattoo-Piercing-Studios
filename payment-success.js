const CONFIRMATION_STORAGE_KEY = "royalInkPendingCheckout";

function escapeConfirmationText(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function confirmationMoney(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Number(value) || 0);
}

function renderSubmittedOrder() {
  const target = document.getElementById("confirmationOrderDetails");
  let order;

  try {
    order = JSON.parse(sessionStorage.getItem(CONFIRMATION_STORAGE_KEY));
  } catch {
    order = null;
  }

  if (!order) {
    target.innerHTML = "<p class=\"mb-0\">Order details are not available in this browser session. Contact the studio with your payment reference if you need help.</p>";
    return;
  }

  const booking = order.booking ? `
    <div class="payment-summary-row"><span>Service</span><strong>${escapeConfirmationText(order.booking.service)}</strong></div>
    <div class="payment-summary-row"><span>Style</span><strong>${escapeConfirmationText(order.booking.style)}</strong></div>
    <div class="payment-summary-row"><span>Artist</span><strong>${escapeConfirmationText(order.booking.artist)}</strong></div>
    <div class="payment-summary-row"><span>Appointment requested</span><strong>${escapeConfirmationText(order.booking.date)} · ${escapeConfirmationText(order.booking.time)}</strong></div>
    <div class="payment-summary-row"><span>Location</span><strong>${escapeConfirmationText(order.booking.location)}</strong></div>
    <div class="payment-summary-row"><span>Design notes</span><strong>${escapeConfirmationText(order.booking.notes)}</strong></div>
    <div class="payment-summary-row"><span>Deposit submitted for review</span><strong>${confirmationMoney(order.booking.deposit)}</strong></div>
  ` : "";
  const products = (order.products || []).map((item) => `
    <div class="payment-summary-row"><span>${escapeConfirmationText(item.name)} × ${Number(item.qty) || 0}</span><strong>${confirmationMoney((Number(item.price) || 0) * (Number(item.qty) || 0))}</strong></div>
  `).join("");
  const paymentMethod = order.paymentMethod === "crypto"
    ? `Cryptocurrency (${escapeConfirmationText(order.cryptoAsset || "")})`
    : "Bank transfer";

  target.innerHTML = `
    <h2 class="h5 mb-2">Order submitted for ${escapeConfirmationText(order.client.name)}</h2>
    <p class="text-light small mb-2">Email: ${escapeConfirmationText(order.client.email)} · Phone: ${escapeConfirmationText(order.client.phone)}</p>
    ${booking}
    ${products}
    <div class="payment-summary-row"><span>Payment method</span><strong>${paymentMethod}</strong></div>
    <div class="payment-summary-row payment-summary-total"><span>Amount submitted</span><strong>${confirmationMoney(order.totalDue)}</strong></div>
  `;

  const channel = order.confirmationChannel === "sms" ? "SMS/text message" : "email";
  const destination = order.confirmationChannel === "sms" ? order.client.phone : order.client.email;
  document.getElementById("confirmationContactMessage").textContent =
    `After manual payment verification, Royal INK Studio will contact you by ${channel} at ${destination}.`;
}

renderSubmittedOrder();
