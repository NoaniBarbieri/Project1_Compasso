var form = document.querySelector(".form-all");

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    checkName(); 
    checkEmail();
    checkPassword();
    checkdate();
    checkPhone();
    checkTerms();

    if(checkName() == true && checkEmail() == true && checkPassword() == true && checkdate() == true && checkPhone() == true && checkTerms() == true){
        location.href = "../sucess.html";
    }else{
        form.reset();
    }

})


function checkName(){
    var name = document.getElementById("form-FullName");
    var nameMessage = document.getElementById("name-error");
    
    
    if(name.value.length > 4 && name.value.indexOf(" ") != -1){
        nameMessage.innerHTML = "";
        return true;
    }else{
        nameMessage.innerHTML = "FullName Invalid";
        return false;
    }
}

function checkEmail(){
    const regexEmail = /^[a-z0-9.]+(@)+[a-z0-9]+[.]+[a-z]+$/;
    const regexEmail2 = /^[a-z0-9.]+(@)+[a-z0-9]+[.]+[a-z]+\.+[a-z]+$/;//caso de br
    var email = document.getElementById("form-Email");
    var emailMessage = document.getElementById("email-error");

    if(regexEmail.test(email.value) || regexEmail2.test(email.value)){
        emailMessage.innerHTML = "";
        return true;
    }else{
        emailMessage.innerHTML = "Email Invalid";
        return false;
    }

}

function checkPassword(){
    const regexPassword = /^[0-9]+$/;
    var password = document.getElementById("form-Password");
    var passwordMessage = document.getElementById("password-error");
    if(regexPassword.test(password.value) && password.value.length >= 6 && password.value.length < 9){
        passwordMessage.innerHTML = "";
        return true;
    }else{
        passwordMessage.innerHTML = "Password Invalid";
        return false;
    }

}

function checkdate(){
    var date = document.getElementById("form-Birthday");
    var dateMessage = document.getElementById("age-error");
    if(date.value != 0){
        dateMessage.innerHTML = "";
        return true;
    }else{
        dateMessage.innerHTML = "Age Invalid";
        return false;
    }
   
}

function checkPhone(){
    var phone = document.getElementById("formPhone");
    var phoneMessage = document.getElementById("phone-error");
    const regexPhone = /^[0-9]{11}$/;

    if(regexPhone.test(phone.value) && phone.value.length == 11){ 
        phoneMessage.innerHTML = "";
        return true;
    }else{
        phoneMessage.innerHTML = "Phone Invalid";
        return false;
    }
}

function checkTerms(){
    var checkbox = document.getElementById("Form-Checkbox");
    var checkMessage = document.getElementById("check-error");
    if(checkbox.checked){
        checkMessage.innerHTML = "";
        return true;
    }else{
        checkMessage.innerHTML = "You must accept the terms";
        return false;
    }
}