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

let n = 1;
const card1 = document.querySelector('.cardCol4');
const card2 = document.querySelector('.cardCol6');

function cloneCard() {
    let copy = card1.cloneNode(true);
    copy.id = ++n;  //Assegno e incremento il numero nell'id
    card1.parentNode.appendChild(copy);
}
function cloneCard2() {
    let copy = card2.cloneNode(true);
    copy.id = ++n;  //Assegno e incremento il numero nell'id
    card2.parentNode.appendChild(copy);
}

for (let i = 0; i < 15; i++) {
    cloneCard()
}

for (let i = 0; i < 15; i++) {
    cloneCard2()
}


/************WISHLIST**********/

const addWishlistBtn = document.querySelectorAll(".addWishlistBtn");
const wishlist = [];

addWishlistBtn.forEach(btn => {
    btn.addEventListener("click", addToWishlist);
})

function addToWishlist(e) {
    const productId = e.id;
    wishlist.push(productId);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

}

function initWishlist() {
    const wishListLocalStorage = (JSON.parse(localStorage.getItem("wishlist")));
    if (wishListLocalStorage) {
        wishlist.push(...wishListLocalStorage);
    }
    console.log(wishlist);
}

initWishlist()