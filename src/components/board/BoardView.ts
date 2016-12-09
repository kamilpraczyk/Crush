import React = require('react');
import BoardCss = require('./BoardCss');
import DrawView = require('./draw/DrawView');
import RadioView = require('./radio/RadioView');
import InradioView = require('./inradio/InradioView');
import QuatroView = require('./quatro/QuatroView');
import OneTwoThreeView = require('./oneTwoThree/OneTwoThreeView');
import MultiRadioView = require('./multiRadio/MultiRadioView');
import GratulationView = require('./gratulation/GratulationView')
import { isId } from '../../lessons/helper/constants';
import { getState } from '../../services';

const {div} = React.DOM;

function getView() {
    const s = getState();
    const state = s.lessonsCatalog.current.answer;
    const id = s.lessonsCatalog.current.board.data.id;

    if (isId.isDraw(id)) return DrawView(state);
    if (isId.isFourPictures(id)) return QuatroView(state);
    if (isId.isFourWords(id)) return QuatroView(state);
    if (isId.isInradio(id)) return InradioView(state);
    if (isId.isRadio(id)) return RadioView(state);
    if (isId.isMultiRadio(id)) return MultiRadioView(state);
    if (isId.isOneTwoThree(id)) return OneTwoThreeView(state);

    console.error('GetView not recognized by id:' + id);
    return null;
}


function render() {
    const s = getState();
    if (!s.rootMenu.isMinimalized) return null;

    return div({
        style: BoardCss.getPanel()
    },
        GratulationView(),
        getView()
    );
}

export =  render;
