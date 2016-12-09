/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import _ = require("underscore");
import { space, capital, TypeId, isId } from '../src/lessons/helper/constants';
import { goThrough, mock } from './goThrough';

describe('Lessons -', () => {
    beforeEach(() => mock());

    it('should have right space when "space" detected in data name ', () => {
        goThrough(data => {
            if (data.name.indexOf(space) !== -1) {
                if (data.name.length > space.length) { // skip simple space

                    if (data.name.indexOf(space) === 0) { //begining of sentence
                        if (!isId.isNoSpace(data.id)) {
                            expect(data.name).to.contain(space + ' ');
                        }
                        expect(data.name).to.not.contain(space + '  ');
                    }

                    if (data.name.indexOf(space, data.name.length - space.length) !== -1) { // ending of sentence
                        if (!isId.isNoSpace(data.id)) {
                            expect(data.name).to.contain(' ' + space);
                        }
                        expect(data.name).to.not.contain('  ' + space);
                    }


                    const names = data.name.split(space);
                    _.each(names, (n: string, index: number) => {
                        if (n && index) {
                            const a = n[0];
                            const b = n[n.length - 1];
                            if (!(a === " " || a === "," || b === " " || b === "." || b === "?" || b === "!" || b === ",")) {
                                if (!isId.isNoSpace(data.id)) {
                                    throw Error('space surrounded: a or b not equal space:' + data.name + ' +' + n + '+');
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


