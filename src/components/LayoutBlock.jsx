import React from 'react'

import Header from './HeaderBlock/Header'
import MainBlock from './MainBlock/MainBlock'
import FooterBlock from './FooterBlock/FooterBlock'

const LayoutBlock = () => {
  return(
    <>
      <div className="container">
        <Header/>
      </div>
      <main className="main">
        <MainBlock />
      </main>
      <FooterBlock />
      <div className="modal modal-cart">modal modal-cart</div>
      <div className="modal-auth">modal-auth</div>
    </>
  )
}

export default LayoutBlock;