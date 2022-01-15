var dropTitle = document.querySelectorAll(".ph-text-title h1");

AOS.init();

window.addEventListener("load", function () {
    addAnimHome()
});

function addAnimHome() {
    for (let i = 0; i < dropTitle.length; i++) {
        dropTitle[i].classList.add("animate__animated");
        dropTitle[i].classList.add("animate__bounceInLeft");
    }
}
function removeAnimHome() {
    for (let i = 0; i < dropTitle.length; i++) {
        dropTitle[i].classList.remove("animate__animated");
        dropTitle[i].classList.remove("animate__bounceInLeft");
    }
}

/* Functions to nav menu */

function navHome() {
    addAnimHome()
    window.location.href = "#home";

}

function navSobre() {
    window.location.href = "#sobre";
    removeAnimHome()

}

function navProjects() {
    window.location.href = "#projetos";
    removeAnimHome()

}

