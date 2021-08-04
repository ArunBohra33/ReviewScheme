// BOX SELECTORS
const responsiveReviewBox = document.querySelectorAll(".responsive-review-box");
const conpetencyReviewBox = document.querySelectorAll(".conpetency-review-box");
const trustReviewBox = document.querySelectorAll(".trust-review-box");
const serviceReviewBox = document.querySelectorAll(".service-review-box");

// SUBMIT BUTTON
const submitButton = document.querySelector(".submit-button");
// ALL COLORS

const allColorClassNames = [
  "click-left-box",
  "click-box-1",
  "click-box-2",
  "click-box-3",
  "click-right-box",
];

const colorall = (array, value) => {
  let color;

  color = allColorClassNames[value - 1];

  for (let i = 0; i < value; i++) {
    array[i].classList.add(color);
  }
};

const removeColorFromAllBoxes = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i].classList.remove(
      "click-left-box",
      "click-box-1",
      "click-box-2",
      "click-box-3",
      "click-right-box"
    );
  }
};

const mainFunction = (array, className, name) => {
  const radioButton = document.querySelectorAll(
    `.${className} input[type=radio]`
  );

  for (let i = 0; i < array.length; i++) {
    const radioButtonValue = Number(radioButton[i].value);

    array[i].addEventListener("click", () => {
      console.log(`Radio button value: ${radioButtonValue}`);

      removeColorFromAllBoxes(array);
      colorall(array, radioButtonValue);
    });
  }

  let rate_value;

  submitButton.addEventListener("click", () => {
    var element = document.getElementsByName(name);

    for (i = 0; i < element.length; i++) {
      if (element[i].checked) rate_value = `${name}: ${element[i].value}`;
    }

    console.log(rate_value);
  });
};

mainFunction(responsiveReviewBox, "responsive-review-box", "responsive");
mainFunction(conpetencyReviewBox, "conpetency-review-box", "conpetency");
mainFunction(trustReviewBox, "trust-review-box", "trust");
mainFunction(serviceReviewBox, "service-review-box", "service");
