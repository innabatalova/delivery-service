// const menu = () => {
//   const cardsMenu = document.querySelector(".cards-menu");

//   const cardInfo = document.querySelector(".card-info");

//   const cartArray = localStorage.getItem("cart") //массив для добавления в корзину
//     ? JSON.parse(localStorage.getItem("cart")) //если истина - передать значение
//     : []; //если ложь - пустой массив

//   const changeTitle = (restaurant) => {
//     const restaurantTitle = document.querySelector(".restaurant-title");
//     restaurantTitle.textContent = restaurant.name;

//     const restaurantRating = document.querySelector(".rating");
//     restaurantRating.textContent = restaurant.stars;

//     const restaurantPrice = document.querySelector(".price");
//     restaurantPrice.textContent = `От ${restaurant.price} ₽`;

//     const restaurantCategory = document.querySelector(".category");
//     restaurantCategory.textContent = restaurant.kitchen;
//   };

//   const addToCart = (cartItem) => {
//     if (cartArray.some((item) => item.id === cartItem.id)) {
//       //метод some проверяет есть ли уже в массиве элемент с таким id
//       cartArray.map((item) => {
//         if (item.id === cartItem.id) {
//           //метод map проверяет есть ли элемент с таким Id и добавляет счетчик
//           item.count++;
//         }
//         return item;
//       });
//     } else {
//       cartArray.push(cartItem); //добавление элемента в массив
//     }

//     localStorage.setItem("cart", JSON.stringify(cartArray)); //добавление элемента в локальную память
//   };

//   const renderItems = (data) => {
//     //console.log(data);

//     //перебор массива с высодом каждого элемента массива в консоль
//     data.users.forEach(({ image, height, maidenName, age, gender }) => {
//       const card = document.createElement("card");

//       card.classList.add("card");

//       card.innerHTML = `
//     <img src="${image}" alt="${maidenName}" class="card-image"/>
//       <div class="card-text">
//         <div class="card-heading">
//           <h3 class="card-title card-title-reg">${age}</h3>
//         </div>
//         <div class="card-info">
//           <div class="ingredients">${height}
//           </div>
//         </div>
//         <div class="card-buttons">
//           <button class="button button-primary button-add-cart">
//             <span class="button-card-text">В корзину</span>
//             <span class="button-cart-svg"></span>
//           </button>
//           <strong class="card-price-bold">${gender} ₽</strong>
//         </div>
//       </div>        
//     `;

//       card.querySelector(".button-card-text").addEventListener("click", () => {
//         //сокращение от полей ниже
//         addToCart({ age, gender, id, count: 1 });

//         // const cartItem = {    //все это сокращено см. выше
//         //   name: name,
//         //   price: price,
//         //   count: 1,
//         // };

//         // addToCart(cartItem);
//       });

//       cardsMenu.append(card);
//     });
//   };

//   //превращение данные из json и обратно (через сервер можно менять значения атрибутов)

//   //проверка наличия ключа в localStorage и выполнение кода, если ключ есть
//   if (localStorage.getItem("restaurant")) {
//     const restaurant = JSON.parse(localStorage.getItem("restaurant"));
//     //console.log(restaurant.products);

//     changeTitle(restaurant);

//     fetch('https://dummyjson.com/users') //добавление текущего значения переменной в {}
//       .then((response) => response.json())
//       .then((data) => {
//         renderItems(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   } else {
//     //window.location.href = "/";
//   }
// };

// menu();
