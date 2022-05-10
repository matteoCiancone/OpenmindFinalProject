window.onload = function hideRow6() {
    document.querySelector(".cardRow6").style.display = "none"
    document.querySelector(".gridBtn6").style.opacity = "50%"
}

/*********PRODUCTS GRID DISPLAY***********/
function displayRow4() {
    document.querySelector(".cardRow4").style.display = "";
    document.querySelector(".cardRow6").style.display = "none";
    document.querySelector(".gridBtn6").style.opacity = "50%";
    document.querySelector(".gridBtn4").style.opacity = "100%";
}

function displayRow6() {
    document.querySelector(".cardRow4").style.display = "none";
    document.querySelector(".cardRow6").style.display = "";
    document.querySelector(".gridBtn4").style.opacity = "50%";
    document.querySelector(".gridBtn6").style.opacity = "100%";
}

document.querySelector(".gridBtn4").addEventListener("click", displayRow4);
document.querySelector(".gridBtn6").addEventListener("click", displayRow6);


/************CARD CLONE**********/

const card = document.querySelector(".cardColGrid4");

for (let i = 0; i < 15; i++) {
    let n = 1;
    let copy = card.cloneNode(true);
    copy.id = "card" + " " + n++;
    card.parentNode.appendChild(copy);
}

const card2 = document.querySelector(".cardColGrid6");

for (let i = 0; i < 15; i++) {
    let n = 1;
    let copy2 = card2.cloneNode(true);
    copy2.id = "card" + " " + n++;
    card2.parentNode.appendChild(copy2);
}

