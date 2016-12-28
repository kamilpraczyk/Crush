import { RawData } from '../../../types';
import { TypeId, id } from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.multiRadio, TypeId.allCapital];
const title = 'Synonyms S-W';
const info = 'Find 3 synonymms for a word:';

const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation,
        name: "Slow",
        correct: ["Behind", "Unhurried", "Tedious"],
        incorrect: ["Catch", "Fixed", "Hold", "Secure", "Select"]
    }, {
        id: id(common), title, info, explenation,
        name: "Stop",
        correct: ["End", "Finish", "Discontinue"],
        incorrect: ["Regular", "Tedious", "Late", "Declare", "Expose"]
    }, {
        id: id(common), title, info, explenation,
        name: "Story",
        correct: ["Legend", "Tale", "Myth"],
        incorrect: ["Hold", "Capture", "Definite", "Tip", "Late"]
    }, {
        id: id(common), title, info, explenation,
        name: "Strange",
        correct: ["Odd", "Unusual", "Peculiar"],
        incorrect: ["Choose", "Pause", "Chronicle", "Awful", "Valid"]
    }, {
        id: id(common), title, info, explenation,
        name: "Strong",
        correct: ["Powerful", "Intense", "Solid"],
        incorrect: ["Select", "Horrible", "Hideous", "Unpleasant", "Frail"]
    }, {
        id: id(common), title, info, explenation,
        name: "Summit",
        correct: ["Peak", "Top", "Zenith"],
        incorrect: ["Catch", "Inform", "Declare", "Pick", "Select"]
    }, {
        id: id(common), title, info, explenation,
        name: "Steady",
        correct: ["Constant", "Regular", "Fixed"],
        incorrect: ["Select", "Reveal", "Frightful", "Inaccurate", "Utilize"]
    }, {
        id: id(common), title, info, explenation,
        name: "Sure",
        correct: ["Certain", "Positive", "Reliable"],
        incorrect: ["Spend", "Peak", "Uncommon", "Tale", "Discontinue"]
    }, {
        id: id(common), title, info, explenation,
        name: "Take",
        correct: ["Hold", "Capture", "Select"],
        incorrect: ["Miserable", "Tedious", "Quit", "End", "Discontinue"]
    }, {
        id: id(common), title, info, explenation,
        name: "Tell",
        correct: ["Disclose", "Reveal", "Uncover"],
        incorrect: ["Unproven", "Dubious", "Questionable", "Doubtful", "Expend"]
    }, {
        id: id(common), title, info, explenation,
        name: "Terrible",
        correct: ["Awful", "Horrible", "Frightful"],
        incorrect: ["Pick", "Expose", "Expend", "Consume", "Fragile"]
    }, {
        id: id(common), title, info, explenation,
        name: "Think",
        correct: ["Consider", "Assume", "Believe"],
        incorrect: ["Melancholy", "Sad", "Feeble", "Frail", "Consume"]
    }, {
        id: id(common), title, info, explenation,
        name: "Trouble",
        correct: ["Worry", "Distress", "Concern"],
        incorrect: ["Assume", "Awful", "Pick", "Bad", "Uncover"]
    }, {
        id: id(common), title, info, explenation,
        name: "True",
        correct: ["Right", "Accurate", "Genuine"],
        incorrect: ["Worry", "Unhurried", "Halt", "Assume", "Believe"]
    }, {
        id: id(common), title, info, explenation,
        name: "Ugly",
        correct: ["Hideous", "Unpleasant", "Gross"],
        incorrect: ["Stable", "Unhurried", "Late", "Constant", "Proper"]
    }, {
        id: id(common), title, info, explenation,
        name: "Unhappy",
        correct: ["Miserable", "Unfortunate", "Depressed"],
        incorrect: ["Believe", "Worry", "Regular", "Positive", "Secure"]
    }, {
        id: id(common), title, info, explenation,
        name: "Uncertain",
        correct: ["Doubtful", "Questionable", "Dubious"],
        incorrect: ["Improper", "Frail", "Shaky", "Utilize", "Gloomy"]
    }, {
        id: id(common), title, info, explenation,
        name: "Use",
        correct: ["Spend", "Expend", "Consume"],
        incorrect: ["Inaccurate", "Doubtful", "Far-fetched", "Consider", "Reflect"]
    }, {
        id: id(common), title, info, explenation,
        name: "Weak",
        correct: ["Frail", "Fragile", "Feeble"],
        incorrect: ["Concern", "Genuine", "Unpleasant", "Horrible", "Depressed"]
    }, {
        id: id(common), title, info, explenation,
        name: "Wrong",
        correct: ["Incorrect", "Mistaken", "Unsuitable"],
        incorrect: ["Tale", "Fixed", "Inform", "Declare", "Worry"]
    }
]

export {
    title,
    lessons,
}
