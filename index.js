const questionBtn = document.querySelectorAll("button");
const dropdownText = document.querySelectorAll(".dropdown-text");
const plusMinusImg = document.querySelector(".plus-minus-img");

questionBtn.forEach((button, index) => {
  button.addEventListener("click", function () {
    dropdownText.forEach((dropdown, dropdownIndex) => {
      if (index === dropdownIndex) {
        // plusMinusImg.src = "/assets/images/icon-minus.svg"
        if (dropdown.style.display === "none" || dropdown.style.display === "") {
            dropdown.style.display = "block";
        } else {
            dropdown.style.display = "none";
        }
    } else {
        dropdown.style.display = "none";
    }
    });
  });
});
