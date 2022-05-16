/**********NEWSLETTER******* */

const newsLetterBtn = document.querySelector("#newsLetterBtn");
const newsLetter = document.querySelector(".newsLetter");

if (sessionStorage.getItem("newsLetter")) {
    hideNewsLetter();
}

function populateStorage() {
    sessionStorage.setItem("newsLetter", newsLetter);
    hideNewsLetter();
}

function hideNewsLetter() {
    newsLetter.setAttribute("hidden", "hidden");
}

newsLetterBtn.addEventListener("click", populateStorage);


