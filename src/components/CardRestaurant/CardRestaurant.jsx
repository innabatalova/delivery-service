import React from 'react'

import IconRating from '../../img/icon/rating.svg';

const CardRestaurant = ({ imgCardProps, cardTitle, cardTag, cardRating, cardPrice, cardCategory, onClick }) => {

  const style = { background: "url(" + IconRating + ") no-repeat 0 7px" }

  return(
    <a onClick={onClick} class="card card-restaurant">
      <img
        alt="image"
        className='card-image'
        src={imgCardProps}
      />
      <div className="card-text">
        <div className="card-heading">
          <h3 className="card-title">{cardTitle}</h3>
          <span className="card-tag tag">{cardTag}</span>
        </div>
        <div className="card-info">
          <div className="rating" style={style}>{cardRating}</div>
          <div className="price">{cardPrice}</div>
          <div className="category">{cardCategory}</div>
        </div>
      </div>
    </a>
  )
}

export default CardRestaurant;