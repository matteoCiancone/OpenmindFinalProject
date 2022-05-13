const formBtnSend = document.querySelector(".inputBtn");
const mailInputValue = document.querySelector("#email").value;
const mailInput = document.querySelector("#email")

function openModal() {
    let email_reg_exp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
    if ((email_reg_exp.test(mailInputValue)) || (mailInputValue == "")) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'You must enter a correct email! ',
            showConfirmButton: true,
            buttonsStyling: false,
        });
        mailInput.select();
        return false;
    } else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You have signed up successfully!',
            showConfirmButton: true,
            buttonsStyling: false,
        });
    }
}

formBtnSend.addEventListener("click", openModal);
