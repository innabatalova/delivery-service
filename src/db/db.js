import foodBandOne from '../img/food-band/meet.jpg'
import foodBandTwo from '../img/food-band/margarita.jpg'
import foodBandThree from '../img/food-band/pepperoni.jpg'
import foodBandFor from '../img/food-band/seven-cheeses.jpg'
import foodBandFive from '../img/food-band/tom-yam.jpg'
import foodBandSix from '../img/food-band/norwegian.jpg'

import gusiLebediOne from '../img/gusi-lebedi/dumplings.jpg'
import gusiLebediTwo from '../img/gusi-lebedi/plov.jpg'
import gusiLebediThree from '../img/gusi-lebedi/chick.jpg'
import gusiLebediFor from '../img/gusi-lebedi/chicken-soup.jpg'
import gusiLebediFive from '../img/gusi-lebedi/pig-chop.jpg'
import gusiLebediSix from '../img/gusi-lebedi/calf-sauce.jpg'
import gusiLebediSeven from '../img/gusi-lebedi/zander.jpg'
import gusiLebediEight from '../img/gusi-lebedi/squid.jpg'
import gusiLebediNine from '../img/gusi-lebedi/ear.jpg'

import palkiSkalkiOne from '../img/palki-skalki/combo.jpg'
import palkiSkalkiTwo from '../img/palki-skalki/rome.jpg'
import palkiSkalkiThree from '../img/palki-skalki/fusion.jpg'
import palkiSkalkiFor from '../img/palki-skalki/udon.jpg'
import palkiSkalkiFive from '../img/palki-skalki/cheeseburger.jpg'
import palkiSkalkiSix from '../img/palki-skalki/burrito.jpg'

import pizzaBurgerOne from '../img/pizza-burger/pizza-dacha.jpg'
import pizzaBurgerTwo from '../img/pizza-burger/pizza-meat.jpg'
import pizzaBurgerThree from '../img/pizza-burger/pizza-village.jpg'
import pizzaBurgerFor from '../img/pizza-burger/pizza-caesar.jpg'
import pizzaBurgerFive from '../img/pizza-burger/pizza-pepperoni.jpg'
import pizzaBurgerSix from '../img/pizza-burger/pizza-dacha.jpg'

import pizzaPlusOne from '../img/pizza-plus/pizza-vesuvius.jpg'
import pizzaPlusTwo from '../img/pizza-plus/pizza-girls.jpg'
import pizzaPlusThree from '../img/pizza-plus/pizza-oleole.jpg'
import pizzaPlusFor from '../img/pizza-plus/pizza-plus.jpg'
import pizzaPlusFive from '../img/pizza-plus/pizza-hawaiian.jpg'
import pizzaPlusSix from '../img/pizza-plus/pizza-classic.jpg'

import tanukiOne from '../img/tanuki/nisuaz.jpg'
import tanukiTwo from '../img/tanuki/smoke.jpg'
import tanukiThree from '../img/tanuki/fresh.jpg'
import tanukiFor from '../img/tanuki/azhi.jpg'
import tanukiFive from '../img/tanuki/black.jpg'
import tanukiSix from '../img/tanuki/tanuki.jpg'

