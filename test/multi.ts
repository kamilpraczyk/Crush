/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import _ = require("underscore");
import { multi } from '../src/lessons/helper/constants';
import { goThrough, mock } from './goThrough';

describe('Multi -', () => {

    beforeEach(() => mock());

    it('name  - should not contain "multi"', () => goThrough(board => expect(board.name).to.not.contain(multi)));


    it('correct - should have right space when "multi" detected', () => {
        goThrough(board => {
            board.correct && board.correct.map(correct => {
                if (correct.indexOf(multi) !== -1) {
                    expect(correct).to.contain(' ' + multi + ' ');
                    expect(correct).to.not.contain('  ');
                }
            });
        });
    });

    it('incorrect - should have right space when "multi" detected', () => {
        goThrough(board => {
            board.incorrect && board.incorrect.map(incorrect => {
                if (incorrect.indexOf(multi) !== -1) {
                    expect(incorrect).to.contain(' ' + multi + ' ');
                    expect(incorrect).to.not.contain('  ');
                }
            });
        });
    });

});