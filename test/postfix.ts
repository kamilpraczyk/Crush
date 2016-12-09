/// <reference path="../typings/tsd.d.ts" />
import sinon = require('sinon');
import expect = require('expect.js');
import { RawData } from '../src/types';
import _ = require("underscore");
import { goThrough, mock } from './goThrough';

describe('Postfix', () => {

    beforeEach(() => mock());

    describe('when postfix is: . then correct is not ending on: ', () => {
        const isPostfix = (data: RawData) => { return data.postfix === "." };

        it('?', () => goThrough(data => { if (isPostfix(data)) expect(_.last(_.last(data.correct))).to.not.eql('?'); }));
        it('.', () => goThrough(data => { if (isPostfix(data)) expect(_.last(_.last(data.correct))).to.not.eql('.'); }));
        it('!', () => goThrough(data => { if (isPostfix(data)) expect(_.last(_.last(data.correct))).to.not.eql('!'); }));
    });

    describe('when postfix is: ? then correct is not ending on: ', () => {
        const isPostfix = (data: RawData) => { return data.postfix === "?" };

        it('?', () => goThrough(data => { if (isPostfix(data)) expect(_.last(_.last(data.correct))).to.not.eql('?'); }));
        it('.', () => goThrough(data => { if (isPostfix(data)) expect(_.last(_.last(data.correct))).to.not.eql('.'); }));
        it('!', () => goThrough(data => { if (isPostfix(data)) expect(_.last(_.last(data.correct))).to.not.eql('!'); }));
    });

    describe('when postfix is: ! then correct is not ending on: ', () => {
        const isPostfix = (data: RawData) => { return data.postfix === "!" };

        it('?', () => goThrough(data => { if (isPostfix(data)) expect(_.last(_.last(data.correct))).to.not.eql('?'); }));
        it('.', () => goThrough(data => { if (isPostfix(data)) expect(_.last(_.last(data.correct))).to.not.eql('.'); }));
        it('!', () => goThrough(data => { if (isPostfix(data)) expect(_.last(_.last(data.correct))).to.not.eql('!'); }));
    });



    it('postfix is defined as one of .!?', () => {
        goThrough(data => { data.postfix && expect(data.postfix).to.match(/^[?!.]/); });
    });




});