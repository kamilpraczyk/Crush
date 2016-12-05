/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import _ = require("underscore");
import { isId } from '../src/lessons/helper/constants';
import { goThrough, mock } from './goThrough';

describe('Repetition -', () => {

    beforeEach(() => mock());

    it('correct - are not repeated (skip isRepeated)', () => {
        goThrough(board => { if (board.correct && !isId.isRepeated(board.id)) expect(board.correct.length).to.be(_.unique(board.correct).length) });
    });

    it('incorrect - are not repeated (skip isRepeated)', () => {
        goThrough(board => { if (board.incorrect && !isId.isRepeated(board.id)) expect(board.incorrect.length).to.be(_.unique(board.incorrect).length); });
    });
});