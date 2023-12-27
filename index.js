const questionBtn = document.querySelectorAll("button");
const dropdownText = document.querySelectorAll(".dropdown-text");
const plusMinusImgs = document.querySelectorAll(".plus-minus-img");

questionBtn.forEach((button, index) => {
  button.addEventListener("click", function () {
    const plusMinusImg = button.querySelector(".plus-minus-img");

    dropdownText.forEach((dropdown, dropdownIndex) => {
      if (index === dropdownIndex) {
        if (
          dropdown.style.display === "none" ||
          dropdown.style.display === ""
        ) {
          dropdownText.forEach((item, i) => {
            if (i !== index) {
              item.style.display = "none";
              plusMinusImgs[i].src = "/assets/images/icon-plus.svg";
            }
          });
          dropdown.style.display = "block";
          plusMinusImg.src = "/assets/images/icon-minus.svg";
        } else {
          dropdown.style.display = "none";
          plusMinusImg.src = "/assets/images/icon-plus.svg";
        }
      } else {
        dropdown.style.display = "none";
      }
    });
  });
});
