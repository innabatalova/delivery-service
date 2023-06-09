import React from 'react'

import ShoppingCart from "../../img/icon/shopping-cart-white.svg";

const MenuCard = ({ MenuCardImg, MenuCardTitle, MenuCardInfo, MenuCardPrice}) => {

  const style = { background: "url(" + ShoppingCart + ") no-repeat 50% 50%" }

  return(
    <div className="card">
      <img
        src={MenuCardImg}
        alt="image"
        className="card-image"
      />
      <div className="card-text">
        <div className="card-heading">
          <h3 className="card-title card-title-reg">{MenuCardTitle}</h3>
        </div>
        <div className="card-info">
          <div className="ingredients">{MenuCardInfo}</div>
        </div>
        <div className="card-buttons">
          <button className="button button-primary button-add-cart">
            <span className="button-card-text">В корзину</span>
            <span className="button-cart-svg" style={style}></span>
          </button>
          <strong className="card-price-bold">{MenuCardPrice}</strong>
        </div>
      </div>
    </div>
  )
}

export default MenuCard;