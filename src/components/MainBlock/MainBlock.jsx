import React from 'react'
import { useNavigate } from 'react-router-dom';

import PromoBunner from '../PromoBunner/PromoBunner';
import CardRestaurant from '../CardRestaurant/CardRestaurant';

import Pizza from '../../img/promo/pizza.png';
import Kebab from '../../img/promo/kebab.png';
import Vegetables from '../../img/promo/vegetables.png';
import Sushi from '../../img/promo/sushi.png';

import PartnersDB from '../../db/partners';

const MainBlock = () => {

  const stylePromoPizza = { background: "#fff1b8 url(" + Pizza + ") no-repeat top -100px right -250px / 830px" }
  const stylePromoKebab = { background: "#D6E4FF url(" + Kebab + ") no-repeat top 45px right 40px / 450px" }
  const stylePromoVegetables = { background: "#FFF566 url(" + Vegetables + ") no-repeat top 0 right 0 / 825px" }
  const stylePromoSushi = { background: "#FFF1F0 url(" + Sushi + ") no-repeat top 10px right 15px / 500px" }

  const navigate = useNavigate()

  const сardRestaurantList = PartnersDB.map((item) => 
    <CardRestaurant imgCardProps={item.image} cardTitle={item.name} cardTag={item.time_of_delivery + ` мин`}
      cardRating={item.stars} cardPrice={`От ` + item.price + ` ₽`} cardCategory={item.kitchen} onClick={() => navigate(item.navigate)} />);

  return (
    <div class="container">

      <section className="container-promo">
        <PromoBunner promoClass='pizza' stylePromoBG={stylePromoPizza}
          promoTitle={'Онлайн-сервис доставки еды на дом'}
          promoText='Блюда из любимого ресторана привезет курьер в перчатках, маске и с
              антисептиком'/>

        <PromoBunner promoClass='kebab' stylePromoBG={stylePromoKebab}
          promoTitle={'Шашлыки на майские со скидкой 35%'}
          promoText='Закажите шашлыки в любом ресторане до 10 мая и получите скидку по промокоду OMAGAD' />

        <PromoBunner promoClass='vegetables' stylePromoBG={stylePromoVegetables}
          promoTitle={'Скидка 20% на всю еду по промокоду LOVE.JS'}
          promoText='Блюдо из ресторана привезут вместе с двумя подарочными книгами по фронтенду' />

        <PromoBunner promoClass='sushi' stylePromoBG={stylePromoSushi}
          promoTitle={'Сеты со скидкой до 30% в ресторанах'}
          promoText='Скидки на сеты до 30 мая по промокоду DADADA' />
      </section>

      <section className="restaurants">

        <div className="section-heading">
          <h2 className="section-title">Рестораны</h2>
          <label className="search">
            <input
              type="text"
              className="input input-search"
              placeholder="Поиск блюд и ресторанов"
            />
          </label>
        </div>

        <div className="cards cards-restaurants">
          {сardRestaurantList}
        </div>
      </section>

    </div>
  )
}

export default MainBlock;