const CONFIRMATION_STORAGE_KEY = "royalInkPendingCheckout";
const submissionIsUnconfigured = new URLSearchParams(window.location.search).get("submission") === "unconfigured";

if (submissionIsUnconfigured) {
  document.title = "Submission Not Sent | Royal INK Studio";
  document.getElementById("confirmationStatusIcon").innerHTML = '<i class="bi bi-exclamation-circle" aria-hidden="true"></i>';
  document.getElementById("confirmationStatusLabel").textContent = "Form destination not connected";
  document.getElementById("confirmationStatusTitle").textContent = "No evidence was sent";
  document.getElementById("confirmationStatusMessage").textContent =
    "GitHub Pages cannot receive or store form submissions. Your transaction reference and uploaded receipt were not sent. Connect a form service before accepting payment evidence.";
  document.getElementById("confirmationContactMessage").textContent =
    "Please contact the studio directly to share payment evidence. Do not assume a payment or appointment has been recorded.";
}

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
    <div class="payment-summary-row"><span>${submissionIsUnconfigured ? "Appointment deposit due" : "Deposit submitted for review"}</span><strong>${confirmationMoney(order.booking.deposit)}</strong></div>
  ` : "";
  const products = (order.products || []).map((item) => `
    <div class="payment-summary-row"><span>${escapeConfirmationText(item.name)} × ${Number(item.qty) || 0}</span><strong>${confirmationMoney((Number(item.price) || 0) * (Number(item.qty) || 0))}</strong></div>
  `).join("");
  const paymentMethod = order.paymentMethod === "crypto"
    ? `Cryptocurrency (${escapeConfirmationText(order.cryptoAsset || "")})`
    : "Bank transfer";

  target.innerHTML = `
    <h2 class="h5 mb-2">${submissionIsUnconfigured ? "Order details for" : "Order submitted for"} ${escapeConfirmationText(order.client.name)}</h2>
    <p class="text-light small mb-2">Email: ${escapeConfirmationText(order.client.email)} · Phone: ${escapeConfirmationText(order.client.phone)}</p>
    ${booking}
    ${products}
    <div class="payment-summary-row"><span>Payment method</span><strong>${paymentMethod}</strong></div>
    <div class="payment-summary-row payment-summary-total"><span>${submissionIsUnconfigured ? "Amount due" : "Amount submitted"}</span><strong>${confirmationMoney(order.totalDue)}</strong></div>
  `;

  const channel = order.confirmationChannel === "sms" ? "SMS/text message" : "email";
  const destination = order.confirmationChannel === "sms" ? order.client.phone : order.client.email;
  if (!submissionIsUnconfigured) {
    document.getElementById("confirmationContactMessage").textContent =
      `After manual payment verification, Royal INK Studio will contact you by ${channel} at ${destination}.`;
  }
}

renderSubmittedOrder();
