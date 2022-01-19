var dataBase = "https://testjsoncostrut.firebaseio.com/projects.json"
var projBar = document.querySelector(".ph-proj-img");
var projQuant = 0;
var slaidNow = 0;
var dataTable = [];

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


/**  Functions for slaider  **/
var table;

async function chargeProjects() {
    const res = await fetch(dataBase);
    table = await res.json();

    if (table != "") {
        projQuant = table.length;
        dataTable = table;
        console.log('Total de projetos feitos atualmente ' + projQuant);
        slaidPosition();
    } else {

    }
}


function slaidPosition() {
    var imgData = dataTable[parseInt(slaidNow)].img;
    const printPhoto = `<img class="ph-proj-img" src='${imgData}' />`
    projBar.innerHTML = printPhoto

}


function nextSlaid() {
    if (slaidNow < projQuant && slaidNow != projQuant) {
        slaidNow = parseInt(slaidNow) + 1;
        slaidPosition();
    } else {
        slaidNow = 0;
        slaidPosition();
    }
}


function firstSlaid() {
    if (slaidNow < projQuant) {
        slaidNow = parseInt(slaidNow) - 1
        slaidPosition();
    } else {
        slaidNow = 1;
        slaidPosition();
    }
}

chargeProjects();