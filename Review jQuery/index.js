$(document).ready(function () {
  let responsiveReviewBox = [];
  let conpetencyReviewBox = [];
  let trustReviewBox = [];
  let serviceReviewBox = [];

  const selectArrays = function (array, newArray) {
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i]);
    }
  };

  selectArrays($(".responsive-review-box"), responsiveReviewBox);
  selectArrays($(".conpetency-review-box"), conpetencyReviewBox);
  selectArrays($(".trust-review-box"), trustReviewBox);
  selectArrays($(".service-review-box"), serviceReviewBox);

  const submitButton = $(".submit-button");

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
      $(array[i]).addClass(color);
    }
  };

  const removeColorFromAllBoxes = (array) => {
    for (let i = 0; i < array.length; i++) {
      $(array[i]).removeClass(
        "click-left-box click-box-1 click-box-2 click-box-3 click-right-box"
      );
    }
  };

  const mainFunction = (array, className, elementName) => {
    for (let i = 0; i < array.length; i++) {
      const radioButton = $(`.${className} input[type=radio]`);

      const radioButtonValue = Number($(radioButton[i]).val());

      $(array[i]).click(() => {
        removeColorFromAllBoxes(array);
        console.log(`Radio button value: ${radioButtonValue}`);

        colorall(array, radioButtonValue);
      });
    }

    let rate_value;

    $(submitButton).click(() => {
      let element = $(`input[name=${elementName}`);

      for (i = 0; i < element.length; i++) {
        if (element[i].checked)
          rate_value = `${elementName}: ${element[i].value}`;
      }

      const jsonValue = {
        value: rate_value,
      };
      console.log(jsonValue);
    });
  };

  mainFunction(responsiveReviewBox, "responsive-review-box", "responsive");
  mainFunction(conpetencyReviewBox, "conpetency-review-box", "conpetency");
  mainFunction(trustReviewBox, "trust-review-box", "trust");
  mainFunction(serviceReviewBox, "service-review-box", "service");
});
