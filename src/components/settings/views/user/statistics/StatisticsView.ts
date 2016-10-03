
/// <reference path="../../../../../../typings/tsd.d.ts" />
import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import css = require('../../../../../utils/css/css');
import StatisticsCss = require('./StatisticsCss');
import HomeStore = require('../../../../../stores/home/HomeStore');
import BoardStore = require('../../../../../stores/board/BoardStore');
import modelLessons = require('../../../../../lessons/lessons');
const {lessonsEntriesLength} = modelLessons;
import ReactDOM = require('react-dom');
const {div, canvas} = React.DOM;
const pie = 'pie';

function render(props: Props) {

    function getLegend(text: string, colour: string) {
        return div({
            style: StatisticsCss.getBrickLine()
        }, div({
            style: StatisticsCss.getBrick(colour)
        }), text);
    }

    function getBox() {
        const d = dictionary.statistics;

        return div({
            style: CommonCss.getBox()
        },
            div({ style: CommonCss.getBoxSplit() },
                div({ style: CommonCss.getBoxLine() }, d.titleEntries),
                canvas({
                    ref: pie,
                    style: StatisticsCss.getPie()
                })
            ),
            div({ style: CommonCss.getBoxSplit() },
                getLegend(d.entriesCorrect + ' ' + props.entriesCorrect, StatisticsCss.correct),
                getLegend(d.entriesIncorrect + ' ' + props.entriesIncorrect, StatisticsCss.incorrect),
                getLegend(d.entriesUndane + ' ' + props.entriesUndane, StatisticsCss.rest)
            )
        );
    }

    return div({
        style: CommonCss.getPanel(!props.isVisible)
    }, div({
        style: CommonCss.getContainer()
    }, getBox()));
}

function rerenderChart(props: Props, region: any) {
    if (region) {
        const canvas = region;
        const ctx = canvas.getContext("2d");
        let lastend = 0;

        const correct = 360 * props.entriesCorrect / props.entriesAll;
        const incorrect = 360 * props.entriesIncorrect / props.entriesAll;
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


interface State {
    region: any
}

function getProps() {
    const home = HomeStore.getStateHome();
    const status = home.status;
    return {
        entriesAll: lessonsEntriesLength,
        entriesUndane: lessonsEntriesLength - status.entriesCorrect - status.entriesIncorrect,
        entriesCorrect: status.entriesCorrect,
        entriesIncorrect: status.entriesIncorrect,
        isVisible: !!home.user.email
    }
}
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