import { RawData } from '../../../types';
import _ = require('underscore');
import { space, TypeId, id, getRest } from '../../helper/constants';
import explenation = require('./explenation');

const common = [TypeId.fourPictures];
const s = 'img/clothing/';
const a = {
    backpack: s + 'backpack.png',
    baseball_cap: s + 'baseball_cap.png',
    belt: s + 'belt.png',
    boots: s + 'boots.png',
    clothes_button: s + 'clothes_button.png',
    shirt: s + 'shirt.png',
    glasses: s + 'glasses.png',
    gloves: s + 'gloves.png',
    hat: s + 'hat.png',
    jacket: s + 'jacket.png',
    jeans: s + 'jeans.png',
    luggage: s + 'luggage.png',
    men_shoes: s + 'men_shoes.png',
    polo_shirt: s + 'polo_shirt.png',
    sandals: s + 'sandals.png',
    socks: s + 'socks.png',
    suit: s + 'suit.png',
    suitcase: s + 'suitcase.png',
    t_shirt: s + 't_shirt.png',
    tie: s + 'tie.png',
    wallet: s + 'wallet.png',
    women_bag: s + 'women_bag.png',
    women_shoes: s + 'women_shoes.png',
}
const title = 'Clothing';
const info = 'Choose the correct clothing.'

const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation,
        name: 'Backpack', correct: [a.backpack], incorrect: getRest(a, [a.backpack]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Baseball cap', correct: [a.baseball_cap], incorrect: getRest(a, [a.baseball_cap]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Belt', correct: [a.belt], incorrect: getRest(a, [a.belt]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Boots', correct: [a.boots], incorrect: getRest(a, [a.boots]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Clothes button', correct: [a.clothes_button], incorrect: getRest(a, [a.clothes_button]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Glasses', correct: [a.glasses], incorrect: getRest(a, [a.glasses]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Gloves', correct: [a.gloves], incorrect: getRest(a, [a.gloves]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Hat', correct: [a.hat], incorrect: getRest(a, [a.hat]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Jacket', correct: [a.jacket], incorrect: getRest(a, [a.jacket]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Jeans', correct: [a.jeans], incorrect: getRest(a, [a.jeans]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Luggage', correct: [a.luggage], incorrect: getRest(a, [a.luggage]),
    }, {
        id: id(common), title, info, explenation,
        name: "Mens' shoes", correct: [a.men_shoes], incorrect: getRest(a, [a.men_shoes]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Polo shirt', correct: [a.polo_shirt], incorrect: getRest(a, [a.polo_shirt]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Sandals', correct: [a.sandals], incorrect: getRest(a, [a.sandals]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Shirt', correct: [a.shirt], incorrect: getRest(a, [a.shirt]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Socks', correct: [a.socks], incorrect: getRest(a, [a.socks]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Suit', correct: [a.suit], incorrect: getRest(a, [a.suit]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Suitcase', correct: [a.suitcase], incorrect: getRest(a, [a.suitcase]),
    }, {
        id: id(common), title, info, explenation,
        name: 'T- Shirt', correct: [a.t_shirt], incorrect: getRest(a, [a.t_shirt]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Tie', correct: [a.tie], incorrect: getRest(a, [a.tie]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Wallet', correct: [a.wallet], incorrect: getRest(a, [a.wallet]),
    }, {
        id: id(common), title, info, explenation,
        name: "Womens' bag", correct: [a.women_bag], incorrect: getRest(a, [a.women_bag]),
    }, {
        id: id(common), title, info, explenation,
        name: "Womens' shoes", correct: [a.women_shoes], incorrect: getRest(a, [a.women_shoes]),
    }
]

export {
    title,
    lessons
}