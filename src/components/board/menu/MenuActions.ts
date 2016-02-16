/// <reference path="../../../../typings/tsd.d.ts" />
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');

const Actions = {

    requestNext: function() {
        AppDispatcher.handleViewAction({
            actionType: Constants.BOARD_NEXT
        });
    },

    requestPrev: function() {
        AppDispatcher.handleViewAction({
            actionType: Constants.BOARD_PREV
        });
    },


};

export = Actions;