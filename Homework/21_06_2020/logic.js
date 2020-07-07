const Name = document.getElementById("Name");
const NameField = document.getElementById("NameField");
const Surname = document.getElementById("Surname");
const SurnameField = document.getElementById("SurnameField");
const Login = document.getElementById("Login");
const LoginField = document.getElementById("LoginField");
const Email = document.getElementById("Email");
const EmailField = document.getElementById("EmailField");
const Password = document.getElementById("Password");
const PasswordField = document.getElementById("PasswordField");
const ConfirmPassword = document.getElementById("ConfirmPassword");
const ConfirmPasswordField = document.getElementById("ConfirmPasswordField");



const RED = "#e84118";
const GREEN = "#44bd32";
const YELLOW = "#fbc531";
const DEFAULTHCOLOR = "#7f8fa6";

document.addEventListener("DOMContentLoaded", () => {
    Login.addEventListener("click", () => {
        if (LoginField.value != "") {
            Login.style.backgroundColor = GREEN;
        } else {
            Login.style.backgroundColor = DEFAULTHCOLOR;
        }
    });
    LoginField.addEventListener("keyup", () => {
        if (LoginField.value != "") {
            Login.style.backgroundColor = YELLOW;
        } else {
            Login.style.backgroundColor = DEFAULTHCOLOR;
        }
    });
    EmailField.addEventListener("keyup", () => {
        if (EmailField.value != "" && ValidateEmail(EmailField.value)) {
            Email.style.backgroundColor = GREEN;
        } else if (EmailField.value != "") {
            Email.style.backgroundColor = YELLOW;
        } else {
            Email.style.backgroundColor = DEFAULTHCOLOR;
        }
    });
    NameField.addEventListener("keyup", () => {
        if (NameField.value != "") {
            Name.style.backgroundColor = GREEN;
        } else {
            Name.style.backgroundColor = DEFAULTHCOLOR;
        }
    });
    SurnameField.addEventListener("keyup", () => {
        if (SurnameField.value != "") {
            Surname.style.backgroundColor = GREEN;
        } else {
            Surname.style.backgroundColor = DEFAULTHCOLOR;
        }
    });
    PasswordField.addEventListener("keyup", () => {
        if (PasswordField.value != "") {
            if (ConfirmPasswordField.value != "") {
                if (PasswordField.value != ConfirmPasswordField.value) {
                    Password.style.backgroundColor = RED;
                    ConfirmPassword.style.backgroundColor = RED;
                } else {
                    Password.style.backgroundColor = GREEN;
                    ConfirmPassword.style.backgroundColor = GREEN;
                }
            } else {
                Password.style.backgroundColor = YELLOW;
                ConfirmPassword.style.backgroundColor = YELLOW;
            }
        } else {
            Password.style.backgroundColor = DEFAULTHCOLOR;
        }
    });
    ConfirmPasswordField.addEventListener("keyup", () => {
        if (ConfirmPasswordField.value != "") {
            if (PasswordField.value != "") {
                if (PasswordField.value != ConfirmPasswordField.value) {
                    Password.style.backgroundColor = RED;
                    ConfirmPassword.style.backgroundColor = RED;
                } else {
                    Password.style.backgroundColor = GREEN;
                    ConfirmPassword.style.backgroundColor = GREEN;
                }
            } else {
                Password.style.backgroundColor = YELLOW;
                ConfirmPassword.style.backgroundColor = YELLOW;
            }
        } else {
            ConfirmPassword.style.backgroundColor = DEFAULTHCOLOR;
        }
    });
});

function ValidateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}