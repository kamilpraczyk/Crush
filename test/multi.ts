/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import _ = require("underscore");
import { multi, space, isId } from '../src/lessons/helper/constants';
import { goThrough, mock } from './goThrough';

describe('Multi - ', () => {

    beforeEach(() => mock());

    it('correct - should have isMultiAnswer when "multi" detected', () => {
        goThrough(data => {
            data.correct && data.correct.map(correct => {
                if (correct.indexOf(multi) !== -1) expect(isId.isMultiAnswer(data.id)).to.be(true);
            });
        });
    });

    it('incorrect - should have isMultiAnswer when "multi" detected', () => {
        goThrough(data => {
            data.incorrect && data.incorrect.map(incorrect => {
                if (incorrect.indexOf(multi) !== -1) expect(isId.isMultiAnswer(data.id)).to.be(true);
            });
        });
    });


    it('correct - should have isMultiAnswer and isRadio when "multi" detected, (narrow down implementation)', () => {
        goThrough(data => {
            data.correct && data.correct.map(correct => {
                if (correct.indexOf(multi) !== -1) {
                    expect(isId.isMultiAnswer(data.id)).to.be(true);
                    expect(isId.isRadio(data.id)).to.be(true);
                }
            });
        });
    });

    it('incorrect - should have isMultiAnswer and isRadio when "multi" detected (narrow down implementation)', () => {
        goThrough(data => {
            data.incorrect && data.incorrect.map(incorrect => {
                if (incorrect.indexOf(multi) !== -1) {
                    expect(isId.isMultiAnswer(data.id)).to.be(true);
                    expect(isId.isRadio(data.id)).to.be(true);
                }
            });
        });
    });


    it('name  - should not contain "multi"', () => goThrough(data => expect(data.name).to.not.contain(multi)));

    it('correct  - should contain "multi" if isMultiAnswer', () => goThrough(data => {
        if (isId.isMultiAnswer(data.id)) {
            expect(data.correct.length).to.be.greaterThan(0);
            data.correct.map(correct => expect(correct).to.contain(' ' + multi + ' '));
        }
    }));

    it('incorrect  - should contain "multi" if isMultiAnswer', () => goThrough(data => {
        if (isId.isMultiAnswer(data.id)) {
            expect(data.incorrect.length).to.be.greaterThan(0);
            data.incorrect.map(incorrect => expect(incorrect).to.contain(' ' + multi + ' '));
        }
    }));

    it('name  - should contain twice "space" if isMultiAnswer', () => goThrough(data => {
        if (isId.isMultiAnswer(data.id)) {
            expect(data.name.split(space).length).to.be.greaterThan(1);
        }
    }));


    it('correct - should have right space when "multi" detected', () => {
        goThrough(data => {
            data.correct && data.correct.map(correct => {
                if (correct.indexOf(multi) !== -1) {
                    expect(correct).to.contain(' ' + multi + ' ');
                    expect(correct).to.not.contain('  ');
                }
            });
        });
    });

    it('incorrect - should have right space when "multi" detected', () => {
        goThrough(data => {
            data.incorrect && data.incorrect.map(incorrect => {
                if (incorrect.indexOf(multi) !== -1) {
                    expect(incorrect).to.contain(' ' + multi + ' ');
                    expect(incorrect).to.not.contain('  ');
                }
            });
        });
    });

});