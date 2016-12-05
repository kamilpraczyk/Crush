/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import _ = require("underscore");
import { goThrough, mock } from './goThrough';


describe('Lessons -', () => {

    beforeEach(() => mock());

    xit('todo print sentences and check them ', () => {

        goThrough(board => {
            //  console.log(board.title);
            // console.log(board.name);
            // board.correct && console.log(board.correct.join(' '));
        });
    });


});

