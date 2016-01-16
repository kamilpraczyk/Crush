/// <reference path="../../../typings/tsd.d.ts" />
import AppDispatcher = require('../../dispatcher/AppDispatcher');
import utils = require('../utils');
import _ = require('underscore');
import { each, isFunction } from 'underscore';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

export function createStore(spec: any) {
    const emitter = new EventEmitter();
    emitter.setMaxListeners(0);

    const store = utils.union({
        emitChange() {
            emitter.emit(CHANGE_EVENT);
        },

        addChangeListener(callback: Function) {
            emitter.on(CHANGE_EVENT, callback);
        },

        removeChangeListener(callback: Function) {
            emitter.removeListener(CHANGE_EVENT, callback);
        }
    }, spec);

    // Auto-bind store methods for convenience
    each(store, (val, key) => {
        if (isFunction(val)) {
            store[key] = store[key].bind(store);
        }
    });

    return store;
}