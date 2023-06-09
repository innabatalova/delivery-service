import React from 'react'

import Header from './HeaderBlock/Header'
//import MainBlock from './MainBlock/MainBlock'
import MenuBlock from './MenuBlock/MenuBlock'
import FooterBlock from './FooterBlock/FooterBlock'
import ModalCart from './ModalCart/ModalCart'
import ModalAuth from './ModalAuth/ModalAuth'

const LayoutBlock = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <main className="main">
        <MenuBlock restaurantTitle='Пицца Плюс' restaurantRating='4.5' restaurantPrice='От 900 ₽' restaurantCategory='Пицца'/>
      </main>
      <FooterBlock />
      <ModalCart />
      <ModalAuth />
    </>
  )
}

export default LayoutBlock;