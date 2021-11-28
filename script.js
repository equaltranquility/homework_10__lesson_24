const form = document.querySelector(".form");
const emailStar = document.getElementById("email-star");
const pwdStar = document.getElementById("password-star");
const chkStar = document.getElementById("checkbox-star");
const emailLbl = document.getElementById("email-label");
const usrEmail = document.getElementById("email-input");
const emailVldTxt = document.getElementById("email-validation-text");
const pwdLbl = document.getElementById("password-label");
const usrPwd = document.getElementById("password-input");
const pwdVldTxt = document.getElementById("password-validation-text");
const usrChk = document.getElementById("checkbox-input");
const chkVldTxt = document.getElementById("checkbox-validation-text");
const btn = document.querySelector(".form__button");

const validateEmail = (email) => {
  const res =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
btn.addEventListener("click", () => {
  const emailValue = usrEmail.value;
  const arrEmailObjToColorized = [emailLbl, emailStar];
  const arrAllEmailObjToDecolorize = [emailLbl, emailStar, usrEmail];
  const emailObjColorized = () => {
    arrEmailObjToColorized.forEach((item) => item.classList.add("color-red"));
  };
  const emailObjDecolorize = () => {
    arrAllEmailObjToDecolorize.forEach((item) =>
      item.classList.remove("color-red", "border-color")
    );
  };
  if (emailValue === "") {
    emailVldTxt.innerText = "Поле обязательно для заполнения";
    usrEmail.classList.add("border-color");
    emailObjColorized();
  } else if (!validateEmail(emailValue)) {
    emailVldTxt.innerText = "Email невалидный";
    usrEmail.classList.add("border-color");
    emailObjColorized();
  } else if (validateEmail(emailValue)) {
    emailVldTxt.innerText = "";
    emailObjDecolorize();
  }
});
btn.addEventListener("click", () => {
  const pwdValue = usrPwd.value;
  const arrPwdObjToColorized = [pwdLbl, pwdStar];
  const arrAllPwdObjToDecolorized = [pwdLbl, pwdStar, usrPwd];
  const pwdObjColorized = () => {
    arrPwdObjToColorized.forEach((item) => item.classList.add("color-red"));
  };
  const pwdObjDecolorize = () => {
    arrAllPwdObjToDecolorized.forEach((item) =>
      item.classList.remove("color-red", "border-color")
    );
  };
  if (pwdValue === "") {
    pwdVldTxt.innerText = "Поле обязательно для заполнения";
    usrPwd.classList.add("border-color");
    pwdObjColorized();
  } else if (pwdValue.length < 8) {
    pwdVldTxt.innerText = "Пароль должен содержать как минимум 8 символов";
    usrPwd.classList.add("border-color");
    pwdObjColorized();
  } else {
    pwdVldTxt.innerText = "";
    pwdObjDecolorize();
  }
});
btn.addEventListener("click", () => {
  if (usrChk.checked === false) {
    chkVldTxt.innerText = "Поле обязательно для заполнения";
    chkStar.classList.add("color-red");
  } else {
    chkVldTxt.innerText = "";
    chkStar.classList.remove("color-red");
  }
});
btn.addEventListener("click", () => {
  if (
    validateEmail(usrEmail.value) &&
    usrPwd.value.length >= 8 &&
    usrChk.checked === true
  ) {
    return console.log({ email: usrEmail.value, password: usrPwd.value });
  }
});
