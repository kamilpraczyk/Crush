/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import {BoardFace} from '../src/lessons/interface';
import _ = require("underscore");
import {multi, space, capital, viewIds, displayIds } from '../src/lessons/helper/constants';
import {goThrough} from './goThrough';

describe('Endings -', () => {

    describe('name - should not end with ', () => {

        it(' - ', () => {
            goThrough((board: BoardFace) => { expect(board.name[board.name.length - 1]).to.not.eql('-'); });
        });
        it(' " ', () => {
            goThrough((board: BoardFace) => { expect(board.name[board.name.length - 1]).to.not.eql('"'); });
        });
        it(" ' ", () => {
            goThrough((board: BoardFace) => { expect(board.name[board.name.length - 1]).to.not.eql("'"); });
        });

    });

});

