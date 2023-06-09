import React from 'react'

import Header from './HeaderBlock/Header'
import MainBlock from './MainBlock/MainBlock'
import FooterBlock from './FooterBlock/FooterBlock'
import ModalCart from './ModalCart/ModalCart'

const LayoutBlock = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <main className="main">
        <MainBlock />
      </main>
      <FooterBlock />
      <ModalCart />
      <div className="modal-auth">modal-auth</div>
    </>
  )
}

export default LayoutBlock;