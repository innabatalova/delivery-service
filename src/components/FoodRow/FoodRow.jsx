import React, { useState } from 'react'

const FoodRow = ({ foodName, foodPrice, foodCounter }) => {
  
  const [count, setCount] = useState(foodCounter);
  
  const incrementCount = () => {
    setCount(count + 1)
    const cartArray = JSON.parse(localStorage.getItem("basket"));
    cartArray.map((item) => {
      if (item.title == foodName) {
        item.count++
      }
    });
    localStorage.setItem("basket", JSON.stringify(cartArray));
  }

  const decrementCount = () => {
    count > 0 ? setCount(count - 1) : setCount(0)
    const cartArray = JSON.parse(localStorage.getItem("basket"));
    cartArray.map((item) => {
      if (item.title == foodName) {
        item.count = item.count > 0 ? item.count - 1 : 0
      }
    });
    localStorage.setItem("basket", JSON.stringify(cartArray));
  }

  return(
    <div className="food-row">
      <span className="food-name">{foodName}</span>
      <strong className="food-price">{foodPrice}</strong>
      <div className="food-counter">
        <button className="counter-button" onClick={decrementCount}>-</button>
        <span className="counter">{count}</span>
        <button className="counter-button" onClick={incrementCount}>+</button>
      </div>
    </div>
  )
}

export default FoodRow;