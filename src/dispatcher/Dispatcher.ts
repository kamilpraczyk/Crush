
/// <reference path="../../typings/tsd.d.ts" />
const Promise = require('es6-promise').Promise;
import utils = require('../utils/utils');

let _callbacks = [] as any[];
let _promises = [] as any[];

/**
    * Register a Store's callback so that it may be invoked by an action.
    * @param {function} callback The callback to be registered.
    * @return {number} The index of the callback within the _callbacks array.
    */
function handleViewAction(action: any) {
    dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
}

function register(callback: Function) {
    _callbacks.push(callback);
    return _callbacks.length - 1; // index
}

/**
 * dispatch
 * @param  {object} payload The data from the action.
 */
function dispatch(payload: Object) {
    // First create array of promises for callbacks to reference.
    var resolves = [] as any[];
    var rejects = [] as any[];
    _promises = _callbacks.map(function (_, i) {
        return new Promise(function (resolve: any, reject: any) {
            resolves[i] = resolve;
            rejects[i] = reject;
        });
    });
    // Dispatch to callbacks and resolve/reject promises.
    _callbacks.forEach(function (callback: Function, i: any) {
        // Callback can return an obj, to resolve, or a promise, to chain.
        // See waitFor() for why this might be useful.
        Promise.resolve(callback(payload)).then(function () {
            resolves[i](payload);
        }, function () {
            rejects[i](new Error('Dispatcher callback unsuccessful'));
        });
    });
    _promises = [];
}


/**
* @param  {array} promiseIndexes
* @param  {function} callback
*/
function waitFor(promiseIndexes: Array<any>, callback: Function) {
    var selectedPromises = promiseIndexes.map(index => {
        return _promises[index];
    });
    return Promise.all(selectedPromises).then(callback);
}


export default class Dispatcher {

    waitFor = waitFor;
    dispatch = dispatch;
    register = register;
    handleViewAction = handleViewAction

}

exports = Dispatcher;