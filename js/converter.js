"use strict";

String.prototype.hashCode = function() {
    let hash = 0,
      i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }

function convertToAge(date) {
    const dob = new Date(date);
        
    const currentDate = new Date();
    
    let age = currentDate.getFullYear() - dob.getFullYear();

    if (currentDate.getMonth() < dob.getMonth() || 
        (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        return age - 1;
    } else {
        return age;
    }
}

const userNameElement = document.getElementById("uname");
let storedPW = document.getElementById("password");

const regex = /\d/;
const regex2 = /\D/;

userNameElement.addEventListener("blur", () => {
    if (userNameElement.value.length >= 8 && !regex.test(userNameElement.value)){
        alert(`${userNameElement.value} cannot be used, Username must includes numbers!`);
    } else if (userNameElement.value.length >= 8 && !regex2.test(userNameElement.value)){
        alert(`${userNameElement.value} cannot be used, Username must includes alphabet!`);
    }
})

storedPW.addEventListener("blur", () => {
    if (storedPW.value.length >= 8 && !regex.test(storedPW.value)){
        alert(`${storedPW.value} cannot be used, Password must includes numbers!`);
    } else if (storedPW.value.length >= 8 && !regex2.test(storedPW.value)){
        alert(`${storedPW.value} cannot be used, Password must includes alphabet!`);
    }
})

//Not used commented codes anymore
//Leave them here to learn about it later on.
// userNameElement.oninput = (event) => {
//     event.preventDefault();
//     const regex = /\d/;
//     const regex2 = /\D/;

//     if (userNameElement.onsubmit.value.length == 13 && !regex.test(userNameElement.value)){
//         alert(`${userNameElement.value} cannot be used, Username must includes numbers!`);
//     } else if (userNameElement.onsubmit.value.length == 13 && !regex2.test(userNameElement.value)){
//         alert(`${userNameElement.value} cannot be used, Username must includes alphabet!`);
//     }
// }

function submitForm(){
    let storedAge = document.getElementById("dateofBirth").value;
    
    const user = {
        firstName: document.getElementById("fname").value,
        lastName: document.getElementById("lname").value,
        userName: document.getElementById("uname").value,
        password: storedPW.value.hashCode(),
        age: convertToAge(storedAge),
    }

    if (user.userName == ''){
        alert('Please fill in every sections to register!');
    } else {
        alert(`Congrats! ${user.firstName} You have been successfully registered!`);
    }

    console.log(`First name: ${user.firstName}`);
    console.log(`Last name: ${user.lastName}`);
    console.log(`Username: ${user.userName}`);
    console.log(`Hashed PW: ${user.password}`);
    console.log(`Age: ${user.age}`);

    storedAge = "";
    storedPW.value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("uname").value = "";
}