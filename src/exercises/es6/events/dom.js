// Basic DOM manipulation
const lists = document.querySelectorAll('li');
const header = document.querySelector('h1');
const button = document.querySelector('button');

lists.forEach(function (element, index) {
    if (index === 0) {
        element.addEventListener('click', function () {
            header.innerHTML = element.innerHTML;
        });
    } else if (index === 1) {
        element.addEventListener('mouseenter', function () {
            header.classList.add('orange');
        });
        element.addEventListener('mouseleave', function () {
            header.classList.remove('orange');
        });
    } else if (index === 2) {
        element.addEventListener('dblclick', function () {
            header.classList.toggle('green');
        });
    }
});

button.addEventListener('click', function () {
    header.style.transform = 'rotate(180deg)';
});
button.addEventListener('dblclick', function () {
    header.style.transform = 'rotate(0deg)';
});
