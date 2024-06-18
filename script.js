const ulEl = document.querySelector(".form-js");

const markup = `  <form class="feedback-form" autocomplete="off">
<label>
  Email
  <input type="email" name="email" autofocus />
</label>
<label>
  Message
  <textarea name="message" rows="8"></textarea>
</label>
<button type="submit">Submit</button>
</form>; `;
ulEl.insertAdjacentHTML("beforeend", markup);

const formEl = document.querySelector(".feedback-form");

let formData = {
  email: "",
  message: "",
};

const feedback_form_state = "";
formEl.addEventListener("input", handlerGetComment);

function handlerGetComment(e) {
  e.preventDefault();

  formData = {
    email: formEl.elements.email.value,
    message: formEl.elements.message.value,
  };
  localStorage.setItem("feedback_form_state", JSON.stringify(formData));

  if (feedback_form_state === "") {
    return;
  } else {
  }
}
