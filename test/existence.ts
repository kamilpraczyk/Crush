/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import {BoardFace} from '../src/types';
import _ = require("underscore");
import {multi, space, capital, viewIds, displayIds } from '../src/lessons/helper/constants';
import {goThrough, mock} from './goThrough';

describe('Existence -', () => {
    beforeEach(() => {
        mock()
    });

    describe('correct - ', () => {

        it('should not be empty ', () => {
            goThrough((board: BoardFace) => {
                if (board.correct) {
                    expect(board.correct.length).to.be.greaterThan(0);
                }
            });
        });

        it('are defined (skip viewIds.draw)', () => {
            goThrough((board: BoardFace) => {
                if (board.id.indexOf(viewIds.draw) === -1) {
                    expect(board.correct.length).to.greaterThan(0);
                }
            });
        });

    });


    describe('incorrect - ', () => {

        it('should not be empty', () => {
            goThrough((board: BoardFace) => {
                if (board.incorrect) {
                    expect(board.incorrect.length).to.be.greaterThan(0);
                }
            });
        });

        it('are defined (skip viewIds.draw, viewIds.oneTwoThree)', () => {
            goThrough((board: BoardFace) => {

                if (board.id.indexOf(viewIds.draw) === -1 && board.id.indexOf(viewIds.oneTwoThree) === -1) {
                    expect(board.incorrect.length).to.be.greaterThan(0);
                }
            });
        });

        it('incorrect - must be undefined for viewIds.oneTwoThree and viewIds.draw', () => {
            goThrough((board: BoardFace) => {
                if (board.id.indexOf(viewIds.oneTwoThree) === 1 || board.id.indexOf(viewIds.draw) === 1) {
                    expect(board.incorrect).to.be(undefined);
                }
            });
        });
    });



















});