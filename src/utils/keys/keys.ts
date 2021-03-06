/// <reference path="../../../typings/tsd.d.ts" />
import _ = require("underscore");

const keys = {
    left: 37,
    up: 38,
    right: 39,
    down: 40
}

function dispatcher(e: any) {
    //console.log('e', e);
    switch (e.keyCode) {
        case 37:
            // console.log('left');
            break;
        case 38:
            // console.log('up');
            prev();
            break;
        case 39:
            // console.log('right');
            break;
        case 40:
            // console.log('down');
            next();
            break;
    }
}
let element: any = null;

function findNextTabStop(el: Element) {
    var universe = document.querySelectorAll('input, button, select, textarea, a[href]');
    var list = Array.prototype.filter.call(universe, function (item: any) { return item.tabIndex >= "0" });
    var index = list.indexOf(el) || 0;
    return list[index + 1] || list[0];
}

function findPrevTabStop(el: Element) {
    var universe = document.querySelectorAll('input, button, select, textarea, a[href]');
    var list = Array.prototype.filter.call(universe, function (item: any) { return item.tabIndex >= "0" });
    var index = list.indexOf(el) || 0;
    return list[index - 1] || list[list.length - 1];
}

function next() {
    element = findNextTabStop(document.activeElement);
    element.focus();
}

function prev() {
    element = findPrevTabStop(document.activeElement);
    element.focus();
}

function bindKeys() {
    document.addEventListener("keydown", dispatcher);
}

export =    bindKeys;

