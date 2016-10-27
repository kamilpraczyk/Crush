/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import {BoardFace} from '../src/types';
import _ = require("underscore");
import {multi, space, capital, viewIds, displayIds } from '../src/lessons/helper/constants';
import {goThrough} from './goThrough';

describe('Repetition -', () => {

    it('correct - are not repeated (skip displayIds.areRepeated)', () => {
        goThrough((board: BoardFace) => {
            if (board.correct && board.id.indexOf(displayIds.areRepeated) === -1) {
                //if (board.correct.length !== _.unique(board.correct).length) { console.log(board.correct); }
                expect(board.correct.length).to.be(_.unique(board.correct).length);
            }
        });
    });


    it('incorrect - are not repeated (skip displayIds.areRepeated)', () => {
        goThrough((board: BoardFace) => {
            if (board.incorrect && board.id.indexOf(displayIds.areRepeated) === -1) {
                //if (board.incorrect.length !== _.unique(board.incorrect).length) { console.log(board.incorrect); }
                expect(board.incorrect.length).to.be(_.unique(board.incorrect).length);
            }
        });
    });



});