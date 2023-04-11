const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const formElements = event.currentTarget.elements;
  const email = formElements.email;
  const password = formElements.password;

  if (email.value === "" || password.value === "") {
    alert("Заповніть будь ласка всі поля");
  } else {
    alert(
      `Форма ${email.value} успішно заповнена, пароль ${password.value} введено вірно :))`
    );
  }

  event.currentTarget.reset();
}
