var renderer_1 = require('../../helper/renderer');
var exp = [];
exp.push(renderer_1.tList({
    t: 'Present',
    list: [
        { l: 'I <p>am</p>' },
        { l: 'you <p>are</p>' },
        { l: 'he, she, it <p>is</p>' },
        { l: 'we <p>are</p>' },
        { l: 'you <p>are</p>' },
        { l: 'they <p>are</p>' }
    ]
}));
exp.push(renderer_1.tList({
    t: 'Past',
    list: [
        { l: 'I <p>was</p>' },
        { l: 'you <p>were</p>' },
        { l: 'he, she, it <p>was</p>' },
        { l: 'we <p>were</p>' },
        { l: 'you <p>were</p>' },
        { l: 'they <p>were</p>' }
    ]
}));
exp.push(renderer_1.tList({
    t: 'Negation',
    list: [
        { l: 'I am <p>not</p>' },
        { l: 'I was <p>not</p>' },
        { l: 'he, she, it was <p>not</p>' },
        { l: 'we are <p>not</p>' },
        { l: 'they were <p>not</p>' }
    ]
}));
exp.push(renderer_1.tList({
    t: 'Questions',
    list: [
        { l: 'They <p>are</p> tired.' },
        { l: '<p>Are</p> they tired?' },
    ]
}));
exp.push(renderer_1.tList({
    t: 'Answers',
    list: [
        { l: 'Are you tired?' },
        { l: '-Yes.' },
        { l: '-Yes, I am tired.' },
        { s: ' ' },
        { l: 'Are you hungry?' },
        { l: '-Yes.' },
        { l: '-Yes, I am hungry.' },
        { s: ' ' },
        { l: 'Are you sleepy?' },
        { l: '-No.' },
        { l: '-No, I am not sleepy.' }
    ]
}));
module.exports = {
    exp: exp
};
