import React from 'react'

const PromoBunner = ({ promoClass, promoTitle, promoText, stylePromoBG }) => {
  return(
    <section className={`promo ` + promoClass} style={stylePromoBG}>
      <h1 className='promo-title'>{promoTitle}</h1>
      <p className='promo-text'>{promoText}</p>
    </section>
  )
}

export default PromoBunner;