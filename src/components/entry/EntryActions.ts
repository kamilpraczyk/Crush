/// <reference path="../../../typings/tsd.d.ts" />
import AppDispatcher = require('../../dispatcher/AppDispatcher');
import TodoConstants = require('../../constants/TodoConstants');

const EntryActions = {

    create: function(text: string) {
        AppDispatcher.handleViewAction({
            actionType: TodoConstants.TODO_CREATE,
            text: text
        });
    },

    destroy: function(id: string) {
        AppDispatcher.handleViewAction({
            actionType: TodoConstants.TODO_DESTROY,
            id: id
        });
    },

};

export = EntryActions;