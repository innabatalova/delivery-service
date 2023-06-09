import Logo from "../img/icon/logo.svg";
import pizzaPlus from "../img/pizza-plus/preview.jpg";
import tanukiPlus from "../img/tanuki/tanuki-preview.jpg";
import foodBand from "../img/food-band/food-band-preview.jpg";

const headerLogoIcon = document.querySelector(".logo__img");
headerLogoIcon.src = Logo;

const cardImagePizzaPlus = document.querySelector(".card-image_pizza-plus");
cardImagePizzaPlus.src = pizzaPlus;

const cardImageTanuki = document.querySelector(".card-image_tanuki");
cardImageTanuki.src = tanukiPlus;

const cardImageFoodBand = document.querySelector(".card-image_food-band");
cardImageFoodBand.src = foodBand;



// headerPhoneIcon.style = `background-image:url(${iconPhone})`;