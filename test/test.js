var expect = require('expect.js');
var lessons_1 = require('../src/lessons/lessons');
var _ = require("underscore");
var constants_1 = require('../src/lessons/helper/constants');
describe('Test -', function () {
    describe('Lessons -', function () {
        beforeEach(function () {
        });
        function goThrough(test) {
            _.mapObject(lessons_1.lessons, function (boards) {
                _.each(boards.lessons, function (board) {
                    test(board);
                });
            });
        }
        it('should contains correct answers', function () {
            goThrough(function (board) {
                if (board.correct) {
                    expect(board.correct.length).to.be.greaterThan(0);
                }
            });
        });
        it('should contains incorrect answers', function () {
            goThrough(function (board) {
                if (board.incorrect) {
                    expect(board.incorrect.length).to.be.greaterThan(0);
                }
            });
        });
        it('should have no ".?!" at the end of sentence if postfix is "." ', function () {
            goThrough(function (board) {
                if (board.postfix === ".") {
                    var char = _.last(_.last(board.correct));
                    if (char === '.' || char === '?' || char === '!') {
                        console.log('Error', board.correct);
                    }
                    expect(char).to.not.eql('.');
                    expect(char).to.not.eql('?');
                    expect(char).to.not.eql('!');
                }
            });
        });
        it('should have no ".?!" at the end of sentence if postfix is "?" ', function () {
            goThrough(function (board) {
                if (board.postfix === "?") {
                    var char = _.last(_.last(board.correct));
                    if (char === '.' || char === '?' || char === '!') {
                        console.log('Error', board.correct);
                    }
                    expect(char).to.not.eql('.');
                    expect(char).to.not.eql('?');
                    expect(char).to.not.eql('!');
                }
            });
        });
        it('should have no ".?!" at the end of sentence if postfix is "!" ', function () {
            goThrough(function (board) {
                if (board.postfix === "!") {
                    var char = _.last(_.last(board.correct));
                    if (char === '.' || char === '?' || char === '!') {
                        console.log('Error', board.correct);
                    }
                    expect(char).to.not.eql('.');
                    expect(char).to.not.eql('?');
                    expect(char).to.not.eql('!');
                }
            });
        });
        it('should have right space when "multi" detected in board correct answers', function () {
            goThrough(function (board) {
                _.each(board.correct, function (correct) {
                    if (correct.indexOf(constants_1.multi) != -1) {
                        expect(correct).to.contain(' ' + constants_1.multi + ' ');
                        expect(correct).to.not.contain('  ');
                    }
                });
            });
        });
        it('should have right space when "multi" detected in board incorrect answers', function () {
            goThrough(function (board) {
                _.each(board.incorrect, function (correct) {
                    if (correct.indexOf(constants_1.multi) != -1) {
                        expect(correct).to.contain(' ' + constants_1.multi + ' ');
                        expect(correct).to.not.contain('  ');
                    }
                });
            });
        });
        it('name should not contains double spaces', function () {
            goThrough(function (board) {
                expect(board.name).to.not.contain('  ');
            });
        });
        it('name should not contains misspelings characters spaces', function () {
            goThrough(function (board) {
                expect(board.name).to.not.contain('!.');
                expect(board.name).to.not.contain('.!');
                expect(board.name).to.not.contain('!?');
            });
        });
        it('name should not contains misspelings characters spaces', function () {
            goThrough(function (board) {
                expect(board.name).to.not.contain('?!');
                expect(board.name).to.not.contain('!!');
            });
        });
        it('name should not contains misspelings characters spaces', function () {
            goThrough(function (board) {
                expect(board.name).to.not.contain('??');
                expect(board.name).to.not.contain('-?');
            });
        });
        it('name should not contains misspelings characters spaces', function () {
            goThrough(function (board) {
                expect(board.name).to.not.contain('-.');
                expect(board.name).to.not.contain('-!');
            });
        });
        it('name should not contains misspelings characters spaces', function () {
            goThrough(function (board) {
                expect(board.name).to.not.contain('--');
                expect(board.name).to.not.contain(',,');
            });
        });
        it('name should not end on bad characters', function () {
            goThrough(function (board) {
                expect(board.name[board.name.length - 1]).to.not.eql('-');
                expect(board.name[board.name.length - 1]).to.not.eql("'");
                expect(board.name[board.name.length - 1]).to.not.eql('"');
            });
        });
        it('should have right space when "space" detected in board name ', function () {
            goThrough(function (board) {
                if (board.name.indexOf(constants_1.space) !== -1) {
                    if (board.name.length > constants_1.space.length) {
                        if (board.name.indexOf(constants_1.space) === 0) {
                            expect(board.name).to.contain(constants_1.space + ' ');
                            expect(board.name).to.not.contain(constants_1.space + '  ');
                        }
                        if (board.name.indexOf(constants_1.space, board.name.length - constants_1.space.length) !== -1) {
                            expect(board.name).to.contain(' ' + constants_1.space);
                            expect(board.name).to.not.contain('  ' + constants_1.space);
                        }
                        var names = board.name.split(constants_1.space);
                        _.each(names, function (n, index) {
                            if (n && index) {
                                var a = n[0];
                                var b = n[n.length - 1];
                                if (!(a === " " || a === "," || b === " " || b === "." || b === "?" || b === "!" || b === ",")) {
                                    throw Error('space surrounded: a or b not equal space:' + board.name + ' +' + n + '+');
                                }
                            }
                        });
                    }
                    ;
                }
                ;
            });
        });
        it('postfix if defined should be .!? if last correct is not having .!?', function () {
            goThrough(function (board) {
                var postfix = board.postfix;
                var char = _.last(_.last(board.correct));
                if (postfix && (char !== '.' || char !== '?' || char !== '!')) {
                    if (!(postfix === '.' || postfix === '?' || postfix === '!')) {
                        throw Error('postfix not defined properly:' + board.name);
                    }
                }
            });
        });
        describe('Capitalized -', function () {
            function isCalitapizedWordAllowed(word) {
                var allow = false;
                _.mapObject(constants_1.capital, function (category) {
                    _.mapObject(category, function (capitalWord) {
                        if (capitalWord === word) {
                            allow = true;
                        }
                    });
                });
                return allow;
            }
            ;
            function checkCapitalizedWords(words) {
                var word = null;
                for (var index = 0; index < words.length; index++) {
                    word = words[index];
                    if (index && word && /[A-Z]/.test(word[0])) {
                        var prevWord = words[index - 1];
                        prevWord = prevWord.replace(' ', '');
                        if (!(prevWord.indexOf('?') !== -1 || prevWord.indexOf('.') !== -1 || prevWord.indexOf('!') !== -1)) {
                            word = word.replace('.', '').replace('?', '').replace('!', '.').replace(',', '').replace(' ', '');
                            while ((!(words[index].indexOf('?') !== -1 || words[index].indexOf('.') !== -1 || words[index].indexOf('!') !== -1)) && /[A-Z]/.test(words[index + 1]) === true) {
                                var nextWord = words[index + 1];
                                nextWord = nextWord.replace('.', '').replace('?', '').replace('!', '.').replace(',', '').replace(' ', '');
                                word = word + ' ' + nextWord;
                                index++;
                            }
                            if (!isCalitapizedWordAllowed(word)) {
                                var pWord = prevWord + ' ' + word;
                                if (!isCalitapizedWordAllowed(pWord)) {
                                    if (constants_1.capital.books.GameOfThrones.indexOf(pWord) === -1) {
                                        throw Error('Word cannot be capitalized:' + word + '+');
                                    }
                                }
                            }
                        }
                    }
                }
            }
            it('check capitalized name', function () {
                goThrough(function (board) {
                    if (board.name) {
                        var words = board.name.split(' ');
                        checkCapitalizedWords(words);
                    }
                });
            });
            it('check capitalized correct', function () {
                goThrough(function (board) {
                    var words = [];
                    if (board.correct) {
                        _.each(board.correct, function (correct) {
                            words = words.concat(correct.split(' '));
                        });
                        checkCapitalizedWords(words);
                    }
                });
            });
            it('check capitalized incorrect', function () {
                goThrough(function (board) {
                    var words = [];
                    if (board.incorrect && board.id.indexOf(constants_1.viewIds.radio) === -1) {
                        _.each(board.incorrect, function (correct) {
                            words = words.concat(correct.split(' '));
                        });
                        checkCapitalizedWords(words);
                    }
                });
            });
        });
    });
});
