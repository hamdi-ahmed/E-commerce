// function validation() {
//     const userName = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
//     const emailAdd = document.getElementById("email").value;
//     const phoneNum = document.getElementById("phoneNumber").value;
//     const errorMessage = document.getElementById("errorMessage");
//     var txt;

//     if (userName.length < 6 || userName.length > 10) {
//         txt = "Sorry, UserName character must be between 6 to 10 char";
//         errorMessage.innerHTML = txt;
//         return false;
//     }
//     if (emailAdd.indexOf("@") == -1 || emailAdd.indexOf(".com") == -1 || emailAdd.length < 10) {
//         txt = "Sorry, Email Address must have @,.com and at least 10 char";
//         errorMessage.innerHTML = txt;
//         return false;
//     }
//     if (isNaN(phoneNum) || phoneNum.length != 11) {
//         txt = "Sorry, Phone Number must be 10 Numbers";
//         errorMessage.innerHTML = txt;
//         return false;
//     }
//     alert("Form Completed Successfully");
//     return true;
// }

// let formData = {
//     userName: document.getElementById("username").value,
//     password: document.getElementById("password").value,
//     emailAdd: document.getElementById("email").value,
//     phoneNum: document.getElementById("phoneNumber").value,
// }


//Make DB Array to store Data Form 
var users = JSON.parse(localStorage.getItem("users")) || [];


let validation = (e) => {
    let formData = {
        userName: document.getElementById("username").value,
        password: document.getElementById("password").value,
        emailAdd: document.getElementById("email").value,
        phoneNum: document.getElementById("phoneNumber").value,
    }
    const errorMessage = document.getElementById("errorMessage");
    var txt;
    if (formData.userName.length < 6 || formData.userName.length > 10) {
        txt = "Sorry, UserName character must be between 6 to 10 char";
        errorMessage.innerHTML = txt;
        return false;
    }
    if (formData.emailAdd.indexOf("@") == -1 || formData.emailAdd.indexOf(".com") == -1 || formData.emailAdd.length < 10) {
        txt = "Sorry, Email Address must have @,.com and at least 10 char";
        errorMessage.innerHTML = txt;
        return false;
    }
    if (isNaN(formData.phoneNum) || formData.phoneNum.length != 11) {
        txt = "Sorry, Phone Number must be 10 Numbers";
        errorMessage.innerHTML = txt;
        return false;
    }
    //Add data to Array 
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users)); //Convert Array to String
    return true;
}


function checkInfo() {
    let email = document.getElementById("em").value;
    let pass = document.getElementById("pass").value;
    let errorM = document.querySelector('.errorMessage');
    for (let i = 0; i < users.length; i++) {
        if (email == users[i].emailAdd && pass == users[i].password) {
            window.open("home.html");
        } else {
            return;
            window.open("form.html");
        }
    }

}