export function formatPrice(price) {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export const foodItems = [
    {
        id: 1,
        name: 'Vegan pizza',
        img: '/img/vegan-pizza.jpg',
        section: 'Pizza',
        price: 4.5
    },
    {
        id: 2,
        name: 'Beef burger',
        img: '/img/burger.jpg',
        section: 'Sandwich',
        price: 2.5
    },
    {
        id: 3,
        name: 'Chicken burrito',
        img: '/img/burrito-chicken.jpg',
        section: 'Sandwich',
        price: 2
    },
    {
        id: 4,
        name: 'Chief burger',
        img: '/img/cheif-burger.jpg',
        section: 'Sandwich',
        price: 5
    },
    {
        id: 5,
        name: 'Portuguese pizza',
        img: '/img/egg-pizza.jpg',
        section: 'Pizza',
        price: 3
    },
    {
        id: 6,
        name: 'Hot dog',
        img: '/img/hoddog.jpg',
        section: 'Sandwich',
        price: 1.5
    },
    {
        id: 7,
        name: 'Burger&Fries',
        img: '/img/burger-potato.jpg',
        section: 'Sandwich',
        price: 3
    },
    {
        id: 8,
        name: 'Beer',
        img: '/img/beer.jpg',
        section: 'Drinks',
        price: 2
    },
    {
        id: 9,
        name: 'Cheese pizza',
        img: '/img/slice-pizza.jpg',
        section: 'Pizza',
        price: 4.5
    },
    {
        id: 10,
        name: 'Seafood pizza',
        img: '/img/shrimp-pizza.jpg',
        section: 'Pizza',
        price: 6
    },
    {
        id: 11,
        name: 'Buffalo wings',
        img: '/img/buffalo-wings.jpg',
        section: 'Sandwich',
        price: 3
    },
    {
        id: 12,
        name: 'Coffee',
        img: '/img/coffee.jpg',
        section: 'Drinks',
        price: 1.7
    },
    {
        id: 13,
        name: 'Tea',
        img: '/img/tea.jpg',
        section: 'Drinks',
        price: 1.2
    },
    {
        id: 14,
        name: 'Lemonade',
        img: '/img/lemonade.jpg',
        section: 'Drinks',
        price: 1.3
    },
    {
        id: 15,
        name: 'Soda',
        section: 'Drinks',
        price: 1,
        choices: ['Coke','Sprite','Root Beer']
    },
];

export const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]) {
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});