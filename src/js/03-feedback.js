import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const message = form.elements.message;

//1. getting data from local storage to inputs
const storedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (storedData) {
  email.value = storedData.email;
  message.value = storedData.message;
};

//2. saving values from inputs to local storage
const saveData = () => {
  const formData = {
      email: `${email.value.trim()}`,
      message: `${message.value.trim()}`
    };
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}
form.addEventListener("input", throttle(saveData, 500));

//3. form's validation
const validateForm = (event) => {
  event.preventDefault();
  if (email.value.trim() === "" || message.value.trim() === "") {
    alert("Будь-ласка, заповніть всі поля форми!")
  } else {
    const formData = {
      email: `${email.value.trim()}`,
      message: `${message.value.trim()}`
    };
    console.log(formData);
    form.reset();
    localStorage.removeItem("feedback-form-state");
  }
}
form.addEventListener("submit", validateForm);