let buttons = document.querySelectorAll("button.btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("btn--actived");
    });
});
