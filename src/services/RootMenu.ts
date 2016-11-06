/// <reference path="../../typings/tsd.d.ts" />
import _ = require('underscore');
import dictionary = require('../utils/dictionary');
import css = require('../utils/css/css');

const RootType = {
    close: 'close',
    lessons: 'lessons',
    explenation: 'explenation',
    settings: 'settings',
    user: 'user',
}

export interface RootFace {
    id: string,
    name: string,
    backUrl: string,
    active: boolean,
    scroll: number
}

export interface RootFaces {
    [id: string]: RootFace;
}

const _rootList: RootFaces = {
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
        active: true,
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
};


class RootMenu {

    private rootList = _rootList;
    private minimalized = false;
    private activeId: string = null;

    constructor(id: string) {
        this.activeId = id;
    }
    setScrollPosition(top: number) {
        this.rootList[this.activeId].scroll = top;
    }

    resetExplenationScroll() {
        this.rootList[RootType.explenation].scroll = 0;
    }

    getScrollPosition() {
        return this.rootList[this.activeId].scroll;
    }

    getRootMenu() {
        return this.rootList;
    }
    getActiveId() {
        return this.activeId;
    }
    isMinimalized() {
        return this.minimalized;
    }
    showMenu() {
        this.minimalized = false;
    }

    setRootMenuTo(id: string) {
        if (id === RootType.close) {
            this.minimalized = true;
        } else {
            this.minimalized = false;
            this.rootList[this.activeId].active = false;
            this.activeId = id;
            this.rootList[this.activeId].active = true;
        }
    }
}

export {
RootMenu,
RootType
}