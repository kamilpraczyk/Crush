import React = require('react');
import InradioCss = require('./InradioCss');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import MenuView = require('../menu/MenuView');
import ButtonView = require('../../button/ButtonView');
import {BoardResult} from '../../../lessons/interface';
import {isId, space} from '../../../lessons/helper/constants';
import _ = require('underscore');
const {div} = React.DOM;


function onRead(read: string) {
    AppDispatcher.handleViewAction({
        actionType: Constants.READ,
        read: read
    });
}

function getFooter() {
    return div({
        style: InradioCss.layout.getFooter()
    }, MenuView());
}

function getHeader(state: BoardResult) {
    let instructions: any = null;

    if (state.lessonData.info) {
        instructions = div({
            onClick: InradioCss.animate(onRead, state.lessonData.info),
            style: InradioCss.getInstructions(state.lessonData.id)
        }, state.lessonData.info);


        instructions = ButtonView({
            name: state.lessonData.info,
            onClick: function () {
                onRead(state.lessonData.info);
            }
        })
    }

    return div({
        style: InradioCss.getHeader(state.lessonData.id)
    },
        instructions
    );
}


function getBody(state: BoardResult) {

    function getItems(state: BoardResult) {
        return state.generatedList.map((name: string, index: number) => {

            let isFail = false;
            let isSuccess = false;
            if (state.selectedAnswer === name) {
                if (state.isCorrect) {
                    isSuccess = true;
                } else {
                    isFail = true;
                }
            }

            return ButtonView({
                key: name + index,
                name: name,
                isFail: isFail,
                isResponsibleCenter: true,
                isSuccess: isSuccess,
                onClick: function () {
                    AppDispatcher.handleViewAction({
                        actionType: Constants.CHOOSE_RADIO,
                        id: name
                    });
                }
            });
        });
    }

    const list = div({
        style: InradioCss.getList()
    }, getItems(state));


    if (state.text.indexOf(space) === -1) {
        return div({
            style: InradioCss.getBody()
        },
            div({
                style: InradioCss.getBodyContent()
            },
                ButtonView({
                    isResponsibleCenter: true,
                    isSuccess: true,
                    name: state.text,
                    onClick: function () {
                        onRead(state.text);
                    }
                })
            ));
    } else {
        const text = state.text.split(space);
        let firstPart: any = null;
        if (_.first(text)) {
            firstPart = ButtonView({
                name: _.first(text),
                onClick: function () {
                    onRead(_.first(text));
                }
            });
        }

        let lastPart: any = null;
        if (_.last(text)) {
            lastPart = ButtonView({
                name: _.last(text),
                onClick: function () {
                    onRead(_.last(text));
                }
            })
        }

        return div({
            style: InradioCss.getBody()
        }, div({
            style: InradioCss.getBodyContent()
        }, firstPart, list, lastPart));
    }
};


function render(state: BoardResult) {
    return div({
        key: 'inradioView',
        style: InradioCss.layout.getPanel()
    }, getHeader(state), getBody(state), getFooter());
};

export = render;
