/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import {BoardFace} from '../src/types';
import _ = require("underscore");
import {multi, space, capital, viewIds, displayIds } from '../src/lessons/helper/constants';
import {goThrough} from './goThrough';

describe('Multi -', () => {


    it('name  - should not contain "multi"', () => {
        goThrough((board: BoardFace) => {
            if (board.name.indexOf(multi) !== -1) {
                throw new Error('name should not have multi')
            }
        });
    });


    it('correct - should have right space when "multi" detected', () => {
        goThrough((board: BoardFace) => {
            _.each(board.correct, (correct) => {
                if (correct.indexOf(multi) !== -1) {
                    expect(correct).to.contain(' ' + multi + ' ');
                    expect(correct).to.not.contain('  ');
                }
            });
        });
    });

    it('incorrect - should have right space when "multi" detected', () => {
        goThrough((board: BoardFace) => {
            _.each(board.incorrect, (correct) => {
                if (correct.indexOf(multi) !== -1) {
                    expect(correct).to.contain(' ' + multi + ' ');
                    expect(correct).to.not.contain('  ');
                }
            });
        });
    });

});