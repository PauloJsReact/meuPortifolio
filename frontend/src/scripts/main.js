
AOS.init();


function removeAnimHome() {
    for (let i = 0; i < dropTitle.length; i++) {
        dropTitle[i].classList.remove("animate__animated");
        dropTitle[i].classList.remove("animate__bounceInLeft");
    }
}

/* Functions to nav menu */

function navHome() {
    window.location.href = "#home";

}

function navSobre() {
    window.location.href = "#sobre";

}

function navProjects() {
    window.location.href = "#projetos";

}

