import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');
import { isId, TypeId } from '../../../lessons/helper/constants';

const header: CSSProperties = {
    marginTop: '1vh'
}
const headerShrink: CSSProperties = {
    marginTop: '1vh'
}

export = utils.union(css, {

    getHeader: (id: TypeId[]) => css.get(css.layout.getHeader(), header, isId.isAnalogTime(id) ? headerShrink : null),
    getInstructions: css.layout.getInstructions,
    getSupportIcon: () => css.icons.help,
});