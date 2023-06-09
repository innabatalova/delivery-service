import React from 'react'

import FoodRow from '../FoodRow/FoodRow';

const ModalCart = () => {
  return(
    <div className="modal modal-cart">

      <div className="modal-dialog">

        <div className="modal-header">
          <h3 className="modal-title">Корзина</h3>
          <button className="close">&times;</button>
        </div>

        <div className="modal-body">
          <FoodRow foodName='Ролл угорь стандарт' foodPrice='250 ₽' foodCounter='1'/>
          <FoodRow foodName='Ролл Калифорния' foodPrice='50 ₽' foodCounter='2' />
          <FoodRow foodName='Пицца Пепперони' foodPrice='530 ₽' foodCounter='1' />
          <FoodRow foodName='Ролл Темпура Эби' foodPrice='260 ₽' foodCounter='1' />
          <FoodRow foodName='Пицца Мини' foodPrice='120 ₽' foodCounter='3' />
          <FoodRow foodName='Борщ со сметаной' foodPrice='220 ₽' foodCounter='1' />
        </div>

        <div className="modal-footer">
          <span className="modal-pricetag"></span>
          <div className="footer-buttons">
            <button className="button button-primary">Оформить заказ</button>
            <button className="button clear-cart">Отмена</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalCart;