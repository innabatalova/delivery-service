import React from 'react'

import MenuCard from '../MenuCard/MenuCard';

import pizzaVesuvius from '../../img/pizza-plus/pizza-vesuvius.jpg'
import pizzaGirls from '../../img/pizza-plus/pizza-girls.jpg'
import pizzaOleOle from '../../img/pizza-plus/pizza-oleole.jpg'
import pizzaPlus from '../../img/pizza-plus/pizza-plus.jpg'
import pizzaHawaiian from '../../img/pizza-plus/pizza-hawaiian.jpg'
import pizzaClassic from '../../img/pizza-plus/pizza-classic.jpg'

const MenuBlock = ({ restaurantTitle, restaurantRating, restaurantPrice, restaurantCategory }) => {
  return (
    <div className="container">

      <section className="menu">

        <div className="section-heading">
          <h2 className="section-title restaurant-title">{restaurantTitle}</h2>
          <div className="card-info">
            <div className="rating">{restaurantRating}</div>
            <div className="price">{restaurantPrice}</div>
            <div className="category">{restaurantCategory}</div>
          </div>
        </div>

        <div className="cards cards-menu">

          <MenuCard MenuCardImg={pizzaVesuvius} MenuCardTitle='Пицца Везувий' MenuCardInfo='Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец
                  «Халапенье», соус «Тобаско», томаты.' MenuCardPrice='545'/>

          <MenuCard MenuCardImg={pizzaGirls} MenuCardTitle='Пицца Девичник' MenuCardInfo='Соус томатный, постное тесто, нежирный сыр, кукуруза, лук,
                  маслины, грибы, помидоры, болгарский перец.' MenuCardPrice='450' />

          <MenuCard MenuCardImg={pizzaOleOle} MenuCardTitle='Пицца Оле-Оле' MenuCardInfo='Соус томатный, сыр «Моцарелла», черри, маслины, зелень,
                  майонез.' MenuCardPrice='440' />

          <MenuCard MenuCardImg={pizzaPlus} MenuCardTitle='Пицца Плюс' MenuCardInfo='Соус томатный, сыр «Моцарелла», сыр «Чеддер», томаты,
                  пепперони, телятина, грибы, бекон, болгарский перец.' MenuCardPrice='805' />

          <MenuCard MenuCardImg={pizzaHawaiian} MenuCardTitle='Пицца Гавайская' MenuCardInfo='Соус томатный, сыр «Моцарелла», ветчина, ананасы.' MenuCardPrice='440' />

          <MenuCard MenuCardImg={pizzaClassic} MenuCardTitle='Пицца Классика' MenuCardInfo='Соус томатный, сыр «Моцарелла», сыр «Пармезан», ветчина,
                  салями, грибы.' MenuCardPrice='510' />

        </div>

      </section>

    </div>
  )
}

export default MenuBlock;