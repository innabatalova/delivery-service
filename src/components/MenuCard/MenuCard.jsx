import React, { useContext } from 'react'

import ShoppingCart from "../../img/icon/shopping-cart-white.svg";

import BasketContext from '../../context'

const MenuCard = ({ MenuCardImg, MenuCardTitle, MenuCardInfo, MenuCardPrice }) => {

  const style = { background: "url(" + ShoppingCart + ") no-repeat 50% 50%" }
  const basketArray = []

  const addBasket = () => {
    const targetObject = {
      title: MenuCardTitle,
      price: MenuCardPrice,
      count: 1
    }
    basketArray.push(targetObject)

    if (localStorage.getItem('basket') == null) {
      localStorage.setItem("basket", JSON.stringify(basketArray));
    } else {
      const getDataCart = JSON.parse(localStorage.getItem("basket"));

      if (getDataCart.some((item) => item.title === targetObject.title)) {
        getDataCart.map((item) => {
          if (item.title === targetObject.title) {
            item.count++;
          }
          return item;
        });
      } else {
        getDataCart.push(targetObject);
      }

      localStorage.setItem("basket", JSON.stringify(getDataCart));
    }
  }

  const [context, setContext] = useContext(BasketContext);

  const updateBasket = () => {
    const getDataCart = JSON.parse(localStorage.getItem("basket"));
    setContext(getDataCart)
  }

  return (
    <BasketContext.Provider value={[context, setContext]}>
      <div className="card" >
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
            <button className="button button-primary button-add-cart" onClick={() => { addBasket(); updateBasket()}}>
              <span className="button-card-text">В корзину</span>
              <span className="button-cart-svg" style={style}></span>
            </button>
            <strong className="card-price-bold"><span className="card-price">{MenuCardPrice}</span> ₽</strong>
          </div>
        </div>
      </div>
    </BasketContext.Provider>
  )
}

export default MenuCard;