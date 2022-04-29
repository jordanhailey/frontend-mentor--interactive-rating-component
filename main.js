const RATING_OPTIONS = document.querySelectorAll(".rating-options > button");

function showThankYouModal(reset) {
    const FORM = document.querySelector("#form");
    FORM.dataset.formCompleted = reset === undefined ? true : false;
}

function findSelectedOption() {
    return document.querySelector(".rating-options > button[aria-selected=\"true\"]");
}

RATING_OPTIONS.forEach(button=> {
    button.onclick = () => {
        const previouslySelected = findSelectedOption();
        if (previouslySelected) previouslySelected.ariaSelected = false;
        button.ariaSelected = true;
    }
})

const SUBMIT_BUTTON = document.querySelector("#submit");

SUBMIT_BUTTON.onclick = () => {
    const selected = findSelectedOption();
    if (!selected) return;
    const ratingSubmitted = selected.ariaLabel;
    document.querySelector("#rated").innerText = ratingSubmitted;
    showThankYouModal()
}

const RESET_BUTTON = document.querySelector("#reset");

RESET_BUTTON.onclick = () => {
    const previouslySelected = findSelectedOption();
    if (previouslySelected) {
        previouslySelected.ariaSelected = false;
        document.querySelector("#rated").innerText = "nothing";
    }
    showThankYouModal(false);
}