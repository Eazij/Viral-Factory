// Simple welcome interaction
document.addEventListener("DOMContentLoaded", () => {
  console.log("Social Growth Hub Loaded Successfully");
});

document.getElementById("orderForm").onsubmit = e => {
  e.preventDefault();
  alert("Payment request sent 📲\nApprove payment on your phone.");
};
