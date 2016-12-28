import { RawData } from '../../../types';
import { TypeId, id } from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.multiRadio, TypeId.allCapital];
const title = 'Synonyms D-F';
const info = 'Find 3 synonymms for a word:';

const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation,
        name: "Decide",
        correct: ["Determine", "Choose", "Resolve"],
        incorrect: ["Portray", "Enjoyable", "Demolish", "Uninteresting"],
    }, {
        id: id(common), title, info, explenation,
        name: "Definite",
        correct: ["Certain", "Sure", "Positive"],
        incorrect: ["Tedious", "Fake", "Deceptive", "Appetizing", "Picture"],
    }, {
        id: id(common), title, info, explenation,
        name: "Delicious",
        correct: ["Delectable", "Enjoyable", "Delightful"],
        incorrect: ["Keen", "Alive to", "Settle", "Clear", "Waste"],
    }, {
        id: id(common), title, info, explenation,
        name: "Describe",
        correct: ["Portray", "Picture", "Characterize"],
        incorrect: ["Enthusiastic", "Like", "Deceptive", "Certain", "Clear"],
    }, {
        id: id(common), title, info, explenation,
        name: "Destroy",
        correct: ["Ruin", "Demolish", "Extinguish"],
        incorrect: ["Eager", "Interested", "Elaborate", "Clarify", "Renowned"],
    }, {
        id: id(common), title, info, explenation,
        name: "Difference",
        correct: ["Disagreement", "Contrast", "Incompatibility"],
        incorrect: ["Boring", "Justify", "Impartial", "Resolve", "Anxiety"],
    }, {
        id: id(common), title, info, explenation,
        name: "Do",
        correct: ["Execute", "Carry out", "Accomplish"],
        incorrect: ["Discontinuance", "Delightful", "Relate", "Certain", "Ruin"],
    }, {
        id: id(common), title, info, explenation,
        name: "Dull",
        correct: ["Boring", "Uninteresting", "Tedious"],
        incorrect: ["Involved", "Untrue", "Resolve", "Waste", "Plump"],
    }, {
        id: id(common), title, info, explenation,
        name: "Eager",
        correct: ["Keen", "Enthusiastic", "Interested"],
        incorrect: ["Halt", "Fake", "Delightful", "Appetizing", "Choose"],
    }, {
        id: id(common), title, info, explenation,
        name: "End",
        correct: ["Stop", "Finish", "Terminate"],
        incorrect: ["Fraudulent", "Untrue", "Picture", "Chubby", "Anxiety"],
    }, {
        id: id(common), title, info, explenation,
        name: "Enjoy",
        correct: ["Appreciate", "Delight in", "Like"],
        incorrect: ["Close", "Relate", "Settle", "Ruin", "Apprehension"],
    }, {
        id: id(common), title, info, explenation,
        name: "Explain",
        correct: ["Elaborate", "Clarify", "Define"],
        incorrect: ["Terminate", "Choose", "Waste", "Contrast", "Chubby"],
    }, {
        id: id(common), title, info, explenation,
        name: "Fair",
        correct: ["Just", "Impartial", "Honest"],
        incorrect: ["Keen", "End", "Clarify", "Interpret", "Certain"],
    }, {
        id: id(common), title, info, explenation,
        name: "Fall",
        correct: ["Drop", "Plunge", "Descend"],
        incorrect: ["Impartial", "Objective", "Unbiased", "Relish", "Renowned"],
    }, {
        id: id(common), title, info, explenation,
        name: "False",
        correct: ["Fake", "Fraudulent", "Deceptive"],
        incorrect: ["Involved", "Elaborate", "Appetizing", "Settle", "Clear"],
    }, {
        id: id(common), title, info, explenation,
        name: "Famous",
        correct: ["Well-known", "Renowned", "Noted"],
        incorrect: ["Unprejudiced", "Fraudulent", "Enjoyable", "Relate", "Interpret"],
    }, {
        id: id(common), title, info, explenation,
        name: "Fast",
        correct: ["Quick", "Rapid", "Speedy"],
        incorrect: ["Alive to", "Enthusiastic", "Unprejudiced", "Renowned", "Noted"],
    }, {
        id: id(common), title, info, explenation,
        name: "Fat",
        correct: ["Chubby", "Chunky", "Bulky"],
        incorrect: ["Unprejudiced", "Justify", "Plunge", "Hasty", "Involved"],
    }, {
        id: id(common), title, info, explenation,
        name: "Fear",
        correct: ["Fright", "Panic", "Horror"],
        incorrect: ["Deceptive", "Tumble", "Quickly", "Plump", "Untrue"],
    }, {
        id: id(common), title, info, explenation,
        name: "Funny",
        correct: ["Amusing", "Humorous", "Laughable"],
        incorrect: ["Terror", "Chunky", "Speedy", "Famed", "Fake"],
    }
]

export {
    title,
    lessons,
}
