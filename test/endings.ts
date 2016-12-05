/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import _ = require("underscore");
import { goThrough, mock } from './goThrough';

describe('Endings -', () => {

    beforeEach(() => mock());

    describe('name - should not end with: ', () => {
        it(' - ', () => goThrough(board => expect(board.name[board.name.length - 1]).to.not.eql('-')));
        it(' " ', () => goThrough(board => expect(board.name[board.name.length - 1]).to.not.eql(' "')));
        it(" ' ", () => goThrough(board => expect(board.name[board.name.length - 1]).to.not.eql("'")));
    });
});

