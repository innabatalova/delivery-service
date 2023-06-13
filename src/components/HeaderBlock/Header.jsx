import React from 'react'

import HeaderButton from '../HeaderButton/HeaderButton';

import Logo from "../../img/icon/logo.svg";
import User from "../../img/icon/user.svg";
import ShoppingCart from "../../img/icon/shopping-cart.svg";
import Logout from "../../img/icon/logout.svg";

import Auth from '../../controllers/auth'
import Basket from '../../controllers/basket'

const Header = () => {

  if (localStorage.getItem("user")) {
    const user = JSON.parse(localStorage.getItem("user"))
    Auth.checkLogin(user)
  }

  return (
    <header className="header">
      <a className="logo">
        <img alt="Logo" className="logo__img" src={Logo}/>
      </a>
      <label className="address">
        <input
          type="text"
          className="input input-address"
          placeholder="Адрес доставки"
        />
      </label>
      <div className="buttons">
        <span className="user-name"></span>
        <HeaderButton classNameBtn='button button-primary button-auth'
          classNameValue='button-auth-svg' classNameText='button-text' TextBtn='Войти' HeaderBtnIcon={User} onClickBtn={Auth.openAuth} />

        <HeaderButton id="cart-button" classNameBtn='button button-cart'
          classNameValue='button-cart-svg' classNameText='button-text' TextBtn='Корзина' HeaderBtnIcon={ShoppingCart} onClickBtn={Basket.openModal}/>

        <HeaderButton classNameBtn='button button-primary button-out'
          classNameValue='button-out-svg' classNameText='button-text' TextBtn='Выйти' HeaderBtnIcon={Logout} onClickBtn={Auth.logOut}/>
      </div>
    </header>
  )
}

export default Header;