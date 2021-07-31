const firstNameElement = document.getElementById("firstname");
const lastNameElement = document.getElementById("lastname");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const submitBtn = document.getElementById("submit");

function addErrorStyles(element) {
  element.style.border = "1px solid hsl(0, 100%, 74%)";
  element.nextElementSibling.style.display = "block";
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = element.placeholder + " cannot be empty";
  element.parentNode.append(errorMessage);
}

function addEmailErrorStyles(element) {
  element.style.border = "1px solid hsl(0, 100%, 74%)";
  element.nextElementSibling.style.display = "block";
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = "Looks like this is not an email";
  element.parentNode.append(errorMessage);
}

function isEmpty(element) {
  if (element.value == "" || element.value == null) {
    addErrorStyles(element);
    return false;
  }
}

function isValidEmail(element) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(element.value)) {
    addEmailErrorStyles(element);
  }
}

submitBtn.addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    isEmpty(firstNameElement);
    isEmpty(lastNameElement);
    isValidEmail(emailElement);
    isEmpty(passwordElement);
  },
  { once: true }
);
