/// <reference path="../../../../../../typings/tsd.d.ts" />
import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import css = require('../../../../../utils/css/css');
import StatisticsCss = require('./StatisticsCss');
import utils = require('../../../../../utils/utils');
import ReactDOM = require('react-dom');
import { getState } from '../../../../../services';
const {div, canvas} = React.DOM;
const pie = 'pie';

function rerenderChart(region: any) {
    const state = getState();
    const status = state.lessonsCatalog.status;
    if (region) {
        const canvas = region;
        const ctx = canvas.getContext("2d");
        let lastend = 0;

        const correct = 360 * status.allBoardsCorrect / status.allBoardsLength;
        const incorrect = 360 * status.allBoardsIncorrect / status.allBoardsLength;
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

function render() {
    const props = getState();
    const status = props.lessonsCatalog.status;

    function getPercentStatus() {
        return div({
            style: StatisticsCss.getCorrectPercentage()
        }, status.entriesCorrectPercentage);
    }

    function getLessonsFinished() {
        return div({
            style: StatisticsCss.getLessonsFinished()
        },
            div({}, dictionary.statistics.lessonsFinished + ' '),
            div({
                style: StatisticsCss.getLessonsFinishedMark()
            }, + status.finishedLessons));
    }

    function getIconStatistics() {
        return status.iconSetStatus.map(item => {
            return div({
                key: item.icon,
                style: StatisticsCss.getIconSets()
            },
                div({
                    style: StatisticsCss.getIcon(item.icon)
                }),
                div({
                    style: StatisticsCss.getIconNumber()
                }, item.name)
            )
        })
    }


    function getLegend(text: string, colour: string) {
        return div({
            style: StatisticsCss.getBrickLine()
        }, div({
            style: StatisticsCss.getBrick(colour)
        }), text);
    }


    function getBox() {

        return div({
            style: CommonCss.getBox()
        },
            div({ style: CommonCss.getBoxSplitToCenter() },
                div({ style: CommonCss.getBoxLine() }, dictionary.statistics.titleEntries),
                canvas({
                    ref: pie,
                    style: StatisticsCss.getPie()
                }),
                getPercentStatus()
            ),
            div({ style: CommonCss.getBoxSplit() },
                getLegend(dictionary.statistics.entriesCorrect + ' ' + status.allBoardsCorrect, StatisticsCss.correct),
                getLegend(dictionary.statistics.entriesIncorrect + ' ' + status.allBoardsIncorrect, StatisticsCss.incorrect),
                getLegend(dictionary.statistics.entriesUndane + ' ' + status.allBoardsUndane, StatisticsCss.rest)
            ),
            div({
                style: CommonCss.getBoxLine()
            }, getLessonsFinished()),
            div({
                style: CommonCss.getBoxSplitToCenter()
            }, getIconStatistics())
        );
    }

    return div({
        style: CommonCss.getPanel(!props.pass.user.email)
    }, div({
        style: CommonCss.getContainer()
    }, getBox()));
}

interface State {
    region: any
}

class View extends React.Component<void, State>{

    refs: any
    constructor() {
        super();
        this.state = {
            region: null
        };
    }

    componentDidUpdate() {
        rerenderChart(this.state.region);
    }

    componentDidMount() {
        this.state.region = ReactDOM.findDOMNode(this.refs[pie]);
        rerenderChart(this.state.region);
    }

    render() {
        return render();
    }
};

export =  React.createFactory(View);