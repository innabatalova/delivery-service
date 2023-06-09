import React from 'react'

import PromoBunner from '../PromoBunner/PromoBunner';
import CardRestaurant from '../CardRestaurant/CardRestaurant';

import Pizza from '../../img/promo/pizza.png';
import Kebab from '../../img/promo/kebab.png';
import Vegetables from '../../img/promo/vegetables.png';
import Sushi from '../../img/promo/sushi.png';

import PizzaPreview from '../../img/pizza-plus/preview.jpg';
import TanukiPreview from '../../img/tanuki/tanuki.jpg';
import FoodBandPreview from '../../img/food-band/food-band-preview.jpg';
import PalkiSkalkiPreview from '../../img/palki-skalki/palki-skalki-preview.jpg';
import GusiLebediPreview from '../../img/gusi-lebedi/gusi-lebedi-preview.jpg';
import PizzaBurgerPreview from '../../img/pizza-burger/pizza-burger-preview.jpg';

const MainBlock = () => {

  const stylePromoPizza = { background: "#fff1b8 url(" + Pizza + ") no-repeat top -100px right -250px / 830px" }
  const stylePromoKebab = { background: "#D6E4FF url(" + Kebab + ") no-repeat top 45px right 40px / 450px" }
  const stylePromoVegetables = { background: "#FFF566 url(" + Vegetables + ") no-repeat top 0 right 0 / 825px" }
  const stylePromoSushi = { background: "#FFF1F0 url(" + Sushi + ") no-repeat top 10px right 15px / 500px" }

  return (
    <div class="container">

      <section class="container-promo">
        <PromoBunner promoClass='pizza' stylePromoBG={stylePromoPizza}
          promoTitle={'Онлайн-сервис доставки еды на дом'}
          promoText='Блюда из любимого ресторана привезет курьер в перчатках, маске и с
              антисептиком'/>

        <PromoBunner promoClass='kebab' stylePromoBG={stylePromoKebab}
          promoTitle={'Шашлыки на майские со скидкой 35%'}
          promoText='Закажите шашлыки в любом ресторане до 10 мая и получите скидку по промокоду OMAGAD'/>

        <PromoBunner promoClass='vegetables' stylePromoBG={stylePromoVegetables}
          promoTitle={'Скидка 20% на всю еду по промокоду LOVE.JS'}
          promoText='Блюдо из ресторана привезут вместе с двумя подарочными книгами по фронтенду'/>

        <PromoBunner promoClass='sushi' stylePromoBG={stylePromoSushi}
          promoTitle={'Сеты со скидкой до 30% в ресторанах'}
          promoText='Скидки на сеты до 30 мая по промокоду DADADA'/>
      </section>

      <section class="restaurants">

        <div class="section-heading">
          <h2 class="section-title">Рестораны</h2>
          <label class="search">
            <input
              type="text"
              class="input input-search"
              placeholder="Поиск блюд и ресторанов"
            />
          </label>
        </div>

        <div class="cards cards-restaurants">

          <CardRestaurant imgCardProps={PizzaPreview} cardTitle='Пицца плюс' cardTag='50 мин' 
            cardRating='4.5' cardPrice='От 900 ₽' cardCategory='Пицца'/>

          <CardRestaurant imgCardProps={TanukiPreview} cardTitle='Тануки' cardTag='60 мин'
            cardRating='4.3' cardPrice='От 1 200 ₽' cardCategory='Суши, роллы' />

          <CardRestaurant imgCardProps={FoodBandPreview} cardTitle='FoodBand' cardTag='40 мин'
            cardRating='3.5' cardPrice='От 450 ₽' cardCategory='Пицца' />

          <CardRestaurant imgCardProps={PalkiSkalkiPreview} cardTitle='Палки скалки' cardTag='55 мин'
            cardRating='4.1' cardPrice='От 500 ₽' cardCategory='Пицца' />

          <CardRestaurant imgCardProps={GusiLebediPreview} cardTitle='Гуси Лебеди' cardTag='75 мин'
            cardRating='5.0' cardPrice='От  1 000 ₽' cardCategory='Русская кухня' />

          <CardRestaurant imgCardProps={PizzaBurgerPreview} cardTitle='PizzaBurger' cardTag='45 мин'
            cardRating='4.5' cardPrice='От 700 ₽' cardCategory='Пицца' />

        </div>
      </section>

    </div>
  )
}

export default MainBlock;