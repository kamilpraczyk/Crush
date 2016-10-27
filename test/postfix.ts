/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import {BoardFace} from '../src/types';
import _ = require("underscore");
import {multi, space, capital, viewIds, displayIds } from '../src/lessons/helper/constants';
import {goThrough} from './goThrough';

describe('Postfix', () => {


    describe('when postfix is "." ', () => {
        const isPostfix = (board: BoardFace) => { return board.postfix === "." };

        it('correct is not ending on "?"', () => {
            goThrough((board: BoardFace) => {
                if (isPostfix(board))
                    expect(_.last(_.last(board.correct))).to.not.eql('?');
            });
        });
        it('correct is not ending on "."', () => {
            goThrough((board: BoardFace) => {
                if (isPostfix(board))
                    expect(_.last(_.last(board.correct))).to.not.eql('.');
            });
        });
        it('correct is not ending on "!"', () => {
            goThrough((board: BoardFace) => {
                if (isPostfix(board))
                    expect(_.last(_.last(board.correct))).to.not.eql('!');
            });
        });
    });



    describe('when postfix is "?" ', () => {
        const isPostfix = (board: BoardFace) => { return board.postfix === "?" };

        it('correct is not ending on "?"', () => {
            goThrough((board: BoardFace) => {
                if (isPostfix(board))
                    expect(_.last(_.last(board.correct))).to.not.eql('?');
            });
        });
        it('correct is not ending on "."', () => {
            goThrough((board: BoardFace) => {
                if (isPostfix(board))
                    expect(_.last(_.last(board.correct))).to.not.eql('.');
            });
        });
        it('correct is not ending on "!"', () => {
            goThrough((board: BoardFace) => {
                if (isPostfix(board))
                    expect(_.last(_.last(board.correct))).to.not.eql('!');
            });
        });
    });


    describe('when postfix is "!" ', () => {
        const isPostfix = (board: BoardFace) => { return board.postfix === "?" };

        it('correct is not ending on "?"', () => {
            goThrough((board: BoardFace) => {
                if (isPostfix(board))
                    expect(_.last(_.last(board.correct))).to.not.eql('?');
            });
        });
        it('correct is not ending on "."', () => {
            goThrough((board: BoardFace) => {
                if (isPostfix(board))
                    expect(_.last(_.last(board.correct))).to.not.eql('.');
            });
        });
        it('correct is not ending on "!"', () => {
            goThrough((board: BoardFace) => {
                if (isPostfix(board))
                    expect(_.last(_.last(board.correct))).to.not.eql('!');
            });
        });
    });



    it('postfix is defined as one of .!?', () => {
        goThrough((board: BoardFace) => {
            const p = board.postfix;
            if (p) {
                if (!(p === '.' || p === '?' || p === '!')) {
                    throw Error('postfix not defined properly:' + board.name);
                }
            }
        });
    });




});