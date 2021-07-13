// //////////////////////////////////
// Competency review box

const responsiveReviewBox = document.querySelectorAll(".responsive-review-box");
const competencyLeftBox = document.querySelector(".conpetency-review-box");

const submitButton = document.querySelector(".submit-button");

// Functions

const nameTheFunc = function (selectedItemId) {
    responsiveReviewBox[selectedItemId].addEventListener("click", function () {
        switch (selectedItemId) {
            case 0:
                for (let j = 0; j <= selectedItemId; j++) {
                    if (responsiveReviewBox[j].classList.contains("click-box-1"))
                        responsiveReviewBox[j].classList.remove("click-box-1");

                    if (responsiveReviewBox[j].classList.contains("click-box-2"))
                        responsiveReviewBox[j].classList.remove("click-box-2");

                    if (responsiveReviewBox[j].classList.contains("click-box-3"))
                        responsiveReviewBox[j].classList.remove("click-box-3");

                    if (responsiveReviewBox[j].classList.contains("click-right-box"))
                        responsiveReviewBox[j].classList.remove("click-right-box");

                    if (responsiveReviewBox[j].classList.contains("click-left-box")) {
                        responsiveReviewBox[j].classList.remove("click-left-box");
                    } else {
                        responsiveReviewBox[j].classList.add("click-left-box");
                    }
                }
                break;

            case 1:
                for (let j = 0; j <= selectedItemId; j++) {
                    if (responsiveReviewBox[j].classList.contains("click-left-box"))
                        responsiveReviewBox[j].classList.remove("click-left-box");

                    if (responsiveReviewBox[j].classList.contains("click-box-2"))
                        responsiveReviewBox[j].classList.remove("click-box-2");

                    if (responsiveReviewBox[j].classList.contains("click-box-3"))
                        responsiveReviewBox[j].classList.remove("click-box-3");

                    if (responsiveReviewBox[j].classList.contains("click-right-box"))
                        responsiveReviewBox[j].classList.remove("click-right-box");

                    if (responsiveReviewBox[j].classList.contains("click-box-1")) {
                        responsiveReviewBox[j].classList.remove("click-box-1");
                    } else {
                        responsiveReviewBox[j].classList.add("click-box-1");
                    }
                }
                break;

            case 2:
                for (let j = 0; j <= selectedItemId; j++) {
                    if (responsiveReviewBox[j].classList.contains("click-left-box"))
                        responsiveReviewBox[j].classList.remove("click-left-box");

                    if (responsiveReviewBox[j].classList.contains("click-box-1"))
                        responsiveReviewBox[j].classList.remove("click-box-1");

                    if (responsiveReviewBox[j].classList.contains("click-box-3"))
                        responsiveReviewBox[j].classList.remove("click-box-3");

                    if (responsiveReviewBox[j].classList.contains("click-right-box"))
                        responsiveReviewBox[j].classList.remove("click-right-box");

                    if (responsiveReviewBox[j].classList.contains("click-box-2")) {
                        responsiveReviewBox[j].classList.remove("click-box-2");
                    } else {
                        responsiveReviewBox[j].classList.add("click-box-2");
                    }
                }

                break;

            case 3:
                for (let j = 0; j <= selectedItemId; j++) {
                    if (responsiveReviewBox[j].classList.contains("click-left-box"))
                        responsiveReviewBox[j].classList.remove("click-left-box");

                    if (responsiveReviewBox[j].classList.contains("click-box-1"))
                        responsiveReviewBox[j].classList.remove("click-box-1");

                    if (responsiveReviewBox[j].classList.contains("click-box-2"))
                        responsiveReviewBox[j].classList.remove("click-box-2");

                    if (responsiveReviewBox[j].classList.contains("click-right-box"))
                        responsiveReviewBox[j].classList.remove("click-right-box");

                    if (responsiveReviewBox[j].classList.contains("click-box-3")) {
                        responsiveReviewBox[j].classList.remove("click-box-3");
                    } else {
                        responsiveReviewBox[j].classList.add("click-box-3");
                    }
                }
                break;

            case 4:
                for (let j = 0; j <= selectedItemId; j++) {
                    if (responsiveReviewBox[j].classList.contains("click-left-box"))
                        responsiveReviewBox[j].classList.remove("click-left-box");

                    if (responsiveReviewBox[j].classList.contains("click-box-1"))
                        responsiveReviewBox[j].classList.remove("click-box-1");

                    if (responsiveReviewBox[j].classList.contains("click-box-2"))
                        responsiveReviewBox[j].classList.remove("click-box-2");

                    if (responsiveReviewBox[j].classList.contains("click-box-3"))
                        responsiveReviewBox[j].classList.remove("click-box-3");

                    //
                    if (responsiveReviewBox[j].classList.contains("click-right-box")) {
                        responsiveReviewBox[j].classList.remove("click-right-box");
                    } else {
                        responsiveReviewBox[j].classList.add("click-right-box");
                    }
                }

                break;

            default:
                break;
        }

        responsiveReview = selectedItemId;
        switch (responsiveReview) {
            case 0:
                responsiveReview = "Extremely bad";
                break;

            case 1:
                responsiveReview = "Bad";
                break;

            case 2:
                responsiveReview = "Neutral";
                break;

            case 3:
                responsiveReview = "Good";
                break;

            case 4:
                responsiveReview = "Extremely Good";
                break;
            default:
                console.log("!!! error 💥");
                break;
        }
    });
};

// Reviews
let responsiveReview;

for (let i = 0; i < responsiveReviewBox.length; i++) {
    let feedbackId;

    (function () {
        if (i == 0) feedbackId = 0;
        else if (i == 1) feedbackId = 1;
        else if (i == 2) feedbackId = 2;
        else if (i == 3) feedbackId = 3;
        else if (i == 4) feedbackId = 4;
        else console.log("!!! error 💥");

        return feedbackId;
    })();

    nameTheFunc(feedbackId);
}

submitButton.addEventListener("click", () => {
    console.log(`User responsiveness review: ${responsiveReview}`);
});
