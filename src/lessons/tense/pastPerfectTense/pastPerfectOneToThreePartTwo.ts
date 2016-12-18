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
    }
]
/*
Todo
She	had	given
I wish I had had enough courage to kiss her!
Had	they	arrived?
    Had they decided?

        If I had known you were ill, I would have visited you.
If she had studied hard, she would have passed the English language exam.
When I got home yesterday, my father had already cooked dinner.
I didn't want to go to the movies with my friends because I had seen the film already.

I was very tired as I hadn't slept well for several days.

Mary looked as if she had not slept for 48 hours.
John said that he had never eaten sushi before.
I thought I had sent her a birthday card, but I was wrong.
He told me he hadn't done his homework, but he was hoping to finish it on the bus.
I wish I had fixed my umberella.

If only I had known the answer to that question.

If only I had taken more food.I'm hungry now.
She looked as though she hadn't slept all night.
Mary had finished her homework before Mike came home.
Before I went to the park, I had finished my work.
I wish I hadn't done it!
The team had won
My sister had just left
*/
export {
    title,
    lessons,
}



