/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import {BoardFace} from '../src/types';
import _ = require("underscore");
import {multi, space, capital, viewIds, displayIds } from '../src/lessons/helper/constants';
import {goThrough} from './goThrough';

describe('Lessons -', () => {


    it('should have right space when "space" detected in board name ', () => {
        goThrough((board: BoardFace) => {
            if (board.name.indexOf(space) !== -1) {
                if (board.name.length > space.length) { // skip simple space

                    if (board.name.indexOf(space) === 0) { //begining of sentence
                        if (board.id.indexOf(displayIds.noSpace) === -1) {
                            expect(board.name).to.contain(space + ' ');
                        }
                        expect(board.name).to.not.contain(space + '  ');
                    }

                    if (board.name.indexOf(space, board.name.length - space.length) !== -1) { // ending of sentence
                        if (board.id.indexOf(displayIds.noSpace) === -1) {
                            expect(board.name).to.contain(' ' + space);
                        }
                        expect(board.name).to.not.contain('  ' + space);
                    }


                    const names = board.name.split(space);
                    _.each(names, (n: string, index: number) => {
                        if (n && index) {
                            const a = n[0];
                            const b = n[n.length - 1];
                            if (!(a === " " || a === "," || b === " " || b === "." || b === "?" || b === "!" || b === ",")) {
                                if (board.id.indexOf(displayIds.noSpace) === -1) {
                                    throw Error('space surrounded: a or b not equal space:' + board.name + ' +' + n + '+');
                                }
                            }
                        }
                    });
                };
            };
        });
    });


    //check words that match cappital and they are lowercase
    //is not capitall that should be capital

});

