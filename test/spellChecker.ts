/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import _ = require("underscore");
import { goThrough, mock } from './goThrough';


describe('Lessons -', () => {

    beforeEach(() => mock());

    xit('print sentences and check them ', () => {

        goThrough(data => {
            //  console.log(data.title);
            // console.log(data.name);
            // data.correct && console.log(data.correct.join(' '));
        });
    });


});

