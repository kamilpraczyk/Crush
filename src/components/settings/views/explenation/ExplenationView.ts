import React = require('react');
const {div} = React.DOM;
import ExplenationCss = require('./ExplenationCss');
import utils = require('../../../../utils/utils');
import ButtonView = require('../../../button/ButtonView');
import dictionary = require('../../../../utils/dictionary');
import { getState } from '../../../../services';
import { events } from '../../../../events';

function render() {
    const s = getState();
    const explenation = s.lessonsCatalog.current.board.data.explenation;

    if (explenation) {

        const title = div({
            style: ExplenationCss.getTitle(),
            onClick: () => utils.voice.read(s.lessonsCatalog.lessonsTitle)
        }, s.lessonsCatalog.lessonsTitle);

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

    }
    return null;
};

export =  render;
