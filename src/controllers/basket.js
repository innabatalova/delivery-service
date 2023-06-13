class Basket {

  openModal = () => {
    if (localStorage.getItem('basket') !== null) {
      const getDataCart = JSON.parse(localStorage.getItem("basket"));

      const modalCart = document.querySelector(".modal-cart");
      modalCart.style.display = "flex";
      const modalPricetag = modalCart.querySelector(".modal-pricetag");
      const resultsPrice = getDataCart.map(function (num) {
        return Number(num.price) * num.count;
      });

      const summPrice = resultsPrice.reduce(function (sum, current) {
        return sum + current;
      });

      modalPricetag.innerHTML = `
          <span class="food-name">${summPrice} ₽</span>
      `;
    } else {
      alert('Нет ни одного товара в корзине!')
    }
  }

  closeModal = () => {
    const modalCart = document.querySelector(".modal-cart");
    modalCart.style.display = "none";
  }

  addBasket = (e) => {
    const cardData = e.target.parentNode.parentNode.parentNode
    const targetTitle = cardData.querySelector(".card-title");
    const targetPrice = cardData.querySelector(".card-price");
    const targetObject = {
      title: targetTitle.textContent,
      price: targetPrice.textContent,
      count: 1
    }
    const basketArray = []
    basketArray.push(targetObject)

    if (localStorage.getItem('basket') == null) {
      localStorage.setItem("basket", JSON.stringify(basketArray));
    } else {
      const getDataCart = JSON.parse(localStorage.getItem("basket"));

      if (getDataCart.some((item) => item.title === targetObject.title)) {
        getDataCart.map((item) => {
          if (item.title === targetObject.title) {
            item.count++;
          }
          return item;
        });
      } else {
        getDataCart.push(targetObject);
      }

      localStorage.setItem("basket", JSON.stringify(getDataCart));
    }
  }

  addOrder = () => {
    localStorage.removeItem("basket");
    const modalCart = document.querySelector(".modal-cart");
    modalCart.style.display = "none";
    alert("Заказ отправлен на кухню!");
  }

  clearBasket = () => {
    localStorage.removeItem("basket");
    const modalCart = document.querySelector(".modal-cart");
    modalCart.style.display = "none";
  };

}

export default new Basket;