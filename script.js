function validateEmail() {
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirm_email").value;
    
    if (email !== confirmEmail) {
        alert("Emails do not match!");
        return false;
    }
    return true;
}