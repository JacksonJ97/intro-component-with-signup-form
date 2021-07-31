const firstNameElement = document.getElementById("firstname");
const lastNameElement = document.getElementById("lastname");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const form = document.getElementById("form");

function addErrorStyles(element) {
  element.style.border = "1px solid hsl(0, 100%, 74%)";
  element.nextElementSibling.style.display = "block";
  element.parentNode.children[2].textContent = element.placeholder + " cannot be empty";
}

function addEmailErrorStyles(element) {
  element.style.border = "1px solid hsl(0, 100%, 74%)";
  element.nextElementSibling.style.display = "block";
  element.parentNode.children[2].textContent = "Looks like this is not an email";
}

function removeErrorStyles(element) {
  element.style.border = "1px solid hsl(246, 25%, 77%)";
  element.nextElementSibling.style.display = "none";
  element.parentNode.children[2].textContent = "";
}

function isEmpty(element) {
  if (element.value == "" || element.value == null) {
    return true;
  }
  return false;
}

function isValidEmail(element) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(element.value)) {
    return true;
  }
  return false;
}

form.addEventListener("submit", function (e) {
  if (isEmpty(firstNameElement) || isEmpty(lastNameElement) || !isValidEmail(emailElement) || isEmpty(passwordElement)) {
    e.preventDefault();

    if (isEmpty(firstNameElement)) {
      addErrorStyles(firstNameElement);
    } else {
      removeErrorStyles(firstNameElement);
    }

    if (isEmpty(lastNameElement)) {
      addErrorStyles(lastNameElement);
    } else {
      removeErrorStyles(lastNameElement);
    }

    if (!isValidEmail(emailElement)) {
      addEmailErrorStyles(emailElement);
    } else {
      removeErrorStyles(emailElement);
    }

    if (isEmpty(passwordElement)) {
      addErrorStyles(passwordElement);
    } else {
      removeErrorStyles(passwordElement);
    }
  }
});
