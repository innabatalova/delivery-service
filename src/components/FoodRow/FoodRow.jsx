import React, { useContext } from 'react'

import BasketContext from '../../context'

const FoodRow = ({ foodName, foodPrice, foodCounter }) => {

  const [context, setContext] = useContext(BasketContext);

  const incrementCount = () => {
    const getDataCart = JSON.parse(localStorage.getItem("basket"));
    getDataCart.map((item) => {
      if (item.title == foodName) {
        item.count++
      }
    });
    localStorage.setItem("basket", JSON.stringify(getDataCart));

    const modalCart = document.querySelector(".modal-cart");
    const modalPricetag = modalCart.querySelector(".modal-pricetag");
    const resultsPrice = getDataCart.map(function (num) {
      return Number(num.price) * num.count;
    });

    const summPrice = resultsPrice.reduce(function (sum, current) {
      return sum + current;
    });

    modalPricetag.innerHTML = `
          <span class="food-name">${summPrice} ₽</span>
      `;
    setContext(getDataCart)
    localStorage.setItem("basket", JSON.stringify(getDataCart));
  }

  const decrementCount = () => {
    const getDataCart = JSON.parse(localStorage.getItem("basket"));
    getDataCart.map((item) => {
      if (item.title == foodName) {
        item.count = item.count > 0 ? item.count - 1 : 0
      }
    });
    getDataCart.map((item) => {
      if (item.count < 1) {
        getDataCart.splice(getDataCart.indexOf(item), 1)
      }
    });

    if (getDataCart.length !== 0){
      const modalCart = document.querySelector(".modal-cart");
      modalCart.style.display = "flex";
      const modalPricetag = modalCart.querySelector(".modal-pricetag");
      const resultsPrice = getDataCart.map(function (num) {
        return Number(num.price) * num.count;
      });
      const summPrice = resultsPrice.reduce(function (sum, current) {
        return sum + current;
      });
      modalPricetag.innerHTML = `
          <span class="food-name">${summPrice} ₽</span>
      `;
    } else {
      const modalCart = document.querySelector(".modal-cart");
      modalCart.style.display = "none";
      setTimeout(() => { 
        alert('Нет ни одного товара в корзине!')
        localStorage.removeItem("basket");
      }, 0)
    }

    setContext(getDataCart)
    localStorage.setItem("basket", JSON.stringify(getDataCart));
  }

  return (
    <div className="food-row">
      <span className="food-name">{foodName}</span>
      <strong className="food-price">{foodPrice}</strong>
      <div className="food-counter">
        <button className="counter-button" onClick={decrementCount}>-</button>
        <span className="counter">{foodCounter}</span>
        <button className="counter-button" onClick={incrementCount}>+</button>
      </div>
    </div>
  )
}

export default FoodRow;