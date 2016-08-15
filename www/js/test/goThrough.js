"use strict";
var modelLessons = require('../src/lessons/lessons');
var lessons = modelLessons.lessons, activeStartup = modelLessons.activeStartup;
var _ = require("underscore");
function goThrough(test) {
    _.mapObject(lessons, function (boards) {
        _.each(boards.lessons, function (board) {
            test(board);
        });
    });
}
exports.goThrough = goThrough;
