import React from 'react'

import ShoppingCart from "../../img/icon/shopping-cart-white.svg";

const MenuCard = ({ MenuCardImg, MenuCardTitle, MenuCardInfo, MenuCardPrice}) => {

  const style = { background: "url(" + ShoppingCart + ") no-repeat 50% 50%" }

  return(
    <div class="card">
      <img
        src={MenuCardImg}
        alt="image"
        class="card-image"
      />
      <div class="card-text">
        <div class="card-heading">
          <h3 class="card-title card-title-reg">{MenuCardTitle}</h3>
        </div>
        <div class="card-info">
          <div class="ingredients">{MenuCardInfo}</div>
        </div>
        <div class="card-buttons">
          <button class="button button-primary button-add-cart">
            <span class="button-card-text">В корзину</span>
            <span class="button-cart-svg" style={style}></span>
          </button>
          <strong class="card-price-bold">{MenuCardPrice}</strong>
        </div>
      </div>
    </div>
  )
}

export default MenuCard;