window.onload = function hideRow6() {
    document.querySelector(".cardRow6").style.display = "none"
    document.querySelector(".gridBtn6").style.opacity = "50%"
}

/*********PRODUCTS GRID DISPLAY***********/
function displayRow4() {
    document.querySelector(".cardRow4").style.display = ""
    document.querySelector(".cardRow6").style.display = "none"
    document.querySelector(".gridBtn6").style.opacity = "50%"
    document.querySelector(".gridBtn4").style.opacity = "100%"
}

function displayRow6() {
    document.querySelector(".cardRow4").style.display = "none"
    document.querySelector(".cardRow6").style.display = ""
    document.querySelector(".gridBtn4").style.opacity = "50%"
    document.querySelector(".gridBtn6").style.opacity = "100%"
}