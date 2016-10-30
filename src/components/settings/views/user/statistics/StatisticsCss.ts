/// <reference path="../../../../../../typings/tsd.d.ts" />
import css = require('../../../../../utils/css/css');
import utils = require('../../../../../utils/utils');


const pie: CSSProperties = {
    width: 250,
    height: 125
}

const brick: CSSProperties = {
    display: 'inline-flex',
    border: '1px solid white',
    padding: 7,
    marginRight: 10
}

const brickLine: CSSProperties = {
    padding: 7,
    fontSize: css.font.fontSize.micro,
    display: 'flex',
    flexFlow: 'row nowrap',
    width: '100%',
    justifyContent: 'flex-start'
}

const correctPercentage: CSSProperties = {
    color: css.font.color.success,
    alignItems: 'center',
    display: 'flex'
}

const lessonsFinished: CSSProperties = {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'row'
}
const lessonsFinishedMark: CSSProperties = {
    color: css.font.color.success,
    marginLeft: '1vw'
}

const icon: CSSProperties = {
    display: 'block',
    width: 32,
    height: 32,
    backgroundImage: '',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginRight: 10
}
const iconNumber: CSSProperties = {
    display: 'block',
    minWidth: 150, //to keep them in middle
    textAlign: 'left'
}

const iconSet: CSSProperties = {
    display: 'flex',
    flexGrow: 1,
    width: '100%',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
}
export = utils.union(css, {

    getPie() {
        return css.get(pie);
    },
    getBrickLine() {
        return css.get(brickLine);
    },
    getBrick(colour: string) {
        return css.get(brick, { backgroundColor: colour })
    },
    getCorrectPercentage() {
        return css.get(correctPercentage);
    },
    getLessonsFinished() {
        return css.get(lessonsFinished);
    },
    getLessonsFinishedMark() {
        return css.get(lessonsFinishedMark);
    },
    getIconSets() {
        return css.get(iconSet);
    },
    getIcon(url: string) {
        return css.get(icon, { backgroundImage: `url(${url})` });
    },
    getIconNumber() {
        return css.get(iconNumber);
    },

    correct: css.font.color.success,
    incorrect: css.font.color.fail,
    rest: css.font.color.merge

});