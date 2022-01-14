var dropTitle = document.querySelectorAll(".ph-text-title h1");

window.addEventListener("load", function () {


    for (let i = 0; i < dropTitle.length; i++) {
        dropTitle[i].classList.add("animate__animated");
        dropTitle[i].classList.add("animate__bounceInLeft");
    }

})