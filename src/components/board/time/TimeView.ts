import React = require('react');
import MenuView = require('../menu/MenuView');
import utils = require('../../../utils/utils');
import css = require('../../../utils/css/css');
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
    const s = css.getSize();
    const x = (s.x / 5);
    const y = (s.y / 5);

    let size = Math.min(x, y);
    size = Math.max(x, 50); //not smaller than 50px;
    if (size > 150) {
        size = 150;
    }
    return utils.round10(size, 1);
}



interface Props {
    hour: number;
    minute: number
}


class TimeView extends React.Component<Props, void>{
    private canvas: any = null;
    private ctx: any = null;
    private radius: any = null;
    private interval: any = null;
    private lastRadius = 0;

    constructor(props: Props) {
        super(props);
        this.draw = this.draw.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidMount() {
        this.drawClock();
    }

    componentDidUpdate() {
        this.drawClock();
    }
    drawClock() {
        clearInterval(this.interval);
        this.canvas = ReactDOM.findDOMNode(this.refs["canvas"]);
        this.ctx = this.canvas.getContext("2d");
        this.radius = this.canvas.height / 2;
        if (this.lastRadius) {
            this.ctx.translate(-this.lastRadius, -this.lastRadius); //reset before change
        }
        this.ctx.translate(this.radius, this.radius);
        this.lastRadius = 0 + this.radius;
        this.draw();
        this.interval = setInterval(this.draw, 1000);
    }

    draw() {
        drawClock(this.ctx, this.radius * 0.90, this.props.hour, this.props.minute);
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