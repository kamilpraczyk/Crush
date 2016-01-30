/// <reference path="../../../typings/tsd.d.ts" />
import AppDispatcher = require('../../dispatcher/AppDispatcher');
import Constants = require('../../constants/Constants');

const Actions = {

    requestRootItem: function(id: string) {
        AppDispatcher.handleViewAction({
            actionType: Constants.ROOT_ITEM_CLICK,
            id: id
        });
    },
    
    requestMaximalizeSettings: function() {
        AppDispatcher.handleViewAction({
            actionType: Constants.MAXIMALIZE_SETTINGS
        });
    },



};

export = Actions;