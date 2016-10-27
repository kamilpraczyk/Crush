/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import {BoardFace, BoardFaces} from '../src/types';
import _ = require("underscore");
import {multi, space, capital, viewIds, displayIds } from '../src/lessons/helper/constants';
import {goThrough} from './goThrough';


describe('Capitalized -', () => {


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


                    if (!isCalitapizedWordAllowed(word)) {
                        const pWord = prevWord + ' ' + word;
                        if (!isCalitapizedWordAllowed(pWord)) {
                            if (capital.books.GameOfThrones.indexOf(pWord) === -1) {
                                throw Error('Word cannot be capitalized:' + word + ': words:' + words.toString());
                            }
                        }
                    }

                }
            }
        }
    }

    it('name - check capitalized', () => {
        goThrough((board: BoardFace) => {
            if (board.name) {
                const words = board.name.split(' ');
                checkCapitalizedWords(words);
            }
        });
    });
    it('correct - check capitalized', () => {
        goThrough((board: BoardFace) => {
            let words: string[] = []
            if (board.correct) {
                _.each(board.correct, (correct) => {
                    words = words.concat(correct.split(' '));
                });
                checkCapitalizedWords(words);
            }
        });
    });
    it('incorrect - check capitalized', () => {
        goThrough((board: BoardFace) => {
            let words: string[] = []
            //do not test radio
            if (board.incorrect && board.id.indexOf(viewIds.radio) === -1) {
                _.each(board.incorrect, (correct) => {
                    words = words.concat(correct.split(' '));
                });
                checkCapitalizedWords(words);
            }
        });
    });



});

