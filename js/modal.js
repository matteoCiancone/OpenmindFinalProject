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


