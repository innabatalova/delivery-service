import React, {  useContext } from 'react'

import FoodRow from '../FoodRow/FoodRow';

import Basket from '../../controllers/basket'
import BasketContext from '../../context'

const ModalCart = () => {

  const [context, setContext] = useContext(BasketContext);
  const newBasketList = context.map((item) => <FoodRow foodName={item.title} foodPrice={item.price} foodCounter={item.count} />);

  return (
    <BasketContext.Provider value={[context, setContext]}>
    <div className="modal modal-cart">

      <div className="modal-dialog">

        <div className="modal-header">
          <h3 className="modal-title">Корзина</h3>
          <button className="modal-close" onClick={Basket.closeModal}>&times;</button>
        </div>

        <div className="modal-body">
          {newBasketList}
        </div>

        <div className="modal-footer">
          <span className="modal-pricetag"></span>
          <div className="footer-buttons">
            <button className="button button-primary" onClick={Basket.addOrder}>Оформить заказ</button>
            <button className="button clear-cart" onClick={Basket.clearBasket}>Отмена</button>
          </div>
        </div>
      </div>
    </div>
    </BasketContext.Provider>
  )
}

export default ModalCart;