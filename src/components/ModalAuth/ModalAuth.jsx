import React from 'react'

import Auth from '../../controllers/auth'

const ModalAuth = () => {
  return (
    <div class="modal-auth">
      <div class="modal-dialog modal-dialog-auth">
        <button class="close-auth" onClick={Auth.closeAuth}>&times;</button>
        <form id="logInForm" onSubmit={Auth.logIn} >
          <fieldset class="modal-body">
            <legend class="modal-title">Авторизация</legend>
            <label class="label-auth">
              <span>Логин</span>
              <input id="login" type="text" required />
            </label>
            <label class="label-auth">
              <span>Пароль</span>
              <input id="password" type="password" required />
            </label>
          </fieldset>
          <div class="modal-footer">
            <div class="footer-buttons">
              <button class="button button-primary button-login" type="submit">
                Войти
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalAuth;