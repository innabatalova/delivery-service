class Auth {

  openAuth = () => {
    const modalAuth = document.querySelector(".modal-auth");
    modalAuth.style.display = "flex";
  }

  closeAuth = () => {
    const modalAuth = document.querySelector(".modal-auth");
    modalAuth.style.display = "none";
  }

  logIn = (e) => {
    e.preventDefault();

    const inputLogin = document.getElementById("login");
    const inputPassword = document.getElementById("password");

    const user = {
      login: inputLogin.value,
      password: inputPassword.value,
    };

    localStorage.setItem("user", JSON.stringify(user));

    const modalAuth = document.querySelector(".modal-auth");
    modalAuth.style.display = "none";

    const buttonAuth = document.querySelector(".button-auth");
    buttonAuth.style.display = "none";
    const buttonCart = document.querySelector(".button-cart");
    buttonCart.style.display = "flex";
    const buttonOut = document.querySelector(".button-out");
    buttonOut.style.display = "flex";

    const userName = document.querySelector(".user-name");
    userName.style.display = "flex";
    userName.textContent = user.login;
  }

  checkLogin = (userData) => {
    setTimeout(() => {
      const buttonAuth = document.querySelector(".button-auth");
      buttonAuth.style.display = "none";
      const buttonCart = document.querySelector(".button-cart");
      buttonCart.style.display = "flex";
      const buttonOut = document.querySelector(".button-out");
      buttonOut.style.display = "flex";

      const userName = document.querySelector(".user-name");
      userName.style.display = "flex";
      userName.textContent = userData.login;
    }, 0)
    
  }

  logOut = () => {
    const buttonAuth = document.querySelector(".button-auth");
    buttonAuth.style.display = "flex";
    const buttonCart = document.querySelector(".button-cart");
    buttonCart.style.display = "none";
    const buttonOut = document.querySelector(".button-out");
    buttonOut.style.display = "none";

    const userName = document.querySelector(".user-name");
    userName.style.display = "none";

    localStorage.removeItem("user");
  }

  
}

export default new Auth;