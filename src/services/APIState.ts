/// <reference path="../../typings/tsd.d.ts" />
import React = require('react');
import ReactDOM = require('react-dom');
import components = require('../components/components');
import {startLogin, login, updataLastLogin, toogleRegister, startRegister, sendEmailGreeting, register, logout} from '../services/Pass';
import { Pass, saveStatus, readStatus, startSubscribe, subscribe, startSaveStatus} from '../services/Pass';
import utils = require('../utils/utils');
import {events, renderEvent} from '../events';
import {RootMenu, RootType} from '../services/RootMenu';
import {getLessons} from '../lessons/lessons';
import {LessonsCatalog} from '../services/LessonsCatalog';
import {LessonsStatus} from '../services/LessonsStatus';


function publishRerender() {
    return renderEvent.publish();
}

function onRootMenuEvent(id: string) {
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
        .then(() => lessonsStatus.addLesson(data.uid, data.status))
        .finally(() => onCloseStatusBoardEvent());
}

function onCloseStatusBoardEvent() {
    rootMenu.setRootMenuTo(RootType.lessons);
    lessonsCatalog.resetActiveLesson();
    publishRerender();
}

function onToogleMinimalizedRootMenu() {
    rootMenu.showMenu();
    publishRerender();
}

function onNextBoard() {
    lessonsCatalog.board.onNextBoard();
    utils.voice.stopReading();
    publishRerender();
}
function onNextRandomBoard() {
    lessonsCatalog.board.onNextRandomBoard();
    utils.voice.stopReading();
    publishRerender();
}
function onPrevBoard() {
    lessonsCatalog.board.onPrevBoard();
    utils.voice.stopReading();
    publishRerender();
}
function setUserAnswer(name: string) {
    lessonsCatalog.board.boardQuery.setUserAnswer(name);
    publishRerender();
}
function onRead(read: string) {
    utils.voice.read(read);
}
function onToogleSupportHelp() {
    lessonsCatalog.board.boardQuery.toggleSupportHelp();
    publishRerender();
}

function onLogin(o: { email: string, password: string }) {

    startLogin(() => publishRerender())
        .then(() => login(o))
        .then(() => publishRerender())
        .then(() => updataLastLogin())
        .then(() => readStatus({ email: pass.getStatus().user.email }))
        .then((data) => {
            if (data && data.state && data.state.length) {
                data.state.map((item) => {
                    lessonsStatus.addLesson(item.name, parseInt(item.value))
                });
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
            events.showRootMenu.subscribe(onToogleMinimalizedRootMenu),
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
            events.onToogleSupportHelp.subscribe(onToogleSupportHelp),
            events.scrollPosition.subscribe(onScrollPosition)

        ];
    }
}


const pass = new Pass();
const lessonsCatalog = new LessonsCatalog();
const lessonsStatus = new LessonsStatus({});
const rootMenu = new RootMenu(RootType.lessons);
const apiState = new APIState();

function init() {
    return getLessons(lessonsCatalog).then(_lessonsCatalog => {
        return publishRerender();
    });
}

function clear() {
    return lessonsCatalog.clear();
}

export {
init,
clear,
RootType,
lessonsCatalog,
lessonsStatus,
rootMenu,
pass,
};

