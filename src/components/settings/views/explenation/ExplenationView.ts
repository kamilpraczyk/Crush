import React = require('react');
import ExplenationCss = require('./ExplenationCss');
import ButtonView = require('../../../button/ButtonView');
import dictionary = require('../../../../utils/dictionary');
import { getState, APIState } from '../../../../services';
import { events } from '../../../../events';
const {div} = React.DOM;

function render() {
    const apiState = getState();
    const explenation = apiState.lessonsCatalog.current.board.data.explenation;

    if (!explenation) return null;

    const title = div({
        style: ExplenationCss.getTitle(),
        onClick: () => events.readEvent.publish(apiState.lessonsCatalog.lessonsTitle),
    }, apiState.lessonsCatalog.lessonsTitle);

    const buttonGoPractice = ButtonView({
        name: dictionary.GO_TEST,
        isExpandWidth: true,
        onClick: () => events.goTest.publish()
    });

    const body = div({
        style: ExplenationCss.getBody()
    },
        div({
            style: ExplenationCss.getBodyContent()
        }, explenation.exp),
        buttonGoPractice
    );

    return div({
        style: ExplenationCss.getPanel()
    }, title, body);
};

export =  render;
