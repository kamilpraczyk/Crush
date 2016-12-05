/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import _ = require("underscore");
import { goThrough, mock } from './goThrough';

describe('Title -', () => {

    beforeEach(() => mock());

    describe('should not contains: ', () => {

        it('double spaces', () => goThrough(board => expect(board.title).to.not.contain('  ')));
        it('!.', () => goThrough(board => { expect(board.title).to.not.contain('!.'); }));
        it('.!', () => goThrough(board => { expect(board.title).to.not.contain('.!'); }));
        it('|?', () => goThrough(board => { expect(board.title).to.not.contain('!?'); }));
        it('?!', () => goThrough(board => { expect(board.title).to.not.contain('?!'); }));
        it('!!', () => goThrough(board => { expect(board.title).to.not.contain('!!'); }));
        it('??', () => goThrough(board => { expect(board.title).to.not.contain('??'); }));
        it('-?', () => goThrough(board => { expect(board.title).to.not.contain('-?'); }));
        it('-.', () => goThrough(board => { expect(board.title).to.not.contain('-.'); }));
        it('-!', () => goThrough(board => { expect(board.title).to.not.contain('-!'); }));
        it('--', () => goThrough(board => { expect(board.title).to.not.contain('--'); }));
        it(',,', () => goThrough(board => { expect(board.title).to.not.contain(',,'); }));
        it('" , "', () => goThrough(board => { expect(board.title).to.not.contain(' , '); }));
        it('" , "', () => goThrough(board => { expect(board.title).to.not.contain(' . '); }));
        it('....', () => goThrough(board => { expect(board.title).to.not.contain('....'); }));
    });
});

