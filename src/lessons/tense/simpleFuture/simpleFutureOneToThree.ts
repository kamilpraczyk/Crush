import { RawData } from '../../../types';
import { TypeId, id } from '../../helper/constants';
import explenation = require('./explenation');

const separator = " ";
const postfix = ".";
const common = [TypeId.oneTwoThree];
const title = "Simple Future Tense";
const info = 'Build the correct sentence in Simple Future Tense.';
const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I", "will", "go", "to", "the shops"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She", "will", "not", "be attending", "school today"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I will", "return", "in two", "hours"],
    }, {
        id: id(common), title, explenation, info, postfix: '',
        name: separator,
        correct: ["Will", "you", "go", "to the", "party?"],
    }, {
        id: id(common), title, explenation, info, postfix: '',
        name: separator,
        correct: ["What time", "will", "they", "arrive?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I will", "not", "go to", "the market", "tomorrow"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["It", "will", "be", "finished"],
    }, {
        id: id(common), title, explenation, info, postfix: '',
        name: separator,
        correct: ["Will", "it", "be", "finished?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["They", "will", "paint", "the fence", "white"],
    }, {
        id: id(common), title, explenation, info, postfix: '',
        name: separator,
        correct: ["When", "will", "it", "be", "cold?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["It will be", "very cold", "in the winter"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I will speak", "to my", "boss", "tomorrow"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She", "will finish", "her homework", "in five", "minutes"],
    }, {
        id: id(common), title, explenation, info, postfix: '',
        name: separator,
        correct: ["Will", "you", "marry", "me?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["It", "will", "rain", "tomorrow"],
    }, {
        id: id(common), title, explenation, info, postfix: '',
        name: separator,
        correct: ["Who", "will she", "dance", "with?"],
    }, {
        id: id(common), title, explenation, info, postfix: '',
        name: separator,
        correct: ["What", "shall I", "tell the boss", "about", "this money?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I", "will be", "at the station", "when you arrive"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["Our friend", "will", "not", "come with us"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["They", "will", "not", "stop"],
    }
] 
export {
    title,
    lessons
}
