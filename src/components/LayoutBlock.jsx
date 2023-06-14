import React, { useState, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './HeaderBlock/Header'
import MainBlock from './MainBlock/MainBlock'
import MenuBlock from './MenuBlock/MenuBlock'
import FooterBlock from './FooterBlock/FooterBlock'
import ModalCart from './ModalCart/ModalCart'
import ModalAuth from './ModalAuth/ModalAuth'

import BasketContext from '../context'

import PartnersDB from '../db/partners';

const LayoutBlock = () => {

  const defoultContext = useContext(BasketContext);
  const [context, setContext] = useState(defoultContext);

  const RouteList = PartnersDB.map((item) =>
    <Route path={item.navigate} element={<MenuBlock restaurantTitle={item.name}
      restaurantRating={item.stars} restaurantPrice={`От ` + item.price + ` ₽`} restaurantCategory={item.kitchen} 
      propsPath={item.navigate}/>} />);

  return (
    <BrowserRouter>
      <BasketContext.Provider value={[context, setContext]}>
      <div className="container">
        <Header />
      </div>
      <main className="main">
        <Routes>
          <Route path="*" element={<MainBlock />} />
            {RouteList}
        </Routes>
      </main>
      <FooterBlock />
      <ModalCart />
      <ModalAuth />
      </BasketContext.Provider>
    </BrowserRouter>
  )
}

export default LayoutBlock;