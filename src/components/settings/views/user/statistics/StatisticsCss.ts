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
    correct: css.font.color.success,
    incorrect: css.font.color.fail,
    rest: css.font.color.merge

});