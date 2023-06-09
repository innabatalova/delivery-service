import React from 'react'

const FoodRow = ({ foodName, foodPrice, foodCounter }) => {
  return(
    <div className="food-row">
      <span className="food-name">{foodName}</span>
      <strong className="food-price">{foodPrice}</strong>
      <div className="food-counter">
        <button className="counter-button">-</button>
        <span className="counter">{foodCounter}</span>
        <button className="counter-button">+</button>
      </div>
    </div>
  )
}

export default FoodRow;