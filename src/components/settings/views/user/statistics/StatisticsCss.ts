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
/*
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
}*/
export = {
    getPie: () => css.get(pie),
    getBrickLine: () => css.get(brickLine),
    getBrick: (colour: string) => css.get(brick, { backgroundColor: colour }),
    getCorrectPercentage: () => css.get(correctPercentage),
    getLessonsFinished: () => css.get(lessonsFinished),
    getLessonsFinishedMark: () => css.get(lessonsFinishedMark),
  //  getIconSets: () => css.get(iconSet),
  //  getIcon: (url: string) => css.get(icon, { backgroundImage: `url(${url})` }),
  //  getIconNumber: () => css.get(iconNumber),

    correct: css.font.color.success,
    incorrect: css.font.color.fail,
    rest: css.font.color.merge
};