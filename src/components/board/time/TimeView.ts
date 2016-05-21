import React = require('react');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import MenuView = require('../menu/MenuView');
import utils = require('../../../utils/utils');
import {BoardResult} from '../../../lessons/interface';
import _ = require('underscore');
const {div, canvas} = React.DOM;

import ReactDOM = require('react-dom');

function drawClock(ctx: any, radius: any, hour: number, minute: number) {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius, hour, minute);
}

function drawFace(ctx: any, radius: any) {
    var grad: any;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}

function drawNumbers(ctx: any, radius: any) {
    var ang: any;
    var num: any;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num < 13; num++) {
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}

function drawTime(ctx: any, radius: any, hour: number, minute: number) {
    var now = new Date();
    var hour = _.isNumber(hour) ? hour : now.getHours();
    var minute = _.isNumber(minute) ? minute : now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour = hour % 12;
    hour = (hour * Math.PI / 6) +
        (minute * Math.PI / (6 * 60)) +
        (second * Math.PI / (360 * 60));
    drawHand(ctx, hour, radius * 0.5, radius * 0.07);
    //minute
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    drawHand(ctx, minute, radius * 0.8, radius * 0.07);
    // second
    second = (second * Math.PI / 30);
    drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx: any, pos: any, length: any, width: any) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

function getSize() {
    const w = window;
    const d = document;
    const e = d.documentElement;
    const g = d.getElementsByTagName('body')[0];
    let x = w.innerWidth || e.clientWidth || g.clientWidth;
    x = (x / 3);
    let y = w.innerHeight || e.clientHeight || g.clientHeight;
    y = (y / 3);
    let size = Math.min(x, y);
    size = Math.max(x, 100); //not smaller than 100px;
    size = Math.min(x, 150); //bigger than 150px
    return utils.round10(size, 1);
}



interface Props {
    hour: number;
    minute: number
}


class TimeView extends React.Component<Props, {}>{
    private canvas: any = null;
    private ctx: any = null;
    private radius: any = null;
    private interval: any = null;

    constructor(props: Props) {
        super(props);
        this.draw = this.draw.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidMount() {
        this.canvas = ReactDOM.findDOMNode(this.refs["canvas"]);
        this.ctx = this.canvas.getContext("2d");
        this.radius = this.canvas.height / 2;
        this.ctx.translate(this.radius, this.radius);
        this.radius = this.radius * 0.90;
        this.draw();
        this.interval = setInterval(this.draw, 1000);
    }
    draw() {
        drawClock(this.ctx, this.radius, this.props.hour, this.props.minute);
    }

    render() {
        const size = getSize();
        return canvas({
            ref: 'canvas',
            style: {
                margin: 'auto',
                width: size,
                height: size
            },
            width: size,
            height: size
        });
    }
};

export = React.createFactory(TimeView);