import React from 'react'

import MenuCard from '../MenuCard/MenuCard';

import mainDB from '../../db/db.js'

const MenuBlock = ({ restaurantTitle, restaurantRating, restaurantPrice, restaurantCategory, propsPath }) => {

  const path = propsPath
  const MenuCardList = mainDB[path].map((item) =>
    <MenuCard MenuCardImg={item.image} 
      MenuCardTitle={item.name} 
      MenuCardInfo={item.description}  
      MenuCardPrice={item.price} />);

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
          {MenuCardList}
        </div>

      </section>

    </div>
  )
}

export default MenuBlock;