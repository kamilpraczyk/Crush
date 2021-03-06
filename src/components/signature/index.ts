import React = require('react');
import ReactDOM = require('react-dom');
import Bezier from "./bezier";
import Point = require("./point");
import css = require('../../utils/css/css');

interface Props {
    id: string,
    velocityFilterWeight?: number,
    minWidth?: number,
    maxWidth?: number,
    dotSize?: number,

    penColor?: string,
    onEnd?: number,
    onBegin?: number,
    backgroundColor?: string,
    onGetInterface: (onClear: () => void) => void
}
interface State {
    velocityFilterWeight: number
}

class SignaturePad extends React.Component<Props, State> {

    public velocityFilterWeight: any;
    public minWidth: any;
    public maxWidth: any;
    public dotSize: any;
    public penColor: any;
    public onEnd: any;
    public onBegin: any;
    public backgroundColor: string;
    private _canvas: any;
    private _ctx: any;
    private _isEmpty: any;
    private points: any;
    private _lastVelocity: any;
    private _lastWidth: any;
    private _mouseButtonDown: any;
    private id: string;



    constructor(props: Props) {
        super(props);
        this.id = props.id;
        this.velocityFilterWeight = props.velocityFilterWeight || 0.7;
        this.minWidth = props.minWidth || 0.5;
        this.maxWidth = props.maxWidth || 2.5;
        this.dotSize = props.dotSize || function () {
            return (this.minWidth + this.maxWidth) / 2;
        };
        this.penColor = props.penColor || "white";
        this.backgroundColor = props.backgroundColor || "rgba(0,0,0,0)";
        this.onEnd = props.onEnd;
        this.onBegin = props.onBegin;
        this.clear = this.clear.bind(this);
    }

    componentDidMount() {
        this._canvas = ReactDOM.findDOMNode(this.refs["cv"]);
        this._ctx = this._canvas.getContext("2d");

        this._handleMouseEvents();
        this._handleTouchEvents();
        this.clear();
        this.props.onGetInterface(this.clear);
    }

    componentWillUnmount() {
        this.off();
    }


    componentWillReceiveProps(props: Props) {
        if (props.id !== this.id) {
            this.id = props.id
            this.clear();
        }
    }

    clear(e?: any) {
        if (e) {
            e.preventDefault();
        }
        var ctx = this._ctx;
        var canvas = this._canvas;

        ctx.fillStyle = "rgba(0,0,0,0)";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this._reset();
        this._resizeCanvas();
    }

    toDataURL(imageType: any, quality: any) {
        var canvas = this._canvas;
        return canvas.toDataURL.apply(canvas, arguments);
    }

    fromDataURL(dataUrl: any) {
        var self = this,
            image = new Image(),
            ratio = window.devicePixelRatio || 1,
            width = this._canvas.width / ratio,
            height = this._canvas.height / ratio;

        this._reset();
        image.src = dataUrl;
        image.onload = function () {
            self._ctx.drawImage(image, 0, 0, width, height);
        };
        this._isEmpty = false;
    }

    isEmpty() {
        return this._isEmpty;
    }

    _resizeCanvas() {
        var ctx = this._ctx;
        var canvas = this._canvas;
        // When zoomed out to less than 100%, for some very strange reason,
        // some browsers report devicePixelRatio as less than 1
        // and only part of the canvas is cleared then.
        var ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        ctx.scale(ratio, ratio);
    }

    _reset() {
        this.points = [];
        this._lastVelocity = 0;
        this._lastWidth = (this.minWidth + this.maxWidth) / 2;
        this._isEmpty = true;
        this._ctx.fillStyle = this.penColor;
    };

    _handleMouseEvents() {
        this._mouseButtonDown = false;

        this._canvas.addEventListener("mousedown", this._handleMouseDown.bind(this));
        this._canvas.addEventListener("mousemove", this._handleMouseMove.bind(this));
        document.addEventListener("mouseup", this._handleMouseUp.bind(this));
        window.addEventListener("resize", this.clear.bind(this));
    };

    _handleTouchEvents() {
        // Pass touch events to canvas element on mobile IE.
        this._canvas.style.msTouchAction = 'none';

        this._canvas.addEventListener("touchstart", this._handleTouchStart.bind(this));
        this._canvas.addEventListener("touchmove", this._handleTouchMove.bind(this));
        document.addEventListener("touchend", this._handleTouchEnd.bind(this));
    };

    off() {
        this._canvas.removeEventListener("mousedown", this._handleMouseDown);
        this._canvas.removeEventListener("mousemove", this._handleMouseMove);
        document.removeEventListener("mouseup", this._handleMouseUp);

        this._canvas.removeEventListener("touchstart", this._handleTouchStart);
        this._canvas.removeEventListener("touchmove", this._handleTouchMove);
        document.removeEventListener("touchend", this._handleTouchEnd);

        window.removeEventListener("resize", this._resizeCanvas);
    }

    _handleMouseDown(event: any) {
        if (event.which === 1) {
            this._mouseButtonDown = true;
            this._strokeBegin(event);
        }
    };

    _handleMouseMove(event: any) {
        if (this._mouseButtonDown) {
            this._strokeUpdate(event);
        }
    };

    _handleMouseUp(event: any) {
        if (event.which === 1 && this._mouseButtonDown) {
            this._mouseButtonDown = false;
            this._strokeEnd(event);
        }
    };

    _handleTouchStart(event: any) {
        var touch = event.changedTouches[0];
        this._strokeBegin(touch);
    };

