const questionBtn = document.querySelectorAll("button");
const dropdownText = document.querySelectorAll(".dropdown-text");

questionBtn.forEach((button, index) => {
  button.addEventListener("click", function () {
    dropdownText.forEach((dropdown, dropdownIndex) => {
      if (index === dropdownIndex) {
        // Toggle display for the clicked button's corresponding dropdown
        dropdown.style.display =
          dropdown.style.display === "none" || dropdown.style.display === ""
            ? "block"
            : "none";
      } else {
        // Hide other dropdowns
        dropdown.style.display = "none";
      }
    });
  });
});
