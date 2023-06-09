import React from 'react'

import Header from './HeaderBlock/Header'

const LayoutBlock = () => {
  return(
    <>
      <div className="container">
        <Header />
      </div>
      <div className="main">main</div>
      <div className="footer">footer</div>
      <div className="modal modal-cart">modal modal-cart</div>
      <div className="modal-auth">modal-auth</div>
    </>
  )
}

export default LayoutBlock;