/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import _ = require("underscore");
import { goThrough, mock } from './goThrough';

describe('Missmelings - ', () => {

    beforeEach(() => mock());

    describe('name - should not contains: ', () => {

        it('double spaces', () => goThrough(board => expect(board.name).to.not.contain('  ')));

        it('!.', () => goThrough(board => expect(board.name).to.not.contain('!.')));
        it('.!', () => goThrough(board => expect(board.name).to.not.contain('.!')));
        it('|?', () => goThrough(board => expect(board.name).to.not.contain('!?')));
        it('?!', () => goThrough(board => expect(board.name).to.not.contain('?!')));
        it('!!', () => goThrough(board => expect(board.name).to.not.contain('!!')));
        it('??', () => goThrough(board => expect(board.name).to.not.contain('??')));
        it('-?', () => goThrough(board => expect(board.name).to.not.contain('-?')));
        it('-.', () => goThrough(board => expect(board.name).to.not.contain('-.')));
        it('-!', () => goThrough(board => expect(board.name).to.not.contain('-!')));
        it('--', () => goThrough(board => expect(board.name).to.not.contain('--')));
        it(',,', () => goThrough(board => expect(board.name).to.not.contain(',,')));
        it('" , "', () => goThrough(board => expect(board.name).to.not.contain(' , ')));
        it('" . "', () => goThrough(board => expect(board.name).to.not.contain(' . ')));
        it('""', () => goThrough(board => expect(board.name).to.not.contain('""')));
        it('::', () => goThrough(board => expect(board.name).to.not.contain('::')));
        it('++', () => goThrough(board => expect(board.name).to.not.contain('++')));
    });
});

