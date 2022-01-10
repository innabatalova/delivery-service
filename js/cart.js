const cart = () => {
  const buttonCart = document.getElementById("cart-button");
  const modalCart = document.querySelector(".modal-cart");
  const close = modalCart.querySelector(".close"); //получение по селектору, но внутри указанного блока
  const modalBody = modalCart.querySelector(".modal-body");
  const buttonSend = modalCart.querySelector(".button-primary");
  const clearCart = modalCart.querySelector(".clear-cart");
  const modalPricetag = modalCart.querySelector(".modal-pricetag");

  //подсчет и динамический вывод суммы в корзине
  const renderPrice = () => {
    const getDataCart = JSON.parse(localStorage.getItem("cart"));

    const resultsPrice = getDataCart.map(function (num) {
      return num.price * num.count;
    });

    const summPrice = resultsPrice.reduce(function (sum, current) {
      return sum + current;
    });

    modalPricetag.innerHTML = `
          <span class="food-name">${summPrice} ₽</span>
      `;
  };

  renderPrice();

  //очистка корзины при клике по кнопке "Отмена"
  clearCart.addEventListener("click", () => {
    resetCart();
  });

  //очистка корзины после отправки заказа
  const resetCart = () => {
    modalBody.innerHTML = "";
    localStorage.removeItem("cart");
    modalCart.classList.remove("is-open");
  };

  const incrementCount = (id) => {
    const cartArray = JSON.parse(localStorage.getItem("cart")); //получаем массив из лок памяти
    cartArray.map((item) => {
      //преобразуем полученный массив
      if (item.id === id) {
        item.count++;
      }
    });
    localStorage.setItem("cart", JSON.stringify(cartArray)); //перезаписываем массив в лок память

    renderItem(cartArray);
  };

  const decrementCount = (id) => {
    const cartArray = JSON.parse(localStorage.getItem("cart")); //получаем массив из лок памяти
    cartArray.map((item) => {
      //преобразуем полученный массив
      if (item.id === id) {
        item.count = item.count > 0 ? item.count - 1 : 0;
      }
    });
    localStorage.setItem("cart", JSON.stringify(cartArray)); //перезаписываем массив в лок память

    renderItem(cartArray);
  };

  const renderItem = (data) => {
    modalBody.innerHTML = "";

    data.forEach((cartItem) => {
      const cartElem = document.createElement("div");
      cartElem.classList.add("food-row");

      cartElem.innerHTML = `
          <span class="food-name">${cartItem.name}</span>
          <strong class="food-price">${cartItem.price} ₽</strong>
          <div class="food-counter">
            <button class="counter-button btn-dec" data-index = '${cartItem.id}'>-</button>
            <span class="counter">${cartItem.count}</span>
            <button class="counter-button btn-inc" data-index = '${cartItem.id}'>+</button>
          </div>
      `;

      modalBody.append(cartElem);
    });
  };

  modalBody.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("btn-dec")) {
      decrementCount(e.target.dataset.index);
      renderPrice();
    } else if (e.target.classList.contains("btn-inc")) {
      incrementCount(e.target.dataset.index);
      renderPrice();
    }
  });

  //отправка данных на сервер при оформлении заказа (API тестовый, можно заменить при необ-ти)
  buttonSend.addEventListener("click", () => {
    const cartArray = localStorage.getItem("cart"); //получаем массив из лок памяти
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: cartArray,
    })
      .then((response) => {
        if (response.ok) {
          resetCart();
        }
      })
      .catch((e) => {
        console.error(e);
      });
  });

  buttonCart.addEventListener("click", () => {
    //открытие присваиванием класса
    modalCart.classList.add("is-open");
    //подгрузка данных из лок памяти
    if (JSON.parse(localStorage.getItem("cart"))) {
      renderItem(JSON.parse(localStorage.getItem("cart")));
    }
  });

  close.addEventListener("click", () => {
    modalCart.classList.remove("is-open");
  });
};

cart();
