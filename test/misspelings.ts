/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import _ = require("underscore");
import { goThrough, mock } from './goThrough';

describe('Missmelings - ', () => {

    beforeEach(() => mock());

    describe('name - should not contains: ', () => {

        it('double spaces', () => goThrough(data => expect(data.name).to.not.contain('  ')));

        it('!.', () => goThrough(data => expect(data.name).to.not.contain('!.')));
        it('.!', () => goThrough(data => expect(data.name).to.not.contain('.!')));
        it('|?', () => goThrough(data => expect(data.name).to.not.contain('!?')));
        it('?!', () => goThrough(data => expect(data.name).to.not.contain('?!')));
        it('!!', () => goThrough(data => expect(data.name).to.not.contain('!!')));
        it('??', () => goThrough(data => expect(data.name).to.not.contain('??')));
        it('-?', () => goThrough(data => expect(data.name).to.not.contain('-?')));
        it('-.', () => goThrough(data => expect(data.name).to.not.contain('-.')));
        it('-!', () => goThrough(data => expect(data.name).to.not.contain('-!')));
        it('--', () => goThrough(data => expect(data.name).to.not.contain('--')));
        it(',,', () => goThrough(data => expect(data.name).to.not.contain(',,')));
        it('" , "', () => goThrough(data => expect(data.name).to.not.contain(' , ')));
        it('" . "', () => goThrough(data => expect(data.name).to.not.contain(' . ')));
        it('""', () => goThrough(data => expect(data.name).to.not.contain('""')));
        it('::', () => goThrough(data => expect(data.name).to.not.contain('::')));
        it('++', () => goThrough(data => expect(data.name).to.not.contain('++')));
    });
});

