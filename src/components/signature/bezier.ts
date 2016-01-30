/// <reference path="../../../typings/tsd.d.ts" />
export default class Bezier {

  constructor(public startPoint:any,public control1:any,public control2:any,public endPoint:any) {
    this.startPoint = startPoint;
    this.control1 = control1;
    this.control2 = control2;
    this.endPoint = endPoint;
  }

  length() {
    var steps = 10,
        length = 0,
        i:any, t:any, cx:any, cy:any, px:any, py:any, xdiff:any, ydiff:any;

    for (i = 0; i <= steps; i++) {
        t = i / steps;
        cx = this._point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
        cy = this._point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
        if (i > 0) {
            xdiff = cx - px;
            ydiff = cy - py;
            length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
        }
        px = cx;
        py = cy;
    }
    return length;
  }

  _point(t:any, start:any, c1:any, c2:any, end:any) {
    return start * (1.0 - t) * (1.0 - t)  * (1.0 - t)
      + 3.0 *  c1    * (1.0 - t) * (1.0 - t)  * t
      + 3.0 *  c2    * (1.0 - t) * t          * t
      +        end   * t         * t          * t;
  }

}