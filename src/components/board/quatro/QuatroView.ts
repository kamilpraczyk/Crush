import React = require('react');
import QuatroCss = require('./QuatroCss');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import {BoardFace} from '../../../stores/board/BoardInterfaces';
import BoardStore = require('../../../stores/board/BoardStore');
import Signature = require('../../signature/index');
import MenuActions = require('../menu/MenuActions');
import MenuView = require('../menu/MenuView');
const {div} = React.DOM;

interface QuatroStateFace {
    quatroPressedPictureId: string,
    quatroPictures: Array<BoardFace>,
    text: string,
    lessonData: BoardFace
}

function getState() {
    return BoardStore.getQuatroState()
}

class QuatroView extends React.Component<{}, QuatroStateFace>{

    constructor() {
        super();
        this.state = getState();
        this.onClickPic = this.onClickPic.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps() {
        this.state = getState();
    }

    componentDidMount() {
        BoardStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        BoardStore.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState(getState());
    }

    getMenu() {

        let menu = [
            {
                id: 'prev',
                icon: 'icon-left-open',
                onClick: MenuActions.requestPrev
            },
            {
                id: 'next',
                icon: 'icon-right-open',
                onClick: MenuActions.requestNext
            }
        ];

        return div({
            style: QuatroCss.getMenu(),
        }, MenuView({
            menu: menu
        }))
    }

    onClickPic(id: string) {
        AppDispatcher.handleViewAction({
            actionType: Constants.CHOOSE_PICTURE,
            id: id
        });
    }

    getQuatro() {
        let id = this.state.lessonData.id;
        var tabEl = this.state.quatroPictures.map(function(tab) {
            return div({
                style: QuatroCss.getItem(tab.pic, this.state.quatroPressedPictureId, tab.id, id),
                onClick: QuatroCss.animate(this.onClickPic, tab.id)
            });
        }, this)


        let line1 = div({
            style: QuatroCss.getLine()
        }, tabEl[0], tabEl[1]);

        let line2 = div({
            style: QuatroCss.getLineText()
        },
            div({
                style: QuatroCss.getText(),
            }, this.state.text)
        );

        let line3 = div({
            style: QuatroCss.getLine()
        }, tabEl[2], tabEl[3]);


        return div({
            style: QuatroCss.getQuatro()
        }, line1, line2, line3)
    }

    render() {
        let center = div({
            style: QuatroCss.getCenter()
        }, this.getQuatro());

        return div({
            style: QuatroCss.getPanel()
        }, center, this.getMenu());
    }
};

export =  React.createFactory(QuatroView);
