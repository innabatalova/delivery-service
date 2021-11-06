const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const closeAuth = document.querySelector(".close-auth");
const buttonOut = document.querySelector(".button-out");
const userName = document.querySelector(".user-name");
const logInForm = document.getElementById("logInForm");
const inputLogin = document.getElementById("login");
const inputPassword = document.getElementById("password");

//console.dir(inputPassword);

//авторизация при отправке формы
const logIn = (user) => {
  buttonAuth.style.display = "none";
  buttonOut.style.display = "flex";
  userName.style.display = "flex";
  userName.textContent = user.login;
  modalAuth.style.display = "none";
};

//выход из аккаунта
const logOut = () => {
  buttonAuth.style.display = "flex";
  buttonOut.style.display = "none";
  userName.style.display = "none";
  userName.textContent = "";
  localStorage.removeItem("user");
};

buttonOut.addEventListener("click", () => {
  logOut();
});

//показать форму авторизации при клике на кнопку
buttonAuth.addEventListener("click", (event) => {
  event.preventDefault();
  modalAuth.style.display = "flex";
});

//закрыть форму авторизации при клике на крестик
closeAuth.addEventListener("click", () => {
  modalAuth.style.display = "none";
});

//слушатель события отправки формы
logInForm.addEventListener("submit", (event) => {
  event.preventDefault(); //отмена поведения по умолчанию

  const user = {
    login: inputLogin.value,
    password: inputPassword.value,
  };

  localStorage.setItem("user", JSON.stringify(user)); //сохранение данных в локальном хранилище браузера
  logIn(user);
});

//при перехзагрузке остаемся в своем аккаунте

//задаем условие проверки: есть ли в лок.хранилище такие данные
if (localStorage.getItem("user")) {
  logIn(JSON.parse(localStorage.getItem("user"))); //передаем данные в функцию logIn
}
