/// <reference path="../../typings/tsd.d.ts" />
import AppDispatcher = require('../dispatcher/AppDispatcher');
import TodoConstants = require('../constants/TodoConstants');
import utils = require('../utils/utils');
import _ = require('underscore');
const EventEmitter = require('events').EventEmitter;

const CHANGE_EVENT = 'change';

let _todos = {};

function create(text: string) {
    // Using the current timestamp in place of a real id.
    var id = Date.now() + _.uniqueId();
    _todos[id] = {
        id: id,
        text: text
    };
}
create('one');
create('two');
create('three');


function destroy(id: string) {
    delete _todos[id];
}



const EntriesStore = utils.union3({}, EventEmitter.prototype, {

    /**
     * Get the entire collection of TODOs.
     * @return {object}
     */
    getAll: function() {
        return _todos;
    },

    emitChange: function() {
        EntriesStore.emit(CHANGE_EVENT);
    },


    addChangeListener: function(callback: Function) {
        EntriesStore.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback: Function) {
        EntriesStore.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherIndex: AppDispatcher.register(function(payload: { action: any }) {
        var action = payload.action;
        var text = null as string;

        switch (action.actionType) {
            case TodoConstants.TODO_CREATE:
                text = action.text.trim();
                if (text !== '') {
                    create(text);
                    EntriesStore.emitChange();
                }
                break;

            case TodoConstants.TODO_DESTROY:
                destroy(action.id);
                EntriesStore.emitChange();
                break;

            // add more cases for other actionTypes, like TODO_UPDATE, etc.
        }

        return true; // No errors. Needed by promise in Dispatcher.
    })

});

export = {
    getAll: EntriesStore.getAll,
    addChangeListener: EntriesStore.addChangeListener,
    removeChangeListener: EntriesStore.removeChangeListener
};