    _handleTouchMove(event: any) {
        // Prevent scrolling.
        event.preventDefault();

        var touch = event.changedTouches[0];
        this._strokeUpdate(touch);
    };

    _handleTouchEnd(event: any) {
        var wasCanvasTouched = event.target === this._canvas;
        if (wasCanvasTouched) {
            this._strokeEnd(event);
        }
    };

    _strokeUpdate(event: any) {
        var point = this._createPoint(event);
        this._addPoint(point);
    };

    _strokeBegin(event: any) {
        this._reset();
        this._strokeUpdate(event);
        if (typeof this.onBegin === 'function') {
            this.onBegin(event);
        }
    };

    _strokeDraw(point: any) {
        var ctx = this._ctx,
            dotSize = typeof (this.dotSize) === 'function' ? this.dotSize() : this.dotSize;

        ctx.beginPath();
        this._drawPoint(point.x, point.y, dotSize);
        ctx.closePath();
        ctx.fill();
    };

    _strokeEnd(event: any) {
        var canDrawCurve = this.points.length > 2,
            point = this.points[0];

        if (!canDrawCurve && point) {
            this._strokeDraw(point);
        }
        if (typeof this.onEnd === 'function') {
            this.onEnd(event);
        }
    };

    _createPoint(event: any) {
        var rect = this._canvas.getBoundingClientRect();
        return new Point(
            event.clientX - rect.left,
            event.clientY - rect.top, null
        );
    };

    _addPoint(point: any) {
        var points = this.points,
            c2: any, c3: any,
            curve: any, tmp: any;

        points.push(point);

        if (points.length > 2) {
            // To reduce the initial lag make it work with 3 points
            // by copying the first point to the beginning.
            if (points.length === 3) points.unshift(points[0]);

            tmp = this._calculateCurveControlPoints(points[0], points[1], points[2]);
            c2 = tmp.c2;
            tmp = this._calculateCurveControlPoints(points[1], points[2], points[3]);
            c3 = tmp.c1;
            curve = new Bezier(points[1], c2, c3, points[2]);
            this._addCurve(curve);

            // Remove the first element from the list,
            // so that we always have no more than 4 points in points array.
            points.shift();
        }
    }

    _calculateCurveControlPoints(s1: any, s2: any, s3: any) {
        var dx1 = s1.x - s2.x, dy1 = s1.y - s2.y,
            dx2 = s2.x - s3.x, dy2 = s2.y - s3.y,

            m1 = { x: (s1.x + s2.x) / 2.0, y: (s1.y + s2.y) / 2.0 },
            m2 = { x: (s2.x + s3.x) / 2.0, y: (s2.y + s3.y) / 2.0 },

            l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1),
            l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2),

            dxm = (m1.x - m2.x),
            dym = (m1.y - m2.y),

            k = l2 / (l1 + l2),
            cm = { x: m2.x + dxm * k, y: m2.y + dym * k },

            tx = s2.x - cm.x,
            ty = s2.y - cm.y;

        return {
            c1: new Point(m1.x + tx, m1.y + ty, null),
            c2: new Point(m2.x + tx, m2.y + ty, null)
        };
    };

    _addCurve(curve: any) {
        var startPoint = curve.startPoint,
            endPoint = curve.endPoint,
            velocity: any, newWidth: any;

        velocity = endPoint.velocityFrom(startPoint);
        velocity = this.velocityFilterWeight * velocity
            + (1 - this.velocityFilterWeight) * this._lastVelocity;

        newWidth = this._strokeWidth(velocity);
        this._drawCurve(curve, this._lastWidth, newWidth);

        this._lastVelocity = velocity;
        this._lastWidth = newWidth;
    };

    _drawPoint(x: any, y: any, size: any) {
        var ctx = this._ctx;

        ctx.moveTo(x, y);
        ctx.arc(x, y, size, 0, 2 * Math.PI, false);
        this._isEmpty = false;
    };

    _drawCurve(curve: any, startWidth: any, endWidth: any) {
        var ctx = this._ctx,
            widthDelta = endWidth - startWidth,
            drawSteps: any, width: any, i: any, t: any, tt: any, ttt: any, u: any, uu: any, uuu: any, x: any, y: any;

        drawSteps = Math.floor(curve.length());
        ctx.beginPath();
        for (i = 0; i < drawSteps; i++) {
            // Calculate the Bezier (x, y) coordinate for this step.
            t = i / drawSteps;
            tt = t * t;
            ttt = tt * t;
            u = 1 - t;
            uu = u * u;
            uuu = uu * u;

            x = uuu * curve.startPoint.x;
            x += 3 * uu * t * curve.control1.x;
            x += 3 * u * tt * curve.control2.x;
            x += ttt * curve.endPoint.x;

            y = uuu * curve.startPoint.y;
            y += 3 * uu * t * curve.control1.y;
            y += 3 * u * tt * curve.control2.y;
            y += ttt * curve.endPoint.y;

            width = startWidth + ttt * widthDelta;
            this._drawPoint(x, y, width);
        }
        ctx.closePath();
        ctx.fill();
    };

    _strokeWidth(velocity: any) {
        return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
    };

    public render() {
        const size = css.getSize();

        return React.DOM.canvas({
            ref: 'cv',
            style: {
                display: 'flex',
                flexGrow: 1,
                width: size.x - 5,
                height: size.y - 150,
                cursor: 'pointer',
                backgroundColor: this.props.backgroundColor
            } as CSSProperties
        })
    }

}


export = React.createFactory(SignaturePad);