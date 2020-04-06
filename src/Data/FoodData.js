export const foodItems = [
    {
        id: 1,
        name: 'Vegan pizza',
        img: '/img/vegan-pizza.jpg',
        section: 'Pizza'
    },
    {
        id: 2,
        name: 'Beef burger',
        img: '/img/burger.jpg',
        section: 'Sandwich'
    },
    {
        id: 3,
        name: 'Chicken burrito',
        img: '/img/burrito-chicken.jpg',
        section: 'Sandwich'
    },
    {
        id: 4,
        name: 'Chief burger',
        img: '/img/cheif-burger.jpg',
        section: 'Sandwich'
    },
    {
        id: 5,
        name: 'Portuguese pizza',
        img: '/img/egg-pizza.jpg',
        section: 'Pizza'
    },
    {
        id: 6,
        name: 'Hot dog',
        img: '/img/hoddog.jpg',
        section: 'Sandwich'
    },
    {
        id: 7,
        name: 'Burger&Fries',
        img: '/img/burger-potato.jpg',
        section: 'Sandwich'
    },
    {
        id: 8,
        name: 'Beer',
        img: '/img/beer.jpg',
        section: 'Drinks'
    },
    {
        id: 9,
        name: 'Cheese pizza',
        img: '/img/slice-pizza.jpg',
        section: 'Pizza'
    },
    {
        id: 10,
        name: 'Seafood pizza',
        img: '/img/shrimp-pizza.jpg',
        section: 'Pizza'
    },
    {
        id: 11,
        name: 'Buffalo wings',
        img: '/img/buffalo-wings.jpg',
        section: 'Sandwich'
    },
    {
        id: 12,
        name: 'Coffee',
        img: '/img/coffee.jpg',
        section: 'Drinks'
    },
    {
        id: 13,
        name: 'Tea',
        img: '/img/tea.jpg',
        section: 'Drinks'
    },
    {
        id: 14,
        name: 'Lemonade',
        img: '/img/lemonade.jpg',
        section: 'Drinks'
    },
];

export const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]) {
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});