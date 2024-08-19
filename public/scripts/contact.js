//navbar
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("show");
  const body = document.querySelector(".body");
  body.style.overflow = "hidden";
  document.querySelectorAll("hideonMobile").forEach((element) => {
    element.style.display = "none";
  });
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("show");
  const body = document.querySelector(".body");
  body.style.overflow = "";
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("thankYouMessage").style.display = "block"; // Show thank you message
    this.reset(); // Reset the form fields
  });
