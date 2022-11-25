function ValidateForm() {
    var uid = document.getElementById("uid").value;


    if (uid.length < 5 || uid.length > 7) {
        alert("Id must be between 5 to 7 Characters");
        return false;
    }

    var pswd = document.getElementById("pswd").value;
    if (pswd.length < 7 || pswd.length > 12) {
        alert("Password must be between 7 to 12 Characters");
        return false;
    }

    var name = document.getElementById("name").value;
    if (!name.match(/^[A-Za-z]+$/)) {
        alert("Please Enters Letters Only");
        return false;
    }

    var address = document.getElementById("address").value;
    if (!address.match(/^[0-9a-zA-Z]+$/)) {
        alert("Please Enters Letters and Numbers Only in Address");
        return false;
    }

    var country = document.getElementById("country").value;
    if (country == 0) {
        alert("Select a Country");
        return false;
    }

    var zip = document.getElementById("zip").value;
    if (!zip.match(/^[0-9a-zA-Z]+$/)) {
        alert("Please Enters Letters and Number Only in ZIP");
        return false;
    }

    var email = document.getElementById("email").value;
    if (email == "") {
        alert("Fill email Field");
        return false;
    }

    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        alert("Please enter a valid E-mail address ");
        return false;
    }
    if (!(document.getElementById("male").checked || document.getElementById("female").checked)) {
        alert("PLease select a gender");
        return false;
    }



    return true;
}