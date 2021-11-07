const cardsRestaurants = document.querySelector(".cards-restaurants");

//console.log(cardsRestaurants);

const renderItems = (data) => {
  data.forEach((item) => {
    const a = document.createElement("a"); //добавление тега элемента

    //деструктуризация обьекта
    const { image, kitchen, name, price, products, stars, time_of_delivery } =
      item;

    a.dataset.products = products; //дата-атрибут, исполь-й для храниния инфы

    a.setAttribute("href", "/restaurant.html"); //добавление к тегу атрибута и значения атрибута

    a.classList.add("card"); //добавление классов элементу
    a.classList.add("card-restaurant");

    //интерполяция с подстановкой значения имени элемента массива
    a.innerHTML = `
    
    <img src="${image}" alt="${name}" class="card-image"/>
              
    <div class="card-text">
      <div class="card-heading">
          <h3 class="card-title">${name}</h3>
          <span class="card-tag tag">${time_of_delivery} мин</span>
      </div>
              
      <div class="card-info">
          <div class="rating">${stars}</div>
          <div class="price">${price} ₽</div>
          <div class="category">${kitchen}</div>
      </div>
    </div>
    `;

    a.addEventListener("click", (e) => {
      e.preventDefault(); //отмена стандартного поведения при клике

      //проверка, введен ли логин
      const userLoginCheck = document.querySelector(".user-name");

      if (!(userLoginCheck.innerText === "")) {
        localStorage.setItem("restaurant", JSON.stringify(item)); //сохранение в памяти localStorage

        window.location.href = "/restaurant.html"; //переход на страницу, сохр в localStorage
      } else {
        modalAuth.style.display = "flex"; //открыть окно авторизации
      }
    });

    cardsRestaurants.append(a); //динамическое выведение созданных <а> в контейнер
  });
};

fetch("https://delivery-education-default-rtdb.firebaseio.com/db/partners.json")
  .then((response) => response.json())
  .then((data) => {
    renderItems(data);
  })
  .catch((error) => {
    //обработка ошибки и поведение в случае ошибки
    console.log(error);
  });
