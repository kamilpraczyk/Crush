
/// <reference path="../../typings/tsd.d.ts" />
const Promise = require('es6-promise').Promise;
import utils = require('../utils/utils');

let _callbacks = [] as any[];
let _promises = [] as any[];

const Dispatcher = function() { };
Dispatcher.prototype = utils.union3({}, Dispatcher.prototype, {

    /**
     * Register a Store's callback so that it may be invoked by an action.
     * @param {function} callback The callback to be registered.
     * @return {number} The index of the callback within the _callbacks array.
     */
    register: function(callback: Function) {
        _callbacks.push(callback);
        return _callbacks.length - 1; // index
    },

    /**
     * dispatch
     * @param  {object} payload The data from the action.
     */
    dispatch: function(payload: Object) {
        // First create array of promises for callbacks to reference.
        var resolves = [] as any[];
        var rejects = [] as any[];
        _promises = _callbacks.map(function(_, i) {
            return new Promise(function(resolve: any, reject: any) {
                resolves[i] = resolve;
                rejects[i] = reject;
            });
        });
        // Dispatch to callbacks and resolve/reject promises.
        _callbacks.forEach(function(callback: Function, i: any) {
            // Callback can return an obj, to resolve, or a promise, to chain.
            // See waitFor() for why this might be useful.
            Promise.resolve(callback(payload)).then(function() {
                resolves[i](payload);
            }, function() {
                rejects[i](new Error('Dispatcher callback unsuccessful'));
            });
        });
        _promises = [];
    }
});

export = Dispatcher;