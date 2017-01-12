import { RawData } from '../../../types';
import { space, TypeId, id } from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.radio, TypeId.analogTime];
import _ = require("underscore");
const title = 'What time is it?';
const info = 'Choose the correct time.'

const lessons: RawData[] = [
    {   
        id: id(common), title, info, explenation,
        name: "11:50",
        correct: ["It's ten to twelve."],
        incorrect: ["It's ten past eleven.", "It's ten past twelve."],
    }, {
        id: id(common), title, info, explenation,
        name: "06:15",
        correct: ["It's a quarter past six."],
        incorrect: ["It's half past three.", "It's a quarter to six."],
    }, {
        id: id(common), title, info, explenation,
        name: "03:55",
        correct: ["It's five to four."],
        incorrect: ["It's five past three.", "It's five past four."],
    }, {
        id: id(common), title, info, explenation,
        name: "08:40",
        correct: ["It's twenty to nine."],
        incorrect: ["It's nine to twenty.", "It's twenty past eight."],
    }, {
        id: id(common), title, info, explenation,
        name: "04:45",
        correct: ["It's a quarter to five."],
        incorrect: ["It's a quarter past five.", "It's a quarter past four."],
    }, {
        id: id(common), title, info, explenation,
        name: "02:25",
        correct: ["It's twenty-five past two."],
        incorrect: ["It's twenty-five to two.", "It's half past two."],
    }, {
        id: id(common), title, info, explenation,
        name: "01:10",
        correct: ["It's ten past one."],
        incorrect: ["It's one to ten.", "It's one past ten.", "It's ten to one."],
    }, {
        id: id(common), title, info, explenation,
        name: "01:30",
        correct: ["It's half past one."],
        incorrect: ["It's one past half.", "It's half to one.", "It's one to half."],
    }, {
        id: id(common), title, info, explenation,
        name: "01:45",
        correct: ["It's quarter to two."],
        incorrect: ["It's quarter past two.", "It's quarter past one.", "It's quarter to one."],
    }, {
        id: id(common), title, info, explenation,
        name: "02:00",
        correct: ["It's two o'clock."],
        incorrect: ["It's o'clock past two.", "It's twelve past two.", "It's two past twelve."],
    }, {
        id: id(common), title, info, explenation,
        name: "02:21",
        correct: ["It's twenty-one past two."],
        incorrect: ["It's twenty-one to two.", "It's two past twenty-one.", "It's two to twenty-one."],
    }, {
        id: id(common), title, info, explenation,
        name: "03:05",
        correct: ["It's five past three."],
        incorrect: ["It's three to five.", "It's three past five.", "It's five to three."],
    }, {
        id: id(common), title, info, explenation,
        name: "04:20",
        correct: ["It's twenty past four."],
        incorrect: ["It's four past twenty.", "It's twenty to four.", "It's twenty to five."],
    }, {
        id: id(common), title, info, explenation,
        name: "05:35",
        correct: ["It's twenty-five to six."],
        incorrect: ["It's twenty-five past six.", "It's twenty-five past five.", "It's twenty-five to five."],
    }, {
        id: id(common), title, info, explenation,
        name: "04:50",
        correct: ["It's ten to five."],
        incorrect: ["It's ten past five.", "It's five to six.", "It's five past ten."],
    }, {
        id: id(common), title, info, explenation,
        name: "08:15",
        correct: ["It's quarter past eight."],
        incorrect: ["It's quarter to eight.", "It's eight past fifteen.", "It's quarter to fifteen."],
    }, {
        id: id(common), title, info, explenation,
        name: "05:00",
        correct: ["It's five o'clock."],
        incorrect: ["It's five past twelve.", "It's zero past five.", "It's five past zero.", "It's zero o'clock."],
    }, {
        id: id(common), title, info, explenation,
        name: "06:30",
        correct: ["It's half past six."],
        incorrect: ["It's six o'clock.", "It's half past to six.", "It's half past seven."],
    }, {
        id: id(common), title, info, explenation,
        name: "06:40",
        correct: ["It's twenty to seven."],
        incorrect: ["It's twenty past seven.", "It's twenty to six.", "It's twenty past six."],
    }, {
        id: id(common), title, info, explenation,
        name: "07:55",
        correct: ["It's five to eight."],
        incorrect: ["It's five to seven.", "It's eight past five.", "It's five past eight."],
    },

] 


export {
    title,
    lessons,
}
