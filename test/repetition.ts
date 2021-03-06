import sinon = require('sinon');
import expect = require('expect.js');
import _ = require("underscore");
import { isId } from '../src/lessons/helper/constants';
import { goThrough, mock } from './goThrough';

describe('Repetition - ', () => {

    beforeEach(() => mock());

    it('correct - are not repeated (skip isRepeated)', () => {
        goThrough(data => {
            if (data.correct && !isId.isRepeated(data.id)) {
                expect(data.correct.length).to.be(_.unique(data.correct).length)
            }
        });
    });

    it('incorrect - are not repeated (skip isRepeated)', () => {
        goThrough(data => {
            if (data.incorrect && !isId.isRepeated(data.id)) {
                expect(data.incorrect.length).to.be(_.unique(data.incorrect).length);
            }
        });
    });

    it('incorrect && correct - are not repeated (skip isRepeated)', () => {
        goThrough(data => {
            if (data.incorrect && data.correct && !isId.isRepeated(data.id)) {
                const array = data.correct.concat(data.incorrect);
                expect(array.length).to.be(_.unique(array).length);
            }
        });
    });
});