const acc = document.querySelectorAll(".accordionBtn");

acc.forEach(btn => {
    btn.addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    })
})

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


