import { RawData } from '../../../types';
import { TypeId, id, capital, getNameFemale, getMonth, getNameMale, getCountry, getPossessiveNameMale, getNationalityAdj } from '../../helper/constants';
import explenation = require('./explenation');
import _ = require('underscore');

const separator = " ";
const postfix = ".";
const common = [TypeId.oneTwoThree];
const title = "Past Perfect Tense";
const info = 'Build the correct sentence in Past Perfect Tense.';
const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["They", "had not", "decided"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["He looked", "as though", "he hadn't", "slept all", "night"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameMale(), "had finished", "his homework", "before", getNameFemale() + " came back"]
    }, {
        id: id(common), title, explenation, info, postfix: '',
        name: separator,
        correct: ["I wish", "I had", "had", "enough courage", "to ask her!"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameMale(), "was very tired", "as he hadn't", "slept well for", "few days"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameMale(), "looked as if she", "had not", "slept for", "48 hours"]
    }, {
        id: id(common), title, explenation, info, postfix: '',
        name: separator,
        correct: ["I wish", "I had not", "done it!"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I wish", "I had", "fixed", "my umberella"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["The", "red team", "had", "won"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I thought", "I had", "sent her", "a birthday card,", "but I was wrong"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["When I got", "home yesterday,", "my wife", "had", "already cooked dinner"]
    }, {
        id: id(common), title, explenation, info, postfix: '',
        name: separator,
        correct: ["Had", "they", "arrived", "?"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["Our boss", "had", "just", "left"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["If", getNameFemale(), "had studied hard,", "she would have", "passed the exam"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["If only", "I had known", "the answer", "to that", "question"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["It had", "rained", "heavily", "last month"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["Had", "the film", "started", "before we reached", "cinema"]
    }, {
        id: id(common), title, explenation, info, postfix: '',
        name: separator,
        correct: ["Had", getNameFemale(), "visited", "a doctor", "?"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["We were", "too late. The", "train", "had", "left"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I thought", "I had met", getNameFemale(), "before,", "but I was wrong"]
    }
]

export {
    title,
    lessons
}



