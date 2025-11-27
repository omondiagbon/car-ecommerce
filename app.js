function user() {
    const username = localStorage.getItem("username");

    if (!username) {
        alert('user not found please login')
         window.location.href = "index.html";
         
    } else {
        // ✅ User is logged in
        console.log(`Welcome, ${username}!`);
    }
};










// hambuger
const hamburger = document.querySelector(".hambuger");
const navMenu = document.querySelector(".grid1 ul");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});



const inputElement = document.querySelector(".input");
const signinElement = document.querySelector(".signin");
const successElement = document.querySelector(".success");
const pElement = document.querySelector(".success > p");
signinElement.addEventListener("click", sign);

function close() {
    inputElement.style.width = "0px";
    inputElement.style.padding = "0px";
    inputElement.style.border = "none";
}

function open() {
    inputElement.style.width = "400px";
    inputElement.style.padding = "20px";
    inputElement.style.border = "3px solid white";
}

function sign() {
    if (inputElement.style.width === "0px" || inputElement.style.width === "") {
        open();
    } else {
        close();
    }
}



// input validetion

const userName = document.getElementById("userName");
const btnElement = document.querySelector(".btn");
const btElement = document.querySelector(".bt");
const errorElement = document.querySelector(".errors");
const emailElement = document.querySelector("#email");
const passwordElement = document.querySelector("#password");

// On page load: show saved username OR "Signup"
btElement.textContent = localStorage.getItem("username") || "Signup";

btnElement.addEventListener("click", function(e) {
    e.preventDefault();
    errr();
});

function errr() {
    if (userName.value.trim() === "") {
        usernameUppercase = "Invalid input";
        errorElement.textContent = usernameUppercase.toUpperCase();
        open();
    } else if (
        emailElement.value.trim() === "" ||
        !emailElement.value.includes("@") ||
        !emailElement.value.includes(".")
    ) {
        emailUppercase = "invalid email";
        errorElement.innerHTML = emailUppercase.toUpperCase();
        open();
    } else if (passwordElement.value.trim() === "") {
        passwordUppercase = "invalid password";
        errorElement.innerHTML = passwordUppercase.toUpperCase();
        open();
    } else if (passwordElement.value.length < 5) {
        passwordUppercase = "password must be more than 5 charaters";
        errorElement.innerHTML = passwordUppercase.toUpperCase();
        open();
    } else {
        inputFunction();
        errorElement.textContent = "";
        close();
    }
}

function inputFunction() {
    localStorage.setItem("username", userName.value);
    x = btElement.textContent = userName.value;

    successElement.classList.add("show");
    //successElement.style.display = 'block';
    pElement.innerHTML = `You Have Succefully Signup <br> EMAIL: ${emailElement.value.trim()}<br> USERNAME: ${userName.value.trim()}`;

    // hide after 3 seconds
    setTimeout(() => {
        successElement.classList.remove("show");
        // wait for fade-out to finish, then hide
        setTimeout(() => {
            successElement.style.display = "none";
            window.location.href = "index.html";
        }, 600);
    }, 3000);
}

// cars js code

const cardElement = document.querySelector(".card");
const buyElements = document.querySelectorAll(".buy");
const cdBtnElements = document.querySelectorAll("#cdBtn");

// Loop through all buy buttons
buyElements.forEach((buyBtn) => {
    buyBtn.addEventListener("click", function(e) {
        e.preventDefault();
        buy();
    });
});

// Loop through all cdBtn buttons
cdBtnElements.forEach((cdBtn) => {
    cdBtn.addEventListener("click", function(e) {
        e.preventDefault();
        cdBtnAction();
    });
});

function buy() {
    user()
    cardElement.style.opacity = "1";
    cardElement.style.display = "block";
}

function cdBtnAction() {
    cardElement.style.opacity = "0";
    cardElement.style.display = "none";
    const payment = "payment made successfully";
    //alert(payment.toUpperCase());
    successElement.classList.add("show");
    pElement.innerHTML = payment.toUpperCase();

    // hide after 3 seconds
    setTimeout(() => {
        successElement.classList.remove("show");
        // wait for fade-out to finish, then hide
        setTimeout(() => {
            successElement.style.display = "none";
        }, 600);
    }, 3000);
}




//logout
function logout() {
    localStorage.removeItem("username");
    btElement.textContent = "Signup"; // reset button text
    
    successElement.classList.add("show");
    logOut = "you are logout"
    pElement.innerHTML = logOut.toUpperCase()

    setTimeout(()=>{
        successElement.classList.remove("show");
        window.location.href = "index.html";
    }, 3000)

   user()
}
