import sinon = require('sinon');
import expect = require('expect.js');
import _ = require("underscore");
import { isId } from '../src/lessons/helper/constants';
import { goThrough, mock } from './goThrough';

describe('Existence for -', () => {

    beforeEach(() => mock());

    describe('correct - ', () => {

        it('if exist then should not be empty ', () => goThrough(data => { if (data.correct) expect(data.correct.length).to.be.greaterThan(0); }));
        it('are defined (skip isDraw)', () => goThrough(data => { if (!isId.isDraw(data.id)) expect(data.correct.length).to.greaterThan(0); }));
    });

    describe('incorrect - ', () => {

        it('if exist then should not be empty', () => goThrough(data => {
            if (data.incorrect) {
                expect(data.incorrect.length).to.be.greaterThan(0);
            }
        }));
        it('are undefined for isOneTwoThree', () => goThrough(data => { if (isId.isOneTwoThree(data.id)) expect(data.incorrect).to.be(undefined); }));
        it('are undefined for isDraw', () => goThrough(data => { if (isId.isDraw(data.id)) expect(data.incorrect).to.be(undefined); }));

        it('are defined (skip isDraw && isOneTwoThree)', () => goThrough(data => {
            if (!isId.isDraw(data.id) && !isId.isOneTwoThree(data.id))
                expect(data.incorrect.length).to.be.greaterThan(0);
        }));

    });
});