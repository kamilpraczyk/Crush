/// <reference path="../../typings/tsd.d.ts" />
import Dispatcher = require('./Dispatcher');
import utils = require('../utils/utils');

const AppDispatcher = utils.union3({}, Dispatcher.prototype, {

    /**
     * A bridge function between the views and the dispatcher, marking the action
     * as a view action.  Another variant here could be handleServerAction.
     * @param  {object} action The data coming from the view.
     */
    handleViewAction: function(action: any) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    },
    

});

export = {
    handleViewAction: AppDispatcher.handleViewAction,
    register: AppDispatcher.register,
    dispatch: AppDispatcher.dispatch,
    waitFor : AppDispatcher.waitFor
};