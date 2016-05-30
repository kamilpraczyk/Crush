/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import {BoardFace, BoardFaces} from '../src/lessons/interface';
import {lessons} from '../src/lessons/lessons';
import _ = require("underscore");
import {multi, space, capital, viewIds } from '../src/lessons/helper/constants';


describe('Test -', () => {
    describe('Lessons -', () => {

        beforeEach(function () {

        });

        function goThrough(test: (board: BoardFace) => void) {
            _.mapObject(lessons, (boards) => {
                _.each(boards.lessons, (board) => {
                    test(board);
                });
            });
        }


        it('should contains correct answers', () => {
            goThrough((board: BoardFace) => {
                if (board.correct) {
                    expect(board.correct.length).to.be.greaterThan(0);
                }
            });
        });

        it('should contains incorrect answers', () => {
            goThrough((board: BoardFace) => {
                if (board.incorrect) {
                    expect(board.incorrect.length).to.be.greaterThan(0);
                }
            });
        });

        it('should have no ".?!" at the end of sentence if postfix is "." ', () => {
            goThrough((board: BoardFace) => {
                if (board.postfix === ".") {
                    const char = _.last(_.last(board.correct));
                    if (char === '.' || char === '?' || char === '!') {
                        console.log('Error', board.correct);
                    }
                    expect(char).to.not.eql('.');
                    expect(char).to.not.eql('?');
                    expect(char).to.not.eql('!');
                }
            });
        });

        it('should have no ".?!" at the end of sentence if postfix is "?" ', () => {
            goThrough((board: BoardFace) => {
                if (board.postfix === "?") {
                    const char = _.last(_.last(board.correct));
                    if (char === '.' || char === '?' || char === '!') {
                        console.log('Error', board.correct);
                    }
                    expect(char).to.not.eql('.');
                    expect(char).to.not.eql('?');
                    expect(char).to.not.eql('!');
                }
            });
        });

        it('should have no ".?!" at the end of sentence if postfix is "!" ', () => {
            goThrough((board: BoardFace) => {
                if (board.postfix === "!") {
                    const char = _.last(_.last(board.correct));
                    if (char === '.' || char === '?' || char === '!') {
                        console.log('Error', board.correct);
                    }
                    expect(char).to.not.eql('.');
                    expect(char).to.not.eql('?');
                    expect(char).to.not.eql('!');
                }
            });
        });


        it('should have right space when "multi" detected in board correct answers', () => {
            goThrough((board: BoardFace) => {
                _.each(board.correct, (correct) => {
                    if (correct.indexOf(multi) != -1) {
                        expect(correct).to.contain(' ' + multi + ' ');
                        expect(correct).to.not.contain('  ');
                    }
                });
            });
        });

        it('should have right space when "multi" detected in board incorrect answers', () => {
            goThrough((board: BoardFace) => {
                _.each(board.incorrect, (correct) => {
                    if (correct.indexOf(multi) != -1) {
                        expect(correct).to.contain(' ' + multi + ' ');
                        expect(correct).to.not.contain('  ');
                    }
                });
            });
        });

        it('name should not contains double spaces', () => {
            goThrough((board: BoardFace) => {
                expect(board.name).to.not.contain('  ');
            });
        });

        it('name should not contains misspelings characters spaces', () => {
            goThrough((board: BoardFace) => {
                expect(board.name).to.not.contain('!.');
                expect(board.name).to.not.contain('.!');
                expect(board.name).to.not.contain('!?');
            });
        });

        it('name should not contains misspelings characters spaces', () => {
            goThrough((board: BoardFace) => {
                expect(board.name).to.not.contain('?!');
                expect(board.name).to.not.contain('!!');
            });
        });

        it('name should not contains misspelings characters spaces', () => {
            goThrough((board: BoardFace) => {
                expect(board.name).to.not.contain('??');
                expect(board.name).to.not.contain('-?');
            });
        });
        it('name should not contains misspelings characters spaces', () => {
            goThrough((board: BoardFace) => {
                expect(board.name).to.not.contain('-.');
                expect(board.name).to.not.contain('-!');
            });
        });

        it('name should not contains misspelings characters spaces', () => {
            goThrough((board: BoardFace) => {
                expect(board.name).to.not.contain('--');
                expect(board.name).to.not.contain(',,');
            });
        });

        it('name should not end on bad characters', () => {
            goThrough((board: BoardFace) => {
                expect(board.name[board.name.length - 1]).to.not.eql('-');
                expect(board.name[board.name.length - 1]).to.not.eql("'");
                expect(board.name[board.name.length - 1]).to.not.eql('"');
            });
        });


        it('should have right space when "space" detected in board name ', () => {
            goThrough((board: BoardFace) => {

                if (board.name.indexOf(space) !== -1) {
                    if (board.name.length > space.length) { // skip simple space

                        if (board.name.indexOf(space) === 0) { //begining of sentence
                            expect(board.name).to.contain(space + ' ');
                            expect(board.name).to.not.contain(space + '  ');
                        }

                        if (board.name.indexOf(space, board.name.length - space.length) !== -1) { // ending of sentence
                            expect(board.name).to.contain(' ' + space);
                            expect(board.name).to.not.contain('  ' + space);
                        }


                        const names = board.name.split(space);
                        _.each(names, (n: string, index: number) => {
                            if (n && index) {
                                const a = n[0];
                                const b = n[n.length - 1];
                                if (!(a === " " || a === "," || b === " " || b === "." || b === "?" || b === "!" || b === ",")) {
                                    throw Error('space surrounded: a or b not equal space:' + board.name + ' +' + n + '+');
                                }
                            }
                        });
                    };
                };
            });
        });


        it('postfix if defined should be .!? if last correct is not having .!?', () => {
            goThrough((board: BoardFace) => {
                const postfix = board.postfix;
                const char = _.last(_.last(board.correct));
                if (postfix && (char !== '.' || char !== '?' || char !== '!')) {
                    if (!(postfix === '.' || postfix === '?' || postfix === '!')) {
                        throw Error('postfix not defined properly:' + board.name);
                    }
                }
            });
        });


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
                            word = word.replace('.', '').replace('?', '').replace('!', '.').replace(',', '').replace(' ', '');

                            //combine folowing capital words
                            while ((!(words[index].indexOf('?') !== -1 || words[index].indexOf('.') !== -1 || words[index].indexOf('!') !== -1)) && /[A-Z]/.test(words[index + 1]) === true) {
                                let nextWord = words[index + 1];
                                nextWord = nextWord.replace('.', '').replace('?', '').replace('!', '.').replace(',', '').replace(' ', '');
                                word = word + ' ' + nextWord;
                                index++;
                            }


                            if (!isCalitapizedWordAllowed(word)) {
                                const pWord = prevWord + ' ' + word;
                                if (!isCalitapizedWordAllowed(pWord)) {
                                    if (capital.books.GameOfThrones.indexOf(pWord) === -1) {
                                        throw Error('Word cannot be capitalized:' + word + '+');
                                    }
                                }
                            }

                        }
                    }
                }
            }

            it('check capitalized name', () => {
                goThrough((board: BoardFace) => {
                    if (board.name) {
                        const words = board.name.split(' ');
                        checkCapitalizedWords(words);
                    }
                });
            });
            it('check capitalized correct', () => {
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
            it('check capitalized incorrect', () => {
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


    });

    //check words that match cappital and they are lowercase
    //is not capitall that should be capital



});