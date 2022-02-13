const password = document.querySelector('#form-Password')
const icon = document.querySelector('#visiblity-toggle')

icon.addEventListener('click', () => {
    if (password.type === "text") {
        password.type = "password";
        icon.innerHTML = "visibility";
    } else {
        password.type = "text";
        icon.innerHTML = "visibility_off";

    }
})