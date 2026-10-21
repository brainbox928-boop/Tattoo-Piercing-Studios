const PAYMENT_STORAGE_KEY = "royalInkPendingCheckout";
const paymentForm = document.getElementById("paymentEvidenceForm");
const paymentOrderSummary = document.getElementById("orderSummary");
const paymentError = document.getElementById("paymentFormError");
const paymentOrder = readPendingOrder();

function readPendingOrder() {
  try {
    return JSON.parse(sessionStorage.getItem(PAYMENT_STORAGE_KEY));
  } catch {
    return null;
  }
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function money(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Number(value) || 0);
}

function renderPaymentOrder(order) {
  if (!order || !order.client || !Number.isFinite(Number(order.totalDue))) {
    paymentOrderSummary.innerHTML = "<p class=\"mb-0\">No current order was found. Start from the studio checkout.</p>";
    document.getElementById("missingOrderNotice").classList.remove("d-none");
    paymentForm.querySelectorAll("button, input, select, textarea").forEach((control) => {
      if (control.name !== "form-name" && control.name !== "bot-field") control.disabled = true;
    });
    return;
  }

  const productRows = (order.products || []).map((item) => `
    <div class="payment-summary-row"><span>${escapeHtml(item.name)} × ${Number(item.qty) || 0}</span><strong>${money((Number(item.price) || 0) * (Number(item.qty) || 0))}</strong></div>
  `).join("");
  const bookingRows = order.booking ? `
    <div class="payment-summary-row"><span>Service</span><strong>${escapeHtml(order.booking.service)}</strong></div>
    <div class="payment-summary-row"><span>Style</span><strong>${escapeHtml(order.booking.style)}</strong></div>
    <div class="payment-summary-row"><span>Artist</span><strong>${escapeHtml(order.booking.artist)}</strong></div>
    <div class="payment-summary-row"><span>Appointment</span><strong>${escapeHtml(order.booking.date)} · ${escapeHtml(order.booking.time)}</strong></div>
    <div class="payment-summary-row"><span>Location</span><strong>${escapeHtml(order.booking.location)}</strong></div>
    <div class="payment-summary-row"><span>Service total</span><strong>${money(order.booking.serviceTotal)}</strong></div>
    <div class="payment-summary-row"><span>50% appointment deposit</span><strong>${money(order.booking.deposit)}</strong></div>
  ` : "";

  paymentOrderSummary.innerHTML = `
    <div class="d-flex justify-content-between align-items-start gap-3 mb-2">
      <div><h2 class="h5 mb-1">Order for ${escapeHtml(order.client.name)}</h2><p class="text-light small mb-0">${escapeHtml(order.client.email)}</p></div>
      <span class="badge text-bg-warning">${order.type === "appointment" ? "Appointment request" : "Aftercare order"}</span>
    </div>
    ${bookingRows}
    ${productRows ? `<div class="payment-summary-row"><span>Aftercare products</span><strong>${money(order.productsTotal)}</strong></div>${productRows}` : ""}
    <div class="payment-summary-row payment-summary-total"><span>Total to send today</span><strong>${money(order.totalDue)}</strong></div>
  `;

  document.getElementById("paymentCustomerName").value = order.client.name || "";
  document.getElementById("paymentCustomerEmail").value = order.client.email || "";
  document.getElementById("paymentCustomerPhone").value = order.client.phone || "";
  document.getElementById("paymentOrderType").value = order.type || "";
  document.getElementById("paymentOrderSummary").value = paymentOrderSummary.innerText;
  document.getElementById("paymentOrderTotal").value = Number(order.totalDue).toFixed(2);
  document.getElementById("paymentBookingDetails").value = order.booking ? JSON.stringify(order.booking) : "";
  document.getElementById("paymentProductsDetails").value = JSON.stringify(order.products || []);
}

function setPaymentMethod() {
  const method = document.querySelector('input[name="methodChoice"]:checked').value;
  const cryptoSelected = method === "crypto";
  document.getElementById("bankInstructions").classList.toggle("d-none", cryptoSelected);
  document.getElementById("cryptoInstructions").classList.toggle("d-none", !cryptoSelected);
  document.getElementById("paymentMethodValue").value = method;
  document.getElementById("paymentCryptoValue").value = cryptoSelected
    ? document.getElementById("cryptoAsset").value
    : "";
}

document.querySelectorAll('input[name="methodChoice"]').forEach((input) => {
  input.addEventListener("change", setPaymentMethod);
});
document.getElementById("cryptoAsset").addEventListener("change", setPaymentMethod);

document.querySelectorAll(".copy-payment-value").forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.innerHTML = '<i class="bi bi-check2"></i>';
      button.setAttribute("aria-label", "Copied");
      window.setTimeout(() => {
        button.innerHTML = '<i class="bi bi-copy"></i>';
        button.setAttribute("aria-label", `Copy ${button.title.replace("Copy ", "")}`);
      }, 1400);
    } catch {
      paymentError.textContent = "Clipboard access was blocked. Select and copy the bank detail manually.";
      paymentError.classList.remove("d-none");
    }
  });
});

paymentForm.addEventListener("submit", (event) => {
  if (!paymentOrder) {
    event.preventDefault();
    document.getElementById("missingOrderNotice").classList.remove("d-none");
    return;
  }

  if (!paymentForm.checkValidity()) {
    event.preventDefault();
    paymentForm.classList.add("was-validated");
    paymentForm.reportValidity();
    return;
  }

  setPaymentMethod();
  document.getElementById("submitEvidenceButton").disabled = true;
  document.getElementById("submitEvidenceButton").innerHTML = '<span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>Submitting…';
});

renderPaymentOrder(paymentOrder);
setPaymentMethod();
