class Values{
    constructor(){
        this.firstName=document.getElementById("First Name");
        this.middleName=document.getElementById("Middle Name");
        this.lastName=document.getElementById("Last Name");
        this.email=document.getElementById("Email");
        this.password=document.getElementById("Password");
        this.confirmPassword=document.getElementById("Confirm Password");
        this.privacyPolicy=document.getElementById("checkbox");
        this.warningMessage=document.getElementById("warningMessage");
        this.emailMessage=document.getElementById("emailMessage");
    }
}

function checkNull(){
    let value=new Values();
    let firstName=value.firstName;
    let middleName=value.middleName;
    let lastName=value.lastName;
    let email=value.email;
    let password=value.password;
    let confirmPassword=value.confirmPassword;
    let privacyPolicy=value.privacyPolicy;
    let warningMessage=value.warningMessage;
    let emailMessage=value.emailMessage;
    let valuesToBeChecked=[firstName,lastName,email,password,confirmPassword];
    let count=0;

    for(let i=0;i<valuesToBeChecked.length;i++){
        if(valuesToBeChecked[i].value===""||valuesToBeChecked[i].value===undefined){
            valuesToBeChecked[i].placeholder="Please Input "+valuesToBeChecked[i].id;
            count+=1;
        }
    }
    if(!privacyPolicy.checked){
        warningMessage.style.display='block';
    }
    let emailValidate=validateEmail();
    if(emailValidate==false){
        emailMessage.style.display='block';
    }
    if(count===0 && privacyPolicy.checked && emailValidate==true && password.value===confirmPassword.value){
        window.location.href = '../../Login/Login.html';
    }
    
}
function hideUnhideMainPassword(){
    let value=new Values();
    let password=value.password;
    password.type=(password.type==="password")?"text":"password";
}
function hideUnhideSecondaryPassword(){
    let value=new Values();
    let confirmPassword=value.confirmPassword;
    confirmPassword.type=(confirmPassword.type==="password")?"text":"password";
}
function validateEmail() {
    let value=new Values();
    var email = value.email.value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
        return true;
    } else {
        return false;
    }
}