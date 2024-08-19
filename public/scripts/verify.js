const urlParams = new URLSearchParams(window.location.search);
const success = urlParams.get("success");
const orderId = urlParams.get("orderId");

const verifyPayment = async () => {
  const response = await axios.post(
    "https://travel-ticket-backend.onrender.com/api/checkout/verify",
    {
      success,
      orderId,
    }
  );
  if (response.data.success) {
    const url = "../pages/profile.html";
    window.location.href = url;
  } else {
    window.location.href = "../../index.html";
    alert(response.data.message);
  }
};

verifyPayment();
