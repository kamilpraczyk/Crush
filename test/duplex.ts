/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import _ = require("underscore");
import { goThrough, mock } from './goThrough';

describe('Duplex -', () => {
    beforeEach(() => mock());

    it('name - contains twice: " ', () => {
        goThrough(data => {
            const count = data.name.split('"').length - 1;
            expect(count % 2).to.eql(0);
        });
    });
});

