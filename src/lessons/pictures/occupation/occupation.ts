import { RawData } from '../../../types';
import _ = require('underscore');
import { space, TypeId, id, getRest } from '../../helper/constants';
import explenation = require('./explenation');

const common = [TypeId.fourPictures];
const s = 'img/occupations/';
const a = {
    actor: s + 'actor.png',
    architect: s + 'architect.png',
    babysitter: s + 'babysitter.png',
    baker: s + 'baker.png',
    bartender: s + 'bartender.png',
    beekeeper: s + 'beekeeper.png',
    bodybuilder: s + 'bodybuilder.png',
    bricklayer: s + 'bricklayer.png',
    bus_driver: s + 'bus_driver.png',
    businessman: s + 'businessman.png',
    butcher: s + 'butcher.png',
    cameraman: s + 'cameraman.png',
    chef: s + 'chef.png',
    cleaner: s + 'cleaner.png',
    conductor: s + 'conductor.png',
    construction_worker: s + 'construction_worker.png',
    cowboy: s + 'cowboy.png',
    dancer: s + 'dancer.png',
    engineer: s + 'engineer.png',
    farmer: s + 'farmer.png',
    firefighter: s + 'firefighter.png',
    fisherman: s + 'fisherman.png',
    footballer: s + 'footballer.png',
    gardener: s + 'gardener.png',
    bodyguard: s + 'bodyguard.png',
    hunter: s + 'hunter.png',
    journalist: s + 'journalist.png',
    lifeguard: s + 'lifeguard.png',
    lumberman: s + 'lumberman.png',
    massagist: s + 'massagist.png',
    nurse: s + 'nurse.png',
    photographer: s + 'photographer.png',
    plumber: s + 'plumber.png',
    politician: s + 'politician.png',
    priest: s + 'priest.png',
    programmer: s + 'programmer.png',
    scientist: s + 'scientist.png',
    shop_assistant: s + 'shop_assistant.png',
    singer: s + 'singer.png',
    sportsman: s + 'sportsman.png',
    student: s + 'student.png',
    thief: s + 'thief.png',
    stunt_performer: s + 'stunt_performer.png',
    waiter: s + 'waiter.png',
    welder: s + 'welder.png',
    writer: s + 'writer.png',
}

const title = 'Occupations';
const info = 'Choose the correct picture.'

const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation,
        name: 'Architect',
        correct: [a.architect],
        incorrect: getRest(a, [a.architect]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Waiter',
        correct: [a.waiter],
        incorrect: getRest(a, [a.waiter]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Babysitter',
        correct: [a.babysitter],
        incorrect: getRest(a, [a.babysitter]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Bartender',
        correct: [a.bartender],
        incorrect: getRest(a, [a.bartender]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Bus driver',
        correct: [a.bus_driver],
        incorrect: getRest(a, [a.bus_driver]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Cameraman',
        correct: [a.cameraman],
        incorrect: getRest(a, [a.cameraman, a.photographer]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Scientist',
        correct: [a.scientist],
        incorrect: getRest(a, [a.scientist]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Cleaner',
        correct: [a.cleaner],
        incorrect: getRest(a, [a.cleaner]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Conductor',
        correct: [a.conductor],
        incorrect: getRest(a, [a.conductor]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Construction worker',
        correct: [a.construction_worker],
        incorrect: getRest(a, [a.construction_worker, a.bricklayer, a.architect, a.engineer]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Actor',
        correct: [a.actor],
        incorrect: getRest(a, [a.actor]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Cowboy',
        correct: [a.cowboy],
        incorrect: getRest(a, [a.cowboy]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Bodybuilder',
        correct: [a.bodybuilder],
        incorrect: getRest(a, [a.bodybuilder]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Dancer',
        correct: [a.dancer],
        incorrect: getRest(a, [a.dancer]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Firefighter',
        correct: [a.firefighter],
        incorrect: getRest(a, [a.firefighter]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Baker',
        correct: [a.baker],
        incorrect: getRest(a, [a.baker, a.chef]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Bricklayer',
        correct: [a.bricklayer],
        incorrect: getRest(a, [a.bricklayer, a.construction_worker, a.architect, a.engineer]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Farmer',
        correct: [a.farmer],
        incorrect: getRest(a, [a.farmer]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Engineer',
        correct: [a.engineer],
        incorrect: getRest(a, [a.engineer, a.conductor, a.bricklayer, a.engineer, a.architect]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Singer',
        correct: [a.singer],
        incorrect: getRest(a, [a.singer]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Chef',
        correct: [a.chef],
        incorrect: getRest(a, [a.chef, a.baker]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Footballer',
        correct: [a.footballer],
        incorrect: getRest(a, [a.footballer]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Massagist',
        correct: [a.massagist],
        incorrect: getRest(a, [a.massagist]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Writer',
        correct: [a.writer],
        incorrect: getRest(a, [a.writer]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Bodyguard',
        correct: [a.bodyguard],
        incorrect: getRest(a, [a.bodyguard]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Nurse',
        correct: [a.nurse],
        incorrect: getRest(a, [a.nurse]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Gardener',
        correct: [a.gardener],
        incorrect: getRest(a, [a.gardener]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Fisherman',
        correct: [a.fisherman],
        incorrect: getRest(a, [a.fisherman]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Journalist',
        correct: [a.journalist],
        incorrect: getRest(a, [a.journalist]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Hunter',
        correct: [a.hunter],
        incorrect: getRest(a, [a.hunter]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Programmer',
        correct: [a.programmer],
        incorrect: getRest(a, [a.programmer]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Lifeguard',
        correct: [a.lifeguard],
        incorrect: getRest(a, [a.lifeguard]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Welder',
        correct: [a.welder],
        incorrect: getRest(a, [a.welder]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Lumberman',
        correct: [a.lumberman],
        incorrect: getRest(a, [a.lumberman]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Photographer',
        correct: [a.photographer],
        incorrect: getRest(a, [a.photographer, a.cameraman]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Thief',
        correct: [a.thief],
        incorrect: getRest(a, [a.thief]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Shop assistant',
        correct: [a.shop_assistant],
        incorrect: getRest(a, [a.shop_assistant]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Plumber',
        correct: [a.plumber],
        incorrect: getRest(a, [a.plumber]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Priest',
        correct: [a.priest],
        incorrect: getRest(a, [a.priest]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Stunt performer',
        correct: [a.stunt_performer],
        incorrect: getRest(a, [a.stunt_performer]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Student',
        correct: [a.student],
        incorrect: getRest(a, [a.student]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Businessman',
        correct: [a.businessman],
        incorrect: getRest(a, [a.businessman]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Politician',
        correct: [a.politician],
        incorrect: getRest(a, [a.politician]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Sportsman',
        correct: [a.sportsman],
        incorrect: getRest(a, [a.sportsman, a.footballer, a.dancer]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Beekeeper',
        correct: [a.beekeeper],
        incorrect: getRest(a, [a.beekeeper]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Butcher',
        correct: [a.butcher],
        incorrect: getRest(a, [a.butcher]),
    }

]


export {
    title,
    lessons
}