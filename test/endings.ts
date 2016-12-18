import sinon = require('sinon');
import expect = require('expect.js');
import _ = require('underscore');
import { goThrough, mock } from './goThrough';
import { capital } from '../src/lessons/helper/constants';

function getLastLetter(s: string) {
    return s[s.length - 1];
}

function getQuotaExeptions() {
    return _.values(capital.books);
}
describe('Endings -', () => {

    beforeEach(() => mock());

    describe('name - should not end with: ', () => {
        it(' - ', () => goThrough(data => { return expect(getLastLetter(data.name)).to.not.eql('-') }));
        it(' " ', () => goThrough(data => { return expect(getLastLetter(data.name)).to.not.eql(' "') }));
        it(" ' ", () => goThrough(data => { return expect(getLastLetter(data.name)).to.not.eql("'") }));
    });




    it('correct - are not end with: ', () => {
        goThrough(data => {
            data.correct && data.correct.map(correct => {
                if (!_.contains(getQuotaExeptions(), correct)) {
                    expect(getLastLetter(correct)).to.not.eql('"');
                }
                expect(getLastLetter(correct)).to.not.eql(' "');
                expect(getLastLetter(correct)).to.not.eql("'");
                expect(getLastLetter(correct)).to.not.eql("-");
            });
        });
    });


    it('incorrect - are not end with: ', () => {
        goThrough(data => {
            data.incorrect && data.incorrect.map(incorrect => {
                if (!_.contains(getQuotaExeptions(), incorrect)) {
                    expect(getLastLetter(incorrect)).to.not.eql('"');
                }
                expect(getLastLetter(incorrect)).to.not.eql(' "');
                expect(getLastLetter(incorrect)).to.not.eql("'");
                expect(getLastLetter(incorrect)).to.not.eql("-");
            });
        });
    });

});

