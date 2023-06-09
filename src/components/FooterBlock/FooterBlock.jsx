import React from 'react'

import LogoIconFooter from '../../img/icon/logo.svg'

import InstagramIcon from '../../img/social/instagram.svg'
import FacebookIcon from '../../img/social/fb.svg'
import VKIcon from '../../img/social/vk.svg'

const FooterBlock = () => {
  return(
    <footer className="footer">
      <div className="container">
        <div className="footer-block">
          <img src={LogoIconFooter} alt="logo" className="logo footer-logo" />
          <nav className="footer-nav">
            <a href="#" className="footer-link">Ресторанам </a>
            <a href="#" className="footer-link">Курьерам</a>
            <a href="#" className="footer-link">Пресс-центр</a>
            <a href="#" className="footer-link">Контакты</a>
          </nav>
          <div className="social-links">
            <a href="#" className="social-link"><img src={InstagramIcon} alt="instagram"/></a>
            <a href="#" className="social-link"><img src={FacebookIcon} alt="facebook"/></a>
            <a href="#" className="social-link"><img src={VKIcon} alt="vk"/></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterBlock;