/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import {BoardFace} from '../src/types';
import _ = require("underscore");
import {multi, space, capital, viewIds, displayIds } from '../src/lessons/helper/constants';
import {goThrough, mock} from './goThrough';


describe('Lessons -', () => {

    beforeEach(() => {
        mock()
    });

    xit('should have right space when "space" detected in board name ', () => {

        goThrough((board: BoardFace) => {
            //  console.log(board.title);
            // console.log(board.name);
            // board.correct && console.log(board.correct.join(' '));
        });
    });


});

