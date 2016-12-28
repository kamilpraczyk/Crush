import { RawData } from '../../../types';
import _ = require('underscore');
import { space, TypeId, id, getRest } from '../../helper/constants';
import explenation = require('./explenation');

const common = [TypeId.fourPictures];
const s = 'img/animals/';
const a = {
    arctic_fox: s + 'arctic_fox.png',
    bear: s + 'bear.png',
    camel: s + 'camel.png',
    cat: s + 'cat.png',
    cheetah: s + 'cheetah.png',
    chicken: s + 'chicken.png',
    cow: s + 'cow.png',
    crocodile: s + 'crocodile.png',
    deer: s + 'deer.png',
    dog: s + 'dog.png',
    dolphin: s + 'dolphin.png',
    duck: s + 'duck.png',
    eagle: s + 'eagle.png',
    elephant: s + 'elephant.png',
    ferret: s + 'ferret.png',
    flamingo: s + 'flamingo.png',
    fox: s + 'fox.png',
    frog: s + 'frog.png',
    giraffe: s + 'giraffe.png',
    gold_fish: s + 'gold_fish.png',
    goat: s + 'goat.png',
    gorilla: s + 'gorilla.png',
    horse: s + 'horse.png',
    leopard: s + 'leopard.png',
    lion: s + 'lion.png',
    lobster: s + 'lobster.png',
    monkey: s + 'monkey.png',
    mouse: s + 'mouse.png',
    parrot: s + 'parrot.png',
    penguin: s + 'penguin.png',
    pig: s + 'pig.png',
    rabbit: s + 'rabbit.png',
    raccoon: s + 'raccoon.png',
    rat: s + 'rat.png',
    shark: s + 'shark.png',
    sheep: s + 'sheep.png',
    shrimp: s + 'shrimp.png',
    snail: s + 'snail.png',
    snake: s + 'snake.png',
    squirrel: s + 'squirrel.png',
    tiger: s + 'tiger.png',
    wolf: s + 'wolf.png',
    zebra: s + 'zebra.png',
}

const title = 'Animals';
const info = 'Choose the correct animal.'

const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation,
        name: 'Arctic fox',
        correct: [a.arctic_fox],
        incorrect: getRest(a, [a.arctic_fox]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Bear',
        correct: [a.bear],
        incorrect: getRest(a, [a.bear]),
    }, {
        id: id(common), title, info, explenation,
        name: "Camel",
        correct: [a.camel],
        incorrect: getRest(a, [a.camel]),
    }, {
        id: id(common), title, info, explenation,
        name: "Cat",
        correct: [a.cat],
        incorrect: getRest(a, [a.cat, a.lion, a.cheetah, a.leopard, a.tiger]),
    }, {
        id: id(common), title, info, explenation,
        name: "Cheetah",
        correct: [a.cheetah],
        incorrect: getRest(a, [a.cheetah]),
    }, {
        id: id(common), title, info, explenation,
        name: "Chicken",
        correct: [a.chicken],
        incorrect: getRest(a, [a.chicken]),
    }, {
        id: id(common), title, info, explenation,
        name: "Cow",
        correct: [a.cow],
        incorrect: getRest(a, [a.cow]),
    }, {
        id: id(common), title, info, explenation,
        name: "Crocodile",
        correct: [a.crocodile],
        incorrect: getRest(a, [a.crocodile]),
    }, {
        id: id(common), title, info, explenation,
        name: "Deer",
        correct: [a.deer],
        incorrect: getRest(a, [a.deer]),
    }, {
        id: id(common), title, info, explenation,
        name: "Dog",
        correct: [a.dog],
        incorrect: getRest(a, [a.dog]),
    }, {
        id: id(common), title, info, explenation,
        name: "Dolphin",
        correct: [a.dolphin],
        incorrect: getRest(a, [a.dolphin]),
    }, {
        id: id(common), title, info, explenation,
        name: "Duck",
        correct: [a.duck],
        incorrect: getRest(a, [a.duck]),
    }, {
        id: id(common), title, info, explenation,
        name: "Eagle",
        correct: [a.eagle],
        incorrect: getRest(a, [a.eagle]),
    }, {
        id: id(common), title, info, explenation,
        name: "Elephant",
        correct: [a.elephant],
        incorrect: getRest(a, [a.elephant]),
    }, {
        id: id(common), title, info, explenation,
        name: "Ferret",
        correct: [a.ferret],
        incorrect: getRest(a, [a.ferret]),
    }, {
        id: id(common), title, info, explenation,
        name: "Flamingo",
        correct: [a.flamingo],
        incorrect: getRest(a, [a.flamingo]),
    }, {
        id: id(common), title, info, explenation,
        name: "Fox",
        correct: [a.fox],
        incorrect: getRest(a, [a.fox, a.arctic_fox]),
    }, {
        id: id(common), title, info, explenation,
        name: "Frog",
        correct: [a.frog],
        incorrect: getRest(a, [a.frog]),
    }, {
        id: id(common), title, info, explenation,
        name: "Giraffe",
        correct: [a.giraffe],
        incorrect: getRest(a, [a.giraffe]),
    }, {
        id: id(common), title, info, explenation,
        name: "Gold fish",
        correct: [a.gold_fish],
        incorrect: getRest(a, [a.gold_fish]),
    }, {
        id: id(common), title, info, explenation,
        name: "Goat",
        correct: [a.goat],
        incorrect: getRest(a, [a.goat]),
    }, {
        id: id(common), title, info, explenation,
        name: "Gorilla",
        correct: [a.gorilla],
        incorrect: getRest(a, [a.gorilla]),
    }, {
        id: id(common), title, info, explenation,
        name: "Horse",
        correct: [a.horse],
        incorrect: getRest(a, [a.horse]),
    }, {
        id: id(common), title, info, explenation,
        name: "Leopard",
        correct: [a.leopard],
        incorrect: getRest(a, [a.leopard]),
    }, {
        id: id(common), title, info, explenation,
        name: "Lion",
        correct: [a.lion],
        incorrect: getRest(a, [a.lion]),
    }, {
        id: id(common), title, info, explenation,
        name: "Lobster",
        correct: [a.lobster],
        incorrect: getRest(a, [a.lobster]),
    }, {
        id: id(common), title, info, explenation,
        name: "Monkey",
        correct: [a.monkey],
        incorrect: getRest(a, [a.monkey]),
    }, {
        id: id(common), title, info, explenation,
        name: "Mouse",
        correct: [a.mouse],
        incorrect: getRest(a, [a.mouse, a.rat]),
    }, {
        id: id(common), title, info, explenation,
        name: "Parrot",
        correct: [a.parrot],
        incorrect: getRest(a, [a.parrot]),
    }, {
        id: id(common), title, info, explenation,
        name: "Penguin",
        correct: [a.penguin],
        incorrect: getRest(a, [a.penguin]),
    }, {
        id: id(common), title, info, explenation,
        name: "Pig",
        correct: [a.pig],
        incorrect: getRest(a, [a.pig]),
    }, {
        id: id(common), title, info, explenation,
        name: "Rabbit",
        correct: [a.rabbit],
        incorrect: getRest(a, [a.rabbit]),
    }, {
        id: id(common), title, info, explenation,
        name: "Raccoon",
        correct: [a.raccoon],
        incorrect: getRest(a, [a.raccoon]),
    }, {
        id: id(common), title, info, explenation,
        name: "Rat",
        correct: [a.rat],
        incorrect: getRest(a, [a.rat, a.mouse]),
    }, {
        id: id(common), title, info, explenation,
        name: "Shark",
        correct: [a.shark],
        incorrect: getRest(a, [a.shark]),
    }, {
        id: id(common), title, info, explenation,
        name: "Sheep",
        correct: [a.sheep],
        incorrect: getRest(a, [a.sheep]),
    }, {
        id: id(common), title, info, explenation,
        name: "Shrimp",
        correct: [a.shrimp],
        incorrect: getRest(a, [a.shrimp]),
    }, {
        id: id(common), title, info, explenation,
        name: "Snail",
        correct: [a.snail],
        incorrect: getRest(a, [a.snail]),
    }, {
        id: id(common), title, info, explenation,
        name: "Snake",
        correct: [a.snake],
        incorrect: getRest(a, [a.snake]),
    }, {
        id: id(common), title, info, explenation,
        name: "Squirrel",
        correct: [a.squirrel],
        incorrect: getRest(a, [a.squirrel]),
    }, {
        id: id(common), title, info, explenation,
        name: "Tiger",
        correct: [a.tiger],
        incorrect: getRest(a, [a.tiger]),
    }, {
        id: id(common), title, info, explenation,
        name: "Wolf",
        correct: [a.wolf],
        incorrect: getRest(a, [a.wolf]),
    }, {
        id: id(common), title, info, explenation,
        name: "Zebra",
        correct: [a.zebra],
        incorrect: getRest(a, [a.zebra]),
    }
]


export {
    title,
    lessons
}