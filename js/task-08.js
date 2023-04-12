const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = {};

  const formElements = event.currentTarget.elements;
  const email = formElements.email;
  const password = formElements.password;

  if (email.value === "" || password.value === "") {
    alert("Заповніть будь ласка всі поля");
  } else {
    formData.email = email.value;
    formData.password = password.value;
  }

  console.log(formData);
  event.currentTarget.reset();
}
