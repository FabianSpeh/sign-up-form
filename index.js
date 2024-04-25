let passwordField = document.querySelector("#password");
let confirmPasswordField = document.querySelector("#confirm-password");
let passwordMismatchMessage = document.querySelector("#password-mismatch");
const checkValidity = () => {
  if (passwordField.value != confirmPasswordField.value) {
    passwordField.classList.add("password-validity");
    confirmPasswordField.classList.add("password-validity");
    console.log(passwordMismatchMessage);
    passwordMismatchMessage.style.visibility = "visible";
  } else {
    passwordField.classList.remove("password-validity");
    confirmPasswordField.classList.remove("password-validity");
    passwordMismatchMessage.style.visibility = "hidden";
  }
};

passwordField.addEventListener("input", checkValidity);
confirmPasswordField.addEventListener("input", checkValidity);
