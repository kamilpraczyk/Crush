"use strict";
var expect = require('expect.js');
var goThrough_1 = require('./goThrough');
describe('Endings -', function () {
    describe('name - should not end with ', function () {
        it(' - ', function () {
            goThrough_1.goThrough(function (board) { expect(board.name[board.name.length - 1]).to.not.eql('-'); });
        });
        it(' " ', function () {
            goThrough_1.goThrough(function (board) { expect(board.name[board.name.length - 1]).to.not.eql('"'); });
        });
        it(" ' ", function () {
            goThrough_1.goThrough(function (board) { expect(board.name[board.name.length - 1]).to.not.eql("'"); });
        });
    });
});
