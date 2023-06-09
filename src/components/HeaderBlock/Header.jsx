import React from 'react'

import HeaderButton from '../HeaderButton/HeaderButton';

import Logo from "../../img/icon/logo.svg";
import User from "../../img/icon/user.svg";
import ShoppingCart from "../../img/icon/shopping-cart.svg";
import Logout from "../../img/icon/logout.svg";

const Header = () => {
  return (
    <header className="header">
      <a class="logo">
        <img alt="Logo" class="logo__img" src={Logo}/>
      </a>
      <label class="address">
        <input
          type="text"
          class="input input-address"
          placeholder="Адрес доставки"
        />
      </label>
      <div class="buttons">
        <span class="user-name"></span>
        <HeaderButton classNameBtn='button button-primary button-auth'
          classNameValue='button-auth-svg' classNameText='button-text' TextBtn='Войти' HeaderBtnIcon={User}/>

        <HeaderButton id="cart-button" classNameBtn='button button-cart'
          classNameValue='button-cart-svg' classNameText='button-text' TextBtn='Корзина' HeaderBtnIcon={ShoppingCart}/>

        <HeaderButton classNameBtn='button button-primary button-out'
          classNameValue='button-out-svg' classNameText='button-text' TextBtn='Выйти' HeaderBtnIcon={Logout}/>
      </div>
    </header>
  )
}

export default Header;