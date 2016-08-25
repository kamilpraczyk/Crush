/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import {BoardFace} from '../src/lessons/interface';
import _ = require("underscore");
import {multi, space, capital, viewIds, displayIds } from '../src/lessons/helper/constants';
import {goThrough} from './goThrough';

describe('Duplex -', () => {

    describe('contains -  ', () => {

        it(' " to " ', () => {
            goThrough((board: BoardFace) => {
                const count = board.name.split('"').length - 1;
                expect(count % 2).to.eql(0);

            });
        });

    });

});

