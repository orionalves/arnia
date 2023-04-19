const paymentSelect = document.getElementById("payment");
const paidRadio = document.getElementById("paid");
const notPaidRadio = document.getElementById("not-paid");

paymentSelect.addEventListener("change", function() {
    if (paymentSelect.value !== "not-paid") {
        paidRadio.disabled = false;
        notPaidRadio.disabled = true;
    } else {
        paidRadio.disabled = true;
        notPaidRadio.disabled = false;
    }
});