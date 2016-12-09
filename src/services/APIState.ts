/// <reference path="../../typings/tsd.d.ts" />
import React = require('react');
import _ = require('underscore');
import ReactDOM = require('react-dom');
import components = require('../components/components');
import { startLogin, login, updataLastLogin, toogleRegister, startRegister, sendEmailGreeting, register, logout } from '../services/Pass';
import { Pass, saveStatus, readStatus, startSubscribe, subscribe, startSaveStatus } from '../services/Pass';
import { voice } from '../utils/utils';
import { events, renderEvent } from '../events';
import { RootType } from '../types';
import { createRootMenu } from '../services/RootMenu';
import { getLessons } from '../lessons/lessons';
import { LessonsCatalog } from '../services/LessonsCatalog';

function publishRerender() { return renderEvent.publish(); }

function onRootMenuEvent(id: RootType) {
    rootMenu.setRootMenuTo(id);
    publishRerender();
}

function onLoadNewLessonEvent(uid: string) {
    lessonsCatalog.setActiveLesson(uid);
    rootMenu.setRootMenuTo(RootType.explenation);
    rootMenu.resetExplenationScroll();
    publishRerender();
}

function goTest() {
    rootMenu.setRootMenuTo(RootType.close);
    publishRerender();
}

function onSaveStatusBoardEvent(data: { uid: string, status: number }) {

    startSaveStatus(() => publishRerender())
        .then(() => rootMenu.setRootMenuTo(RootType.lessons))
        .then(() => saveStatus(data))
        .then(() => lessonsCatalog.setNumberFinished(data.uid, data.status))
        .finally(() => onCloseStatusBoardEvent());
}

function onCloseStatusBoardEvent() {
    rootMenu.setRootMenuTo(RootType.lessons);
    lessonsCatalog.resetActiveLesson();
    publishRerender();
}

function onShowRootMenu() {
    rootMenu.showMenu();
    publishRerender();
}

function onNextBoard() {
    lessonsCatalog.board.onNextBoard();
    voice.stopReading();
    publishRerender();
}
function onNextRandomBoard() {
    lessonsCatalog.board.onNextRandomBoard();
    voice.stopReading();
    publishRerender();
}
function onPrevBoard() {
    lessonsCatalog.board.onPrevBoard();
    voice.stopReading();
    publishRerender();
}
function setUserAnswer(name: string) {
    const isCompletedBoard = lessonsCatalog.board.boardAnswer.setUserAnswer(name);
    _.isBoolean(isCompletedBoard) && lessonsCatalog.board.setCompletedBoard(isCompletedBoard);
    publishRerender();
}
function onRead(read: string) {
    voice.read(read);
}
function onToogleSupportHelp() {
    lessonsCatalog.board.boardAnswer.toggleSupportHelp();
    publishRerender();
}

function onLogin(o: { email: string, password: string }) {

    startLogin(() => publishRerender())
        .then(() => login(o))
        .then(() => publishRerender())
        .then(() => updataLastLogin())
        .then(() => readStatus({ email: pass.getStatus().user.email }))
        .then(data => {
            if (data && data.state && data.state.length) {
                data.state.map(item => lessonsCatalog.setNumberFinished(item.name, parseInt(item.value)));
            }
        })
        .finally(() => publishRerender());
}

function onLogOut() {
    logout();
    publishRerender();
}

function onToogleRegisterView() {
    toogleRegister();
    publishRerender();
}

function onRegisterOnServer(o: { name: string, email: string, password: string, retypePassword: string }) {

    startRegister(() => publishRerender())
        .then(() => register(o))
        .then(() => sendEmailGreeting(o))
        .then(() => login(o))
        .finally(() => publishRerender());
}

function onSubscribeOnServer(valid_to: string) {

    startSubscribe(() => publishRerender())
        .then(() => subscribe({ email: pass.getStatus().user.email, valid_to: valid_to }))
        .finally(() => publishRerender());
}


function onScrollPosition(top: number) {
    rootMenu.setScrollPosition(top);
    //do not rerender
}

class APIState {

    subscribers: any[] = [];

    constructor() {

        this.subscribers = [
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

        ];
    }
}


const pass = new Pass();
const lessonsCatalog = new LessonsCatalog();
const rootMenu = createRootMenu(RootType.lessons);
const apiState = new APIState();

function init() { return getLessons(lessonsCatalog).then(_lessonsCatalog => publishRerender()); }
function clear() { return lessonsCatalog.clear(); }
function getState() {
    console.log('getState'); //TODO reduce producing new states
    return {
        rootMenu: rootMenu.getState(),
        lessonsCatalog: lessonsCatalog.getState(),
        pass: pass.getStatus()
    }; //TODO create class and spread it?
}


export {
    init,
    clear,
    getState
};

