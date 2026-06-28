const form = document.getElementById("authForm");

const title = document.getElementById("formTitle");
const subtitle = document.getElementById("formSubtitle");

const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const submitButton = document.getElementById("submitButton");

const toggleText = document.getElementById("toggleText");

let signupMode = false;

function updateUI(){

    if(signupMode){

        title.textContent = "Create Account";

        subtitle.textContent = "Create your free WebHunt account.";

        username.style.display = "block";
        confirmPassword.style.display = "block";

        submitButton.textContent = "Create Account";

        toggleText.innerHTML = `
        Already have an account?
        <a href="#" id="toggleMode">Log In</a>
        `;

    }else{

        title.textContent = "Welcome Back";

        subtitle.textContent = "Log in to continue discovering amazing websites.";

        username.style.display = "none";
        confirmPassword.style.display = "none";

        submitButton.textContent = "Log In";

        toggleText.innerHTML = `
        Don't have an account?
        <a href="#" id="toggleMode">Create one</a>
        `;

    }

    document.getElementById("toggleMode").onclick = function(e){

        e.preventDefault();

        signupMode = !signupMode;

        updateUI();

    };

}

form.addEventListener("submit",function(e){

    e.preventDefault();

    if(signupMode){

        if(password.value !== confirmPassword.value){

            alert("Passwords do not match.");

            return;

        }

        alert("Account created! (Demo)");

    }else{

        alert("Logged in! (Demo)");

    }

});

updateUI();
