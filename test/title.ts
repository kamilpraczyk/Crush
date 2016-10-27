/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import {BoardFace, BoardFaces} from '../src/types';
import _ = require("underscore");
import {multi, space, capital, viewIds, displayIds } from '../src/lessons/helper/constants';
import {goThrough} from './goThrough';

describe('Title -', () => {

    describe('should not contains ', () => {

        it('double spaces', () => {
            goThrough((board: BoardFace) => {
                expect(board.title).to.not.contain('  ');
            });
        });

        it('"!."', () => {
            goThrough((board: BoardFace) => { expect(board.title).to.not.contain('!.'); });
        });
        it('".!"', () => {
            goThrough((board: BoardFace) => { expect(board.title).to.not.contain('.!'); });
        });
        it('"|?"', () => {
            goThrough((board: BoardFace) => { expect(board.title).to.not.contain('!?'); });
        });
        it('"?!"', () => {
            goThrough((board: BoardFace) => { expect(board.title).to.not.contain('?!'); });
        });
        it('"!!"', () => {
            goThrough((board: BoardFace) => { expect(board.title).to.not.contain('!!'); });
        });
        it('"??"', () => {
            goThrough((board: BoardFace) => { expect(board.title).to.not.contain('??'); });
        });
        it('"-?"', () => {
            goThrough((board: BoardFace) => { expect(board.title).to.not.contain('-?'); });
        });
        it('"-."', () => {
            goThrough((board: BoardFace) => { expect(board.title).to.not.contain('-.'); });
        });
        it('"-!"', () => {
            goThrough((board: BoardFace) => { expect(board.title).to.not.contain('-!'); });
        });
        it('"--"', () => {
            goThrough((board: BoardFace) => { expect(board.title).to.not.contain('--'); });
        });
        it('",,"', () => {
            goThrough((board: BoardFace) => { expect(board.title).to.not.contain(',,'); });
        });
        it('" , "', () => {
            goThrough((board: BoardFace) => { expect(board.title).to.not.contain(' , '); });
        });
        it('" , "', () => {
            goThrough((board: BoardFace) => { expect(board.title).to.not.contain(' . '); });
        });
        it('"...."', () => {
            goThrough((board: BoardFace) => { expect(board.title).to.not.contain('....'); });
        });

    });


});

