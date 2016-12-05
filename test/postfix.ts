/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import { BoardFace } from '../src/types';
import _ = require("underscore");
import { multi, space, capital, viewIds, displayIds } from '../src/lessons/helper/constants';
import { goThrough, mock } from './goThrough';

describe('Postfix', () => {

    beforeEach(() => mock());

    describe('when postfix is: . then correct is not ending on: ', () => {
        const isPostfix = (board: BoardFace) => { return board.postfix === "." };

        it('?', () => goThrough(board => { if (isPostfix(board)) expect(_.last(_.last(board.correct))).to.not.eql('?'); }));
        it('.', () => goThrough(board => { if (isPostfix(board)) expect(_.last(_.last(board.correct))).to.not.eql('.'); }));
        it('!', () => goThrough(board => { if (isPostfix(board)) expect(_.last(_.last(board.correct))).to.not.eql('!'); }));
    });

    describe('when postfix is: ? then correct is not ending on: ', () => {
        const isPostfix = (board: BoardFace) => { return board.postfix === "?" };

        it('?', () => goThrough(board => { if (isPostfix(board)) expect(_.last(_.last(board.correct))).to.not.eql('?'); }));
        it('.', () => goThrough(board => { if (isPostfix(board)) expect(_.last(_.last(board.correct))).to.not.eql('.'); }));
        it('!', () => goThrough(board => { if (isPostfix(board)) expect(_.last(_.last(board.correct))).to.not.eql('!'); }));
    });

    describe('when postfix is: ! then correct is not ending on: ', () => {
        const isPostfix = (board: BoardFace) => { return board.postfix === "!" };

        it('?', () => goThrough(board => { if (isPostfix(board)) expect(_.last(_.last(board.correct))).to.not.eql('?'); }));
        it('.', () => goThrough(board => { if (isPostfix(board)) expect(_.last(_.last(board.correct))).to.not.eql('.'); }));
        it('!', () => goThrough(board => { if (isPostfix(board)) expect(_.last(_.last(board.correct))).to.not.eql('!'); }));
    });



    it('postfix is defined as one of .!?', () => {
        goThrough(board => { board.postfix && expect(board.postfix).to.match(/^[?!.]/); });
    });




});