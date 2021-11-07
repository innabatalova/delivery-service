const cardsMenu = document.querySelector(".cards-menu");

const cardInfo = document.querySelector(".card-info");

const changeTitle = (restaurant) => {
  const restaurantTitle = document.querySelector(".restaurant-title");
  restaurantTitle.textContent = restaurant.name;

  const restaurantRating = document.querySelector(".rating");
  restaurantRating.textContent = restaurant.stars;

  const restaurantPrice = document.querySelector(".price");
  restaurantPrice.textContent = `От ${restaurant.price} ₽`;

  const restaurantCategory = document.querySelector(".category");
  restaurantCategory.textContent = restaurant.kitchen;
};

const renderItems = (data) => {
  //console.log(data);

  //перебор массива с высодом каждого элемента массива в консоль
  data.forEach(({ description, id, image, name, price }) => {
    const card = document.createElement("card");

    card.classList.add("card");

    card.innerHTML = `
    <img src="${image}" alt="${name}" class="card-image"/>
      <div class="card-text">
        <div class="card-heading">
          <h3 class="card-title card-title-reg">${name}</h3>
        </div>
        <div class="card-info">
          <div class="ingredients">${description}
          </div>
        </div>
        <div class="card-buttons">
          <button class="button button-primary button-add-cart">
            <span class="button-card-text">В корзину</span>
            <span class="button-cart-svg"></span>
          </button>
          <strong class="card-price-bold">${price} ₽</strong>
        </div>
      </div>        
    `;

    cardsMenu.append(card);
  });
};

//превращение данные из json и обратно (через сервер можно менять значения атрибутов)

//проверка наличия ключа в localStorage и выполнение кода, если ключ есть
if (localStorage.getItem("restaurant")) {
  const restaurant = JSON.parse(localStorage.getItem("restaurant"));
  //console.log(restaurant.products);

  changeTitle(restaurant);

  fetch(`./db/${restaurant.products}`) //добавление текущего значения переменной в {}
    .then((response) => response.json())
    .then((data) => {
      renderItems(data);
    })
    .catch((error) => {
      console.log(error);
    });
} else {
  window.location.href = "/";
}
