/// <reference path="../../typings/tsd.d.ts" />
import _ = require('underscore');
import dictionary = require('../utils/dictionary');
import css = require('../utils/css/css');
import { clone } from '../utils/utils';
import { RootFace, RootType } from '../types';

interface RootFaces {
    [id: string]: RootFace;
}

interface State {
    isMinimalized: boolean,
    activeId: RootType,
    list: RootFaces
}

export function createRootMenu(activeId: RootType) {

    const state: State = {
        list: {
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
        },
        isMinimalized: false,
        activeId,
    }


    function showMenu() { state.isMinimalized = false; }
    function resetExplenationScroll() { state.list[RootType.explenation].scroll = 0; }
    function setScrollPosition(top: number) { state.list[state.activeId].scroll = top; }

    function setRootMenuTo(id: RootType) {
        if (id === RootType.close) {
            state.isMinimalized = true;
        } else {
            state.isMinimalized = false;
            state.list[state.activeId].active = false;
            state.activeId = id;
            state.list[state.activeId].active = true;
        }
    }

    function getState() {
        const returns = {
            isMinimalized: state.isMinimalized,
            scrollPosition: state.list[state.activeId].scroll,
            list: state.list,
            activeId: state.activeId
        }
        return clone(returns); //TODO deepfreeze?
    }

    return {
        getState,
        showMenu,
        resetExplenationScroll,
        setScrollPosition,
        setRootMenuTo
    }
}

