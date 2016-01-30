/// <reference path="../../../typings/tsd.d.ts" />
class Point {

    constructor(public x: any, public y: any, public time?: any) {
        this.x = x;
        this.y = y;
        this.time = time || new Date().getTime();
    }

    velocityFrom(start:any) {
        return (this.time !== start.time) ? this.distanceTo(start) / (this.time - start.time) : 1;
    };

    distanceTo(start:any) {
        return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
    };

}

export = Point;