import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './HeaderBlock/Header'
import MainBlock from './MainBlock/MainBlock'
import MenuBlock from './MenuBlock/MenuBlock'
import FooterBlock from './FooterBlock/FooterBlock'
import ModalCart from './ModalCart/ModalCart'
import ModalAuth from './ModalAuth/ModalAuth'


const LayoutBlock = () => {

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
      </div>
      <main className="main">
        <Routes>
          <Route path="*" element={<MainBlock />} />
          <Route path="pizza-plus" element={<MenuBlock restaurantTitle='Пицца Плюс' 
          restaurantRating='4.5' restaurantPrice='От 900 ₽' restaurantCategory='Пицца' />} />
          <Route path="taniki" element={<MenuBlock restaurantTitle='Тануки'
            restaurantRating='4.3' restaurantPrice='От 1 200 ₽' restaurantCategory='Суши' />} />
          <Route path="food-band" element={<MenuBlock restaurantTitle='Фуд Банд'
            restaurantRating='3.5' restaurantPrice='От 450 ₽' restaurantCategory='Пицца' />} />
          <Route path="palki-skalki" element={<MenuBlock restaurantTitle='Палки Скалки'
            restaurantRating='4.1' restaurantPrice='От 500 ₽' restaurantCategory='Пицца' />} />
          <Route path="gusi-lebedi" element={<MenuBlock restaurantTitle='Гуси Лебеди'
            restaurantRating='5.0' restaurantPrice='От 1 000 ₽' restaurantCategory='Русская кухня' />} />
          <Route path="pizza-burger" element={<MenuBlock restaurantTitle='Пицца Бургер'
            restaurantRating='4.5' restaurantPrice='От 700 ₽' restaurantCategory='Пицца' />} />
        </Routes>
      </main>
      <FooterBlock />
      <ModalCart />
      <ModalAuth />
    </BrowserRouter>
  )
}

export default LayoutBlock;