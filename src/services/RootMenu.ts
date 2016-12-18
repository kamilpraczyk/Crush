import dictionary = require('../utils/dictionary');
import css = require('../utils/css/css');
import { RootFace, RootType } from '../types';

interface RootFaces {
    [id: string]: RootFace;
}

export interface RootMenuState {
    isMinimalized: boolean,
    scrollPosition: number,
    list: RootFaces,
    activeId: RootType
}

export class RootMenu {

    private list: RootFaces = {
        [RootType.user]: {
            id: RootType.user,
            name: dictionary.menu.USER,
            backUrl: css.backUrl.user,
            active: false,
            scroll: 0
        },
        [RootType.lessons]: {
            id: RootType.lessons,
            name: dictionary.menu.LESSONS,
            backUrl: css.backUrl.lessons,
            active: false,
            scroll: 0
        },
        [RootType.explenation]: {
            id: RootType.explenation,
            name: dictionary.menu.GRAMMAR,
            backUrl: css.backUrl.grammar,
            active: false,
            scroll: 0
        },
        [RootType.close]: {
            id: RootType.close,
            name: dictionary.menu.PRACTISE,
            backUrl: css.backUrl.menu,
            active: false,
            scroll: 0
        }
    }
    private isMinimalized = false;

    constructor(public activeId: RootType) { }

    showMenu(bool = false) { this.isMinimalized = bool; }
    resetExplenationScroll() { this.list[RootType.explenation].scroll = 0; }
    setScrollPosition(top: number) { this.list[this.activeId].scroll = top; }

    setRootMenuTo(id: RootType) {
        if (id === RootType.close) {
            this.isMinimalized = true;
        } else {
            this.isMinimalized = false;
            this.list[this.activeId].active = false;
            this.activeId = id;
            this.list[this.activeId].active = true;
        }
    }

    getState(): RootMenuState {
        return {
            isMinimalized: this.isMinimalized,
            scrollPosition: this.list[this.activeId].scroll,
            list: this.list,
            activeId: this.activeId,
        }
    }

}