const mainDB = {
        "food-band": [
            {
                "id": "fb01",
                "name": "Мясная",
                "description": "Пицца соус, сыр Моцарелла, томат, куриное филе, пепперони, свинина, бекон",
                "price": 685,
                "image": foodBandOne
            },
            {
                "id": "fb02",
                "name": "Маргарита",
                "description": "Пицца соус, сыр Моцарелла, томат",
                "price": 693,
                "image": foodBandTwo
            },
            {
                "id": "fb03",
                "name": "Пепперони",
                "description": "Пицца соус, пепперони, сыр Моцарелла",
                "price": 595,
                "image": foodBandThree
            },
            {
                "id": "fb04",
                "name": "Семь сыров",
                "description": "Сыр моцарелла, сыр эмменталь, соус сырный, сыр горгондзола, сыр чеддер, сыр креметте, сыр фетакса, сыр пармезан",
                "price": 785,
                "image": foodBandFor
            },
            {
                "id": "fb05",
                "name": "Том Ям",
                "description": "Креветки, куриное филе, соус Том Ям, сыр Моцарелла, шампиньоны, капуста брокколи, томат.",
                "price": 695,
                "image": foodBandFive
            },
            {
                "id": "fb06",
                "name": "Норвежская",
                "description": "Сливочный соус, соус манго-чили, сыр моцарелла, лук красный, перец болгарский, ломтики лосося, салат Айсберг",
                "price": 875,
                "image": foodBandSix
            }
        ],
        "gusi-lebedi": [
            {
                "id": "gl01",
                "name": "Пельмени теленок с поросем",
                "description": "Настоящие самолепные пельмени из пушистого теста на деревенских желтках и сметане",
                "price": 390,
                "image": gusiLebediOne
            },
            {
                "id": "gl02",
                "name": "Плов",
                "description": "Плов на углях из правильного риса с бараниной, пряностями и овощами на курдючном жире",
                "price": 520,
                "image": gusiLebediTwo
            },
            {
                "id": "gl03",
                "name": "Цыпленок на вертеле",
                "description": "Подается на лаваше со свежим томатом и огурцом, с маринованным луком и с шашлычным соусом",
                "price": 490,
                "image": gusiLebediThree
            },
            {
                "id": "gl04",
                "name": "Суп Курочка ряба",
                "description": "Кура тушка, морковь, макароны, зелень, яйцо, соль, специи.",
                "price": 140,
                "image": gusiLebediFor
            },
            {
                "id": "gl05",
                "name": "Отбивная из поросенка",
                "description": "Толстый кусок парной свинины с томатами и грибами под сырной корочкой",
                "price": 490,
                "image": gusiLebediFive
            },
            {
                "id": "gl06",
                "name": "Теленок в сливочном соусе",
                "description": "Теленок с шампиньонами и луком обжаривается в сливочно-сметанном соусе с картофельным пюре и солеными огурчиками.",
                "price": 530,
                "image": gusiLebediSix
            },
            {
                "id": "gl07",
                "name": "Судак запеченный",
                "description": "Филе судака с картошкой, деревенской сметаной, травами и луком",
                "price": 490,
                "image": gusiLebediSeven
            },
            {
                "id": "gl08",
                "name": "Мурманские кальмары",
                "description": "Мурманские кальмары с чесночным маслом",
                "price": 420,
                "image": gusiLebediEight
            },
            {
                "id": "gl09",
                "name": "Щучья уха на карасях",
                "description": "Наваристая походная уха на четырех рыбах, лаврухе, перце и луке с водкой.",
                "price": 380,
                "image": gusiLebediNine
            }
        ],
        "palki-skalki": [
            {
                "id": "ps01",
                "name": "Комбо 3 пиццы",
                "description": "Пепперони, Чикен Барбекю, Капричеза",
                "price": 899,
                "image": palkiSkalkiOne
            },
            {
                "id": "ps02",
                "name": "Пицца Римская",
                "description": "30 см. Корнишоны, томатный соус, колбаса, красный лучок, сыр моцарелла, помидоры Черри, зелень.",
                "price": 408,
                "image": palkiSkalkiTwo
            },
            {
                "id": "ps03",
                "name": "Пицца Фьюжн",
                "description": "Сыр моцарелла, соус томатный, курица, пепперони, перец болгарский, томаты, лук красный, соус бургер, лук зеленый",
                "price": 499,
                "image": palkiSkalkiThree
            },
            {
                "id": "ps04",
                "name": "Эби удон",
                "description": "Японский супчик на мисо бульоне с добавлением яйца, тигровой креветки, лапши, шампиньонов и зеленого лучка.",
                "price": 319,
                "image": palkiSkalkiFor
            },
            {
                "id": "ps05",
                "name": "Чизбургер",
                "description": "Мясная котлета, салат Айсберг, Шеф-соус, помидоры, корнишоны, сыр Чеддер, соус Барбекю",
                "price": 358,
                "image": palkiSkalkiFive
            },
            {
                "id": "ps06",
                "name": "Буррито с курицей",
                "description": "Сыр, помидор, цыпленок, перец сладкий, лук, салат, яичный блинчик, соус сырный, тортилья, кетчуп",
                "price": 356,
                "image": palkiSkalkiSix
            }
        ],
        "pizza-burger": [
            {
                "id": "pb01",
                "name": "Пицца от Шеф-повара",
                "description": "Сыр моцарелла, помидоры, салями, бекон, сыр пармезан, зелень, ветчина",
                "price": 638,
                "image": pizzaBurgerOne
            },
            {
                "id": "pb02",
                "name": "Пицца Мясное ассорти",
                "description": "Сыр моцарелла, фирменный соус, помидоры, куриная грудка, бекон, свинина, говядина, зелень",
                "price": 693,
                "image": pizzaBurgerTwo
            },
            {
                "id": "pb03",
                "name": "Пицца Деревенская",
                "description": "Сыр моцарелла, пицца соус, чеснок, сыр пармезан, шампиньоны, помидоры, зелень, лук, курица, бекон, ветчина, пепперони",
                "price": 705,
                "image": pizzaBurgerThree
            },
            {
                "id": "pb04",
                "name": "Пицца Цезарь",
                "description": "Соус Цезарь, куриная грудка, сыр пармезан, моцарелла, гренки, помидоры, салат айсберг",
                "price": 759,
                "image": pizzaBurgerFor
            },
            {
                "id": "pb05",
                "name": "Пицца Пепперони",
                "description": "Сыр моцарелла, пицца соус, шампиньоны, пепперони",
                "price": 475,
                "image": pizzaBurgerFive
            },
            {
                "id": "pb06",
                "name": "Пицца Дачная",
                "description": "Сыр моцарелла, пицца соус, бекон, картофель фри, куриная грудка, помидоры, пепперони, ветчина, зелень",
                "price": 649,
                "image": pizzaBurgerSix
            }
        ],
        "pizza-plus": [
            {
                "id": "pp01",
                "name": "Пицца Везувий",
                "description": "Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец «Халапенье», соус «Тобаско», томаты.",
                "price": 545,
                "image": pizzaPlusOne
            },
            {
                "id": "pp02",
                "name": "Пицца Девичник",
                "description": "Соус томатный, постное тесто, нежирный сыр, кукуруза, лук, маслины, грибы, помидоры, болгарский перец.",
                "price": 450,
                "image": pizzaPlusTwo
            },
            {
                "id": "pp03",
                "name": "Пицца Оле-Оле",
                "description": "Соус томатный, сыр «Моцарелла», черри, маслины, зелень, майонез",
                "price": 440,
                "image": pizzaPlusThree
            },
            {
                "id": "pp04",
                "name": "Пицца Плюс",
                "description": "Соус томатный, сыр «Моцарелла», сыр «Чеддер», томаты, пепперони, телятина, грибы, бекон, болгарский перец.",
                "price": 805,
                "image": pizzaPlusFor
            },
            {
                "id": "pp05",
                "name": "Пицца Гавайская",
                "description": "Соус томатный, сыр «Моцарелла», ветчина, ананасы",
                "price": 440,
                "image": pizzaPlusFive
            },
            {
                "id": "pp06",
                "name": "Пицца Классика",
                "description": "Соус томатный, сыр «Моцарелла», сыр «Пармезан», ветчина, салями, грибы.",
                "price": 510,
                "image": pizzaPlusSix
            }
        ],
        "tanuki": [
            {
                "id": "tn01",
                "name": "ФИЛАДЕЛЬФИЯ НИСУАЗ",
                "description": "Угорь, авокадо, сыр, тобико, соус «Нисуаз», кунжут, 6 шт.",
                "price": 455,
                "image": tanukiOne
            },
            {
                "id": "tn02",
                "name": "ФИЛАДЕЛЬФИЯ СМОУК",
                "description": "Лосось копченый, курица копченая, омлет, огурец, авокадо, сыр, микс соусов, 6 шт.",
                "price": 455,
                "image": tanukiTwo
            },
            {
                "id": "tn03",
                "name": "ФИЛАДЕЛЬФИЯ ФРЕШ",
                "description": "Лосось, авокадо, огурец, сыр, омлет, тобико, микс соусов",
                "price": 455,
                "image": tanukiThree
            },
            {
                "id": "tn04",
                "name": "КАЛИФОРНИЯ АЖИ",
                "description": "Лосось, авокадо, краб-микс, сыр, соус «Ажи-маракуйя», тобико, кунжут, 6 шт.",
                "price": 455,
                "image": tanukiFor
            },
            {
                "id": "tn05",
                "name": "КАЛИФОРНИЯ БЛЭК",
                "description": "Креветка, краб-микс, сыр, тобико, микс соусов, кунжут, 6 шт.",
                "price": 455,
                "image": tanukiFive
            },
            {
                "id": "tn06",
                "name": "ТАНУКИ",
                "description": "Креветка, снежный краб, гуакамоле, сыр, огурец, микс соусов, тобико, кунжут, 6 шт.",
                "price": 649,
                "image": tanukiSix
            }
        ]
}

export default mainDB