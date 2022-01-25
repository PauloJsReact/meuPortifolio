var dataBase = "https://testjsoncostrut.firebaseio.com/projects.json"
var projBar = document.querySelector(".ph-proj-img");
var table = [];
var max;
var photoIndex;
var min = 0;
AOS.init();
/* Functions to nav menu */

function navHome() {
    window.location.href = "#";

}

function navSobre() {
    window.location.href = "#sobre";

}

function navProjects() {
    window.location.href = "#projetos";
}

function sendEmail() {
    window.location.href = "mailto:paulo_contato@notaveldev.com.br";
}
/**  Functions for slaider  **/
var table;

async function chargeProjects() {
    const res = await fetch(dataBase);
    table = await res.json();

    if (table != "") {
        max = table.length;
        photoIndex = 0;
        photoCharge(table[photoIndex].img);

    }
}

function photoCharge(photo) {
    projBar.style.backgroundImage = `URL(${photo})`;
}

function chargeNext() {
    photoIndex++;
    if (photoIndex > max) {
        console.log("val " + max)
        photoIndex = 0;
    }
    photoCharge(table[photoIndex].img);
}

function chargeBack() {
    if (photoIndex === 0) {
        photoIndex = max;
    } else {
        photoIndex--;
    }
    photoCharge(table[photoIndex].img);
}

chargeProjects();