const ratingItems = document.querySelectorAll('.item');
const submitBtn = document.querySelector('#submit');
const ratingProcess = document.querySelector('#rating-process');
const ratingResult = document.querySelector('#rating-result');
const resultValue = document.querySelector('#result-value');

let selectedRating = 0;

ratingItems.forEach(item => {
    item.addEventListener('click', () => {
        ratingItems.forEach(item => item.classList.remove('active'));
        item.classList.toggle('active');
        selectedRating = item.dataset.ratingValue;

        submitBtn.classList.remove('disabled');
    });
});

submitBtn.classList.add('disabled');

submitBtn.addEventListener('click', () => {
    ratingProcess.classList.add('hide');
    ratingResult.classList.remove('hide');
    resultValue.innerHTML = selectedRating;
});
