/// <reference path="../../../../../typings/tsd.d.ts" />
import AppDispatcher = require('../../../../dispatcher/AppDispatcher');
import Constants = require('../../../../constants/Constants');

const Actions = {

    requestSwitchAction: function(id: string) {
        AppDispatcher.handleViewAction({
            actionType: Constants.SWITCH_ACTION,
            id: id
        });
    },



};

export = Actions;