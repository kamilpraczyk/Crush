import React = require('react');
import _ = require('underscore');
import ReactDOM = require('react-dom');
import components = require('../components/components');
import { isFree } from '../lessons/helper/constants';
import { PassState, Pass } from '../services/Pass';
import { voice } from '../utils/utils';
import { events, renderEvent } from '../events';
import { RootType } from '../types';
import { RootMenu, RootMenuState } from '../services/RootMenu';
import { getLessons } from '../lessons/lessons';
import { LessonsCatalog, LessonsCatalogReturnState } from '../services/LessonsCatalog';
import { cookies, CookieReturn } from './cookie';
import config = require('../generated-config');

interface State {
    isDirty: boolean,
    apiState: APIState
    subscribers: any[],
    pass: Pass,
    lessonsCatalog: LessonsCatalog,
    rootMenu: RootMenu,
    cookies: CookieReturn
}

interface APIState {
    isProduction: boolean,
    rootMenu: RootMenuState,
    lessonsCatalog: LessonsCatalogReturnState
    pass: PassState,
}

let state: State = null;

function publishRerender() {
    state.isDirty = true;
    return renderEvent.publish();
}

function onRootMenuEvent(id: RootType) {
    state.rootMenu.setRootMenuTo(id);
    publishRerender();
}

function onLoadNewLessonEvent(uid: string) {
    state.lessonsCatalog.setActiveLesson(uid);
    state.rootMenu.setRootMenuTo(RootType.explenation);
    state.rootMenu.resetExplenationScroll();
    publishRerender();
}

function goTest() {
    state.rootMenu.setRootMenuTo(RootType.close);
    publishRerender();
}

function onSaveStatusBoardEvent(data: { uid: string, status: number }) {

    state.pass.startSaveStatus(() => publishRerender())
        .then(() => state.rootMenu.setRootMenuTo(RootType.lessons))
        .then(() => state.pass.saveStatus(data))
        .then(() => state.lessonsCatalog.setNumberFinished(data.uid, data.status))
        .finally(() => onCloseStatusBoardEvent());
}

function onCloseStatusBoardEvent() {
    state.rootMenu.setRootMenuTo(RootType.lessons);
    state.lessonsCatalog.resetActiveLesson();
    publishRerender();
}

function onShowRootMenu() {
    state.rootMenu.showMenu(false);
    publishRerender();
}

function onNextBoard() {
    state.lessonsCatalog.board.onNextBoard();
    voice.stopReading();
    publishRerender();
}
function onNextRandomBoard() {
    state.lessonsCatalog.board.onNextRandomBoard();
    voice.stopReading();
    publishRerender();
}
function onPrevBoard() {
    state.lessonsCatalog.board.onPrevBoard();
    voice.stopReading();
    publishRerender();
}
function setUserAnswer(name: string) {
    const isCompletedBoard = state.lessonsCatalog.board.boardAnswer.setUserAnswer(name);
    _.isBoolean(isCompletedBoard) && state.lessonsCatalog.board.setCompletedBoard(isCompletedBoard);
    publishRerender();
}
function onRead(read: string) {
    voice.read(read);
}
function onToogleSupportHelp() {
    state.lessonsCatalog.board.boardAnswer.toggleSupportHelp();
    publishRerender();
}

function _onLogin(o: { email: string, password: string }) {
    return state.pass.startLogin(() => publishRerender())
        .then(() => state.pass.login(o))
        .then(() => publishRerender())
        .then(() => state.pass.updataLastLogin())
        .then(() => state.pass.readStatus({ email: state.pass.getStatus().user.email }))
        .then(data => {
            if (data && data.state && data.state.length) {
                data.state.map(item => state.lessonsCatalog.setNumberFinished(item.name, parseInt(item.value)));
            }
        })
}

function onLogin(o: { email: string, password: string }) {
    return _onLogin(o).finally(() => publishRerender());
}

function onLogOut() {
    state.pass.logout();
    state.lessonsCatalog.resetAllNumberFinished();
    publishRerender();
}

function onToogleRegisterView() {
    state.pass.toogleRegister();
    publishRerender();
}

function onRegisterOnServer(o: { name: string, email: string, password: string, retypePassword: string }) {

    return state.pass.startRegister(() => publishRerender())
        .then(() => state.pass.register(o))
        .then(() => state.pass.sendEmailGreeting(o))
        .then(() => state.pass.login(o))
        .finally(() => publishRerender());
}

function onSubscribeOnServer(valid_to: string) {

    return state.pass.startSubscribe(() => publishRerender())
        .then(() => state.pass.subscribe({ email: state.pass.getStatus().user.email, valid_to: valid_to }))
        .finally(() => publishRerender());
}


function onScrollPosition(top: number) {
    state.rootMenu.setScrollPosition(top);
    //do not rerender
}


function loadLessons() { return getLessons(state.lessonsCatalog); }


function init(window: Window) {

    state = {
        isDirty: true,
        apiState: null,
        pass: new Pass(),
        cookies: cookies(window),
        lessonsCatalog: new LessonsCatalog(),
        rootMenu: new RootMenu(RootType.lessons),
        subscribers: [
            events.onLogin.subscribe(onLogin),
            events.onLogOut.subscribe(onLogOut),
            events.onToogleRegisterView.subscribe(onToogleRegisterView),
            events.onRegisterOnServer.subscribe(onRegisterOnServer),
            events.onSubscribeOnServer.subscribe(onSubscribeOnServer),
            events.readEvent.subscribe(onRead),
            events.rootMenuEvent.subscribe(onRootMenuEvent),
            events.showRootMenu.subscribe(onShowRootMenu),
            events.loadNewLessonEvent.subscribe(onLoadNewLessonEvent), //click to load new lesson on menu
            events.goTest.subscribe(goTest),
            events.closeStatusBoardEvent.subscribe(onCloseStatusBoardEvent),
            events.saveStatusBoardEvent.subscribe(onSaveStatusBoardEvent),
            events.onNextBoard.subscribe(onNextBoard),
            events.onNextRandomBoard.subscribe(onNextRandomBoard),
            events.onPrevBoard.subscribe(onPrevBoard),
            events.onChoosePicture.subscribe(setUserAnswer),
            events.onChooseRadio.subscribe(setUserAnswer),
            events.onChooseOneTwoThree.subscribe(setUserAnswer),
            events.onChooseMultiRadio.subscribe(setUserAnswer),
            events.onToogleSupportHelp.subscribe(onToogleSupportHelp),
            events.scrollPosition.subscribe(onScrollPosition)
        ]
    }

    const cookie = state.cookies.getCookie();
    if (cookie && cookie.password && cookie.login) {
        //use strict
        return loadLessons()
            .then(() => _onLogin({ email: cookie.login, password: cookie.password }))
            .then(() => {
                cookie.rootId && state.rootMenu.setRootMenuTo(cookie.rootId);
                cookie.rootScroll && state.rootMenu.setScrollPosition(cookie.rootScroll);
                state.rootMenu.showMenu(cookie.rootIsMinimalized);
                return null;
            })
            .then(() => {
                if (cookie.lessonUid) {
                    const lesson = state.lessonsCatalog.getLessonByUid(cookie.lessonUid);
                    if (lesson && isFree(getState(), lesson.freeType))
                        state.lessonsCatalog.setActiveLesson(cookie.lessonUid);
                }
                return null;
            })
            .then(() => publishRerender())
    }

    return loadLessons().then(() => publishRerender());
}

function updateAPIState(state: State) {
    state.isDirty = false;
    state.apiState = {
        isProduction: config.isProduction,
        rootMenu: state.rootMenu.getState(),
        lessonsCatalog: state.lessonsCatalog.getState(),
        pass: state.pass.getStatus(),
    };
    state.cookies.setCookie(state.apiState);
    return state.apiState;
}


function getState(): APIState {
    if (state) return state.isDirty ? updateAPIState(state) : state.apiState;
    throw new Error('Please initialize services before using getState')
}

export {
    init,
    getState,
    APIState
};



