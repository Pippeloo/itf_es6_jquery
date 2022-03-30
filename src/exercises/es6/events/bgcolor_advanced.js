// Change background color (advanced)
const primaryButtons = document.querySelectorAll('.primary');
const secondaryButtons = document.querySelectorAll('.secondary');
const borderClass = document.querySelector('div.border-gray');
const originalColor = borderClass.style.backgroundColor;

primaryButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        borderClass.style.backgroundColor = button.innerHTML;
    });
});

secondaryButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        borderClass.style.backgroundColor = originalColor;
    });
});
