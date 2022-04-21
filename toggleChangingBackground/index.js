const body = document.querySelector("body");
const toggle = document.querySelector("i");

// =======Alternar togele ON OFF=====
toggle,
    addEventListener("click", () => {
        toggle.classList.toggle("fa-toggle-on");
        body.classList.toggle("night");
    });
