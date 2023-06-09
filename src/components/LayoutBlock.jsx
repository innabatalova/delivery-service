import React from 'react'

import Header from './HeaderBlock/Header'
import MainBlock from './MainBlock/MainBlock'

const LayoutBlock = () => {
  return(
    <>
      <div className="container">
        <Header/>
      </div>
      <main className="main">
        <MainBlock />
      </main>
      <footer className="footer">footer</footer>
      <div className="modal modal-cart">modal modal-cart</div>
      <div className="modal-auth">modal-auth</div>
    </>
  )
}

export default LayoutBlock;