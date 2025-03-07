function validatePasswords(){
    var Password=document.getElementById("password").value;
    var Password=document.getElementById("confirmPassword").value;
    var passwordError = document.getElementById("passwordError");
    if(Password !== confirmPassword){
        passwordError.innerHTML = "Passwords do not match";
        return false;
    }
    else{
        passwordError.innerHTML = "";
        return true;
    }
}