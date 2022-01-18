var dataBase = "https://testjsoncostrut.firebaseio.com/projects.json"
var projBar = document.querySelector(".ph-proj-bar");
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

        slaiders()

    } else {

    }
}

var index = 0
function slaiders() {
    projBar.innerHTML = `<img src='${table[index].img}'  class='animate__animated animate__flipInY'/>`
}


function nextSlaide() {
    if (index < table.length) {
        index = index + 1
        projBar.innerHTML = `<img src='${table[index].img}'  class='animate__animated animate__flipInY'/>`
    } else {
        index = 0
        projBar.innerHTML = `<img src='${table[index].img}'  class='animate__animated animate__flipInY'/>`
    }
    console.log(index)
}

function firstSlaide() {
    if (index < table.length) {
        index = index - 1
        projBar.innerHTML = `<img src='${table[index].img}'  class='animate__animated animate__zoomInRight'/>`
        console.log(table[index].img)
    } else {
        projBar.innerHTML = `<img src='${table[index].img}'  class='animate__animated animate__zoomInRight'/>`
    }
    console.log(index)
}

chargeProjects();