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

function hideNewsLetter() {
    newsLetter.setAttribute("hidden", "hidden");
}

newsLetterBtn.addEventListener("click", hideNewsLetter);


