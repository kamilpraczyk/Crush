/// <reference path="../../../../../../typings/tsd.d.ts" />
import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import css = require('../../../../../utils/css/css');
import StatisticsCss = require('./StatisticsCss');
import utils = require('../../../../../utils/utils');
import ReactDOM = require('react-dom');
import {getState} from '../../../../../services';
const {div, canvas} = React.DOM;
const pie = 'pie';


function rerenderChart(props: Props, region: any) {
    const status = props.lessonsStatus.getStatus();
    if (region) {
        const canvas = region;
        const ctx = canvas.getContext("2d");
        let lastend = 0;

        const correct = 360 * status.entriesCorrect / status.entriesAll;
        const incorrect = 360 * status.entriesIncorrect / status.entriesAll;
        const rest = 360 - correct - incorrect;

        let data = [rest, correct, incorrect]; // If you add more data values make sure you add more colors
        let myTotal = 0; // Automatically calculated so don't touch
        const myColor = [StatisticsCss.rest, StatisticsCss.correct, StatisticsCss.incorrect]; // Colors of each slice

        for (let e = 0; e < data.length; e++) {
            myTotal += data[e];
        }

        for (let i = 0; i < data.length; i++) {
            ctx.fillStyle = myColor[i];
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, canvas.height / 2);
            // Arc Parameters: x, y, radius, startingAngle (radians), endingAngle (radians), antiClockwise (boolean)
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + (Math.PI * 2 * (data[i] / myTotal)), false);
            ctx.lineTo(canvas.width / 2, canvas.height / 2);
            ctx.fill();
            lastend += Math.PI * 2 * (data[i] / myTotal);
        }
    }
}

function getPercentStatus(props: Props) {
    const status = props.lessonsStatus.getStatus();
    return div({
        style: StatisticsCss.getCorrectPercentage()
    }, status.entriesCorrectPercentage);
}

function getLessonsFinished(props: Props) {
    const status = props.lessonsStatus.getStatus();
    return div({
        style: StatisticsCss.getLessonsFinished()
    },
        div({}, dictionary.statistics.lessonsFinished + ' '),
        div({
            style: StatisticsCss.getLessonsFinishedMark()
        }, + status.finishedLessons));
}



function getLegend(text: string, colour: string) {
    return div({
        style: StatisticsCss.getBrickLine()
    }, div({
        style: StatisticsCss.getBrick(colour)
    }), text);
}


function getBox(props: Props) {
    const d = dictionary.statistics;
    const status = props.lessonsStatus.getStatus();

    return div({
        style: CommonCss.getBox()
    },
        div({ style: CommonCss.getBoxSplitToCenter() },
            div({ style: CommonCss.getBoxLine() }, d.titleEntries),
            canvas({
                ref: pie,
                style: StatisticsCss.getPie()
            }),
            getPercentStatus(props)
        ),
        div({ style: CommonCss.getBoxSplit() },
            getLegend(d.entriesCorrect + ' ' + status.entriesCorrect, StatisticsCss.correct),
            getLegend(d.entriesIncorrect + ' ' + status.entriesIncorrect, StatisticsCss.incorrect),
            getLegend(d.entriesUndane + ' ' + status.entriesUndane, StatisticsCss.rest)
        ),
        div({
            style: CommonCss.getBoxLine()
        }, getLessonsFinished(props))
    );
}



function render(props: Props) {
    return div({
        style: CommonCss.getPanel(!props.pass.user.email)
    }, div({
        style: CommonCss.getContainer()
    }, getBox(props)));
}

interface State {
    region: any
}

const getProps = function () {
    const s = getState();
    return {
        lessonsStatus: s.lessonsStatus,
        pass: s.pass.getStatus()
    }
};
const p = getProps();
declare type Props = typeof p;

class View extends React.Component<Props, State>{

    refs: any
    constructor(props: Props) {
        super(props);
        this.state = {
            region: null
        };
    }

    componentDidUpdate() {
        rerenderChart(getProps(), this.state.region);
    }

    componentDidMount() {
        this.state.region = ReactDOM.findDOMNode(this.refs[pie]);
        rerenderChart(getProps(), this.state.region);
    }

    render() {
        return render(getProps());
    }
};

export =  React.createFactory(View);