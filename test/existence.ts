/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import _ = require("underscore");
import { isId } from '../src/lessons/helper/constants';
import { goThrough, mock } from './goThrough';

describe('Existence for -', () => {

    beforeEach(() => mock());

    describe('correct - ', () => {

        it('if exist then should not be empty ', () => goThrough(board => { if (board.correct) expect(board.correct.length).to.be.greaterThan(0); }));
        it('are defined (skip isDraw)', () => goThrough(board => { if (!isId.isDraw(board.id)) expect(board.correct.length).to.greaterThan(0); }));
    });

    describe('incorrect - ', () => {

        it('if exist then should not be empty', () => goThrough(board => { if (board.incorrect) expect(board.incorrect.length).to.be.greaterThan(0); }));
        it('are undefined for isOneTwoThree', () => goThrough(board => { if (isId.isOneTwoThree(board.id)) expect(board.incorrect).to.be(undefined); }));
        it('are undefined for isDraw', () => goThrough(board => { if (isId.isDraw(board.id)) expect(board.incorrect).to.be(undefined); }));

        it('are defined (skip isDraw && isOneTwoThree)', () => goThrough(board => {
            if (!isId.isDraw(board.id) && !isId.isOneTwoThree(board.id))
                expect(board.incorrect.length).to.be.greaterThan(0);
        }));

    });
});