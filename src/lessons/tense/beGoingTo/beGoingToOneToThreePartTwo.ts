import { RawData } from '../../../types';
import { space, TypeId, id, capital, getNameFemale, getNameMale, getCountry, getPossessiveNameMale, getCity } from '../../helper/constants';
import explenation = require('./explenation');
import _ = require('underscore');

const separator = " ";
const postfix = ".";
const common = [TypeId.oneTwoThree];
const title = "Be going to";
const info = 'Build the correct sentence using "be going to" form.';
const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I'm", "going to be", "an actor", "when I grow up"],
    },
] //TODO


/*
She is not going to spend her vacation in Hawaii.

B: Sue is going to make John's birthday cake.
You are going to be sick if you eat that. (Positive sentence)
Are you going to be sick if you eat that? (Question)
past:

It was going to rain but suddenly the sun appeared.
We were going to buy a new TV but then we changed our minds.
You were going to be my bridesmaid but then you slept with my fiancée.
 */

export {
    title,
    lessons,
}



