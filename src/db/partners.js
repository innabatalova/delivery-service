import PizzaPreview from '../img/pizza-plus/preview.jpg';
import TanukiPreview from '../img/tanuki/tanuki.jpg';
import FoodBandPreview from '../img/food-band/food-band-preview.jpg';
import PalkiSkalkiPreview from '../img/palki-skalki/palki-skalki-preview.jpg';
import GusiLebediPreview from '../img/gusi-lebedi/gusi-lebedi-preview.jpg';
import PizzaBurgerPreview from '../img/pizza-burger/pizza-burger-preview.jpg'; 

const PartnersDB = [
  {
    "name": "Пицца Плюс",
    "time_of_delivery": 50,
    "stars": 4.5,
    "price": 900,
    "kitchen": "Пицца",
    "image": PizzaPreview,
    "products": "pizza-plus.json",
    "navigate": "pizza-plus"
  },
  {
    "name": "Тануки",
    "time_of_delivery": 60,
    "stars": 4.3,
    "price": 1200,
    "kitchen": "Суши, роллы",
    "image": TanukiPreview,
    "products": "tanuki.json",
    "navigate": "tanuki"
  },
  {
    "name": "FoodBand",
    "time_of_delivery": 40,
    "stars": 4.4,
    "price": 450,
    "kitchen": "Пицца",
    "image": FoodBandPreview,
    "products": "food-band.json",
    "navigate": "food-band"
  },
  {
    "name": "Палки скалки",
    "time_of_delivery": 55,
    "stars": 4.1,
    "price": 500,
    "kitchen": "Пицца",
    "image": PalkiSkalkiPreview,
    "products": "palki-skalki.json",
    "navigate": "palki-skalki"
  },
  {
    "name": "Гуси Лебеди",
    "time_of_delivery": 75,
    "stars": 4.7,
    "price": 1000,
    "kitchen": "Русская кухня",
    "image": GusiLebediPreview,
    "products": "gusi-lebedi.json",
    "navigate": "gusi-lebedi"
  },
  {
    "name": "PizzaBurger",
    "time_of_delivery": 45,
    "stars": 4.6,
    "price": 700,
    "kitchen": "Пицца",
    "image": PizzaBurgerPreview,
    "products": "pizza-burger.json",
    "navigate": "pizza-burger"
  }
]

export default PartnersDB
