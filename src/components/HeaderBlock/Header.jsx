import React from 'react'

import HeaderButton from '../HeaderButton/HeaderButton';

import Logo from "../../img/icon/logo.svg";

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
          classNameValue='button-auth-svg' classNameText='button-text' TextBtn='Войти' />

        <HeaderButton id="cart-button" classNameBtn='button button-cart'
          classNameValue='button-cart-svg' classNameText='button-text' TextBtn='Корзина' />

        <HeaderButton classNameBtn='button button-primary button-out'
          classNameValue='button-text' classNameText='button-out-svg' TextBtn='Выйти' />
      </div>
    </header>
  )
}

export default Header;