import React from 'react'

import LogoIconFooter from '../../img/icon/logo.svg'

import InstagramIcon from '../../img/social/instagram.svg'
import FacebookIcon from '../../img/social/fb.svg'
import VKIcon from '../../img/social/vk.svg'

const FooterBlock = () => {
  return(
    <footer class="footer">
      <div class="container">
        <div class="footer-block">
          <img src={LogoIconFooter} alt="logo" class="logo footer-logo" />
          <nav class="footer-nav">
            <a href="#" class="footer-link">Ресторанам </a>
            <a href="#" class="footer-link">Курьерам</a>
            <a href="#" class="footer-link">Пресс-центр</a>
            <a href="#" class="footer-link">Контакты</a>
          </nav>
          <div class="social-links">
            <a href="#" class="social-link"><img src={InstagramIcon} alt="instagram"/></a>
            <a href="#" class="social-link"><img src={FacebookIcon} alt="facebook"/></a>
            <a href="#" class="social-link"><img src={VKIcon} alt="vk"/></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterBlock;