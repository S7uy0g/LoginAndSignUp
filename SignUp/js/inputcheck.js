function checkNull(){
    let firstName=document.getElementById("First Name");
    let middleName=document.getElementById("Middle Name");
    let lastName=document.getElementById("Last Name");
    let email=document.getElementById("Email");
    let password=document.getElementById("Password");
    let confirmPassword=document.getElementById("Confirm Password");
    let privacyPolicy=document.getElementById("checkbox");
    let warningMessage=document.getElementById("warningMessage");
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
    if(count===0 && privacyPolicy.checked){
        window.location.href = '../../Login/Login.html';
    }
}