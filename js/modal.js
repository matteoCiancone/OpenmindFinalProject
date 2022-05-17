const formBtnSend = document.querySelector(".inputBtn");
const mailInput = document.querySelector("#email");

function checkEmail(email) {
    let email_reg_exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email_reg_exp.test(mailInput.value)) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You have signed up successfully!',
            showConfirmButton: true,
            buttonsStyling: false,
        });
        return true;
    } else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'You must enter a correct email! ',
            showConfirmButton: true,
            buttonsStyling: false,
        });
        return false;
    }
}

formBtnSend.addEventListener("click", checkEmail);

const addCartBtn = document.querySelectorAll(".addCartBtn");

addCartBtn.forEach(btn => {
    btn.addEventListener("click", addToCart);
})

/***********Add to cart product list & single product************/
function addToCart() {
    Swal.fire({
        position: 'center',
        title: 'Product added to cart!',
        showConfirmButton: true,
        buttonsStyling: false,
    });
}

/***********Wishlist btn single product************/

const wishAddBtn = document.querySelector(".favoriteBtnSp");
const wishRemoveBtn = document.querySelector(".removeWishlistBtnSp");

window.onload = wishRemoveBtn.setAttribute("hidden", "hidden");

function addWishlist() {
    wishAddBtn.setAttribute("hidden", "hidden");
    wishRemoveBtn.removeAttribute("hidden")
}

function removeFromWishlist() {
    wishRemoveBtn.setAttribute("hidden", "hidden");
    wishAddBtn.removeAttribute("hidden");
}

wishAddBtn.addEventListener("click", addWishlist);
wishRemoveBtn.addEventListener("click", removeFromWishlist);

/***********Wishlist btn single product mobile************/


const wishAddBtnSm = document.querySelector(".favoriteBtnSpSm");
const wishRemoveBtnSm = document.querySelector(".removeWishlistBtnSpSm");

window.onload = wishRemoveBtnSm.setAttribute("hidden", "hidden");

function addWishlistSm() {
    wishAddBtnSm.setAttribute("hidden", "hidden");
    wishRemoveBtnSm.removeAttribute("hidden")
}

function removeFromWishlistSm() {
    wishRemoveBtnSm.setAttribute("hidden", "hidden");
    wishAddBtnSm.removeAttribute("hidden");
}

wishAddBtnSm.addEventListener("click", addWishlistSm);
wishRemoveBtnSm.addEventListener("click", removeFromWishlistSm);