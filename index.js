// //////////////////
// QUERY SELECTORS

const responsiveReviewBox = document.querySelectorAll('.responsive-review-box');
const conpetencyReviewBox = document.querySelectorAll('.conpetency-review-box');
const trustReviewBox = document.querySelectorAll('.trust-review-box');
const serviceReviewBox = document.querySelectorAll('.service-review-box');

const submitButton = document.querySelector('.submit-button');

// //////////////////
// VARIABLES

const allColorClassNames = [
    'click-left-box',
    'click-box-1',
    'click-box-2',
    'click-box-3',
    'click-right-box',
];

let responsivenessFeedback, conpetencyFeedback, trustFeedback, serviceFeedback;

// //////////////////
// FUNCTIONS

// Function to remove color from all boxes
const removeColorFromAllBoxes = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i].classList.remove(
            'click-left-box',
            'click-box-1',
            'click-box-2',
            'click-box-3',
            'click-right-box'
        );
    }
};

// Function to add color to boxes
const addColorToBoxes = (array) => {
    for (let i = 0; i < array.length; i++) {}
};

// Function to return the selected value
const returnSelectedValue = (selectedItemId) => {
    switch (selectedItemId) {
        case 0:
            selectedValue = 'Extremely Bad';
            break;

        case 1:
            selectedValue = 'Bad';
            break;

        case 2:
            selectedValue = 'Neutral';
            break;

        case 3:
            selectedValue = 'Good';
            break;

        case 4:
            selectedValue = 'Extremely Good';
            break;

        default:
            alert('Error in returning the selected value 💥!');
            break;
    }

    return selectedValue;
};

// //////////////////////////////
// EXECUTION OF THE APPLICATION

(() => {
    // Execution of responsiveness review
    for (let i = 0; i < responsiveReviewBox.length; i++) {
        responsiveReviewBox[i].addEventListener('click', () => {
            // remove color from all boxes
            removeColorFromAllBoxes(responsiveReviewBox);

            // Add color to all boxes
            for (let j = 0; j <= i; j++) {
                responsiveReviewBox[j].classList.add(allColorClassNames[i]);
            }

            responsivenessFeedback = returnSelectedValue(i);
        });
    }

    // Execution of conpetency review
    for (let i = 0; i < conpetencyReviewBox.length; i++) {
        conpetencyReviewBox[i].addEventListener('click', () => {
            // remove color from all boxes
            removeColorFromAllBoxes(conpetencyReviewBox);

            // Add color to all boxes
            for (let j = 0; j <= i; j++) {
                conpetencyReviewBox[j].classList.add(allColorClassNames[i]);
            }

            conpetencyFeedback = returnSelectedValue(i);
        });
    }

    // Execution of trust review
    for (let i = 0; i < trustReviewBox.length; i++) {
        trustReviewBox[i].addEventListener('click', () => {
            // remove color from all boxes
            removeColorFromAllBoxes(trustReviewBox);

            // Add color to all boxes
            for (let j = 0; j <= i; j++) {
                trustReviewBox[j].classList.add(allColorClassNames[i]);
            }

            trustFeedback = returnSelectedValue(i);
        });
    }

    // Execution of service review
    for (let i = 0; i < serviceReviewBox.length; i++) {
        serviceReviewBox[i].addEventListener('click', () => {
            // remove color from all boxes
            removeColorFromAllBoxes(serviceReviewBox);

            // Add color to all boxes
            for (let j = 0; j <= i; j++) {
                serviceReviewBox[j].classList.add(allColorClassNames[i]);
            }

            serviceFeedback = returnSelectedValue(i);
        });
    }
})();

submitButton.addEventListener('click', () => {
    console.log(`Responsiveness Feedback: ${responsivenessFeedback}`);
    console.log(`Conpetency Feedback: ${conpetencyFeedback}`);
    console.log(`Trust Feedback: ${trustFeedback}`);
    console.log(`Service Feedback: ${serviceFeedback}`);
});
