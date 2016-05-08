import React = require('react');
import PointsCss = require('./PointsCss');
import _ = require('underscore');
import BoardStore = require('../../../stores/board/BoardStore');
const {div} = React.DOM;

function getState() {
    return BoardStore.getPoints();
}

const state = getState();
declare type State = typeof state;

function getPanel(state: State) {

    const points = div({
        style: PointsCss.getPoints()
    }, state.points.display);

    return div({
        style: PointsCss.getPanel(),
        id: 'chart_div'
    }, points);
}


function gauge() {
    const google: any = window['google'];


    function drawChart() {

        var data = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Rank', _.random(20)]
        ]);
        var options = {
            width: 250,
            height: 250,
            redFrom: 20,
            redTo: 10,
            yellowFrom: 10,
            yellowTo: 5,
            greenFrom: 5,
            greenTo: 0,
            minorTicks: 20,
            max: 0,
            min: 20,
            majorTicks: ['20', '1']
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
        chart.draw(data, options);

    }
  //  drawChart();
}




class View extends React.Component<{}, State>{

    constructor() {
        super();
        this.state = getState()
    }

    componentWillReceiveProps() {
        this.setState(getState());
    }

    componentDidUpdate() {
        //gauge();//TODO gauge?
    }

    render() {
        return getPanel(this.state);
    }
};

export =  React.createFactory(View);
