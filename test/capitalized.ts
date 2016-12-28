/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import _ = require("underscore");
import { multi, space, capital, isId } from '../src/lessons/helper/constants';
import { goThrough, mock } from './goThrough';


describe('Capitalized -', () => {

    beforeEach(() => {
        mock()
    });


    function isCalitapizedWordAllowed(word: string) {
        let allow = false;
        _.mapObject(capital, (category) => {
            _.mapObject(category, (capitalWord) => {
                if (capitalWord === word) {
                    allow = true;
                }
            });
        });
        return allow;

    };

    function checkCapitalizedFirstLetter(words: string[]) {
        let word: string = null
        for (let index = 0; index < words.length; index++) {

            word = words[index];
            if (word[0] !== word[0].toUpperCase()) {
                throw Error('Word cannot be lowercase:' + word + ': words:' + words.toString());
            }
        }
    }


    function checkCapitalizedWords(words: string[]) {
        let word: string = null
        for (let index = 0; index < words.length; index++) {

            word = words[index];
            if (index && word && /[A-Z]/.test(word[0])) {
                let prevWord = words[index - 1];
                prevWord = prevWord.replace(' ', '');
                if (!(prevWord.indexOf('?') !== -1 || prevWord.indexOf('.') !== -1 || prevWord.indexOf('!') !== -1)) {
                    word = word.replace('.', '').replace('?', '').replace('!', '.').replace(',', '').replace(' ', '').replace('"', '');

                    //combine folowing capital words
                    while ((!(words[index].indexOf('?') !== -1 || words[index].indexOf('.') !== -1 || words[index].indexOf('!') !== -1)) && /[A-Z]/.test(words[index + 1]) === true) {
                        let nextWord = words[index + 1];
                        nextWord = nextWord.replace('.', '').replace('?', '').replace('!', '.').replace(',', '').replace(' ', '').replace('"', '');
                        word = word + ' ' + nextWord;
                        index++;
                    }

                }
            }
        }
    }

    it('name - check capitalized', () => {
        goThrough(data => {
            if (data.name) {
                const words = data.name.split(' ');
                checkCapitalizedWords(words);
            }
        });
    });

    function getCorrectCapitalExeptions() {
        return _.values(capital.books);
    }
    it('correct - check capitalized', () => {
        goThrough(data => {
            let words: string[] = []
            if (data.correct) {
                if (isId.isAllCapitalized(data.id)) {
                    checkCapitalizedFirstLetter(data.correct);
                } else {
                    _.each(data.correct, correct => {
                        if (!_.contains(getCorrectCapitalExeptions(), correct)) {
                            words = words.concat(correct.split(' '));
                        }
                    });

                    checkCapitalizedWords(words);
                }
            }
        });
    });
    it('incorrect - check capitalized', () => {
        goThrough(data => {
            let words: string[] = []
            //do not test radio
            if (data.incorrect) {
                if (isId.isAllCapitalized(data.id)) {
                    checkCapitalizedFirstLetter(data.incorrect);
                } else if (!isId.isRadio(data.id)) {//TODO test radio
                    _.each(data.incorrect, correct => {
                        words = words.concat(correct.split(' '));
                    });
                    checkCapitalizedWords(words);
                }
            }

        });
    });



});

