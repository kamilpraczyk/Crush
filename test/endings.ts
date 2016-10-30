/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import {BoardFace} from '../src/types';
import _ = require("underscore");
import {multi, space, capital, viewIds, displayIds } from '../src/lessons/helper/constants';
import {goThrough, mock} from './goThrough';

describe('Endings -', () => {
    beforeEach(() => {
        mock()
    });
    describe('name - should not end with ', () => {

        it(' - ', () => {
            goThrough((board: BoardFace) => { expect(board.name[board.name.length - 1]).to.not.eql('-'); });
        });
        it(' " ', () => {
            goThrough((board: BoardFace) => { expect(board.name[board.name.length - 1]).to.not.eql(' "'); }); //speach
        });
        it(" ' ", () => {
            goThrough((board: BoardFace) => { expect(board.name[board.name.length - 1]).to.not.eql("'"); });
        });

    });

});

