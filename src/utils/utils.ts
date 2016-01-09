/// <reference path="../../typings/tsd.d.ts" />
import _ = require("underscore");

const union = <T1, T2>(o1: T1, o2: T2): T1 & T2 => _.extend({}, o1, o2);
const union3 = <T1, T2, T3>(o1: T1, o2: T2, o3: T3): T1 & T2 & T3 => _.extend({}, o1, o2, o3);

export = {
    union,
    union3
};