// Change background color (basic)
buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        document.body.style.backgroundColor = this.innerHTML;
    });
});
