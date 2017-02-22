import * as reducers from './reducers';
import { events, renderEvent } from '../events';
import { RootType } from '../types';
import config = require('../generated-config');
import Promise = require('bluebird');
import {
    PassState, PassStore, RootMenuState, RootMenuStore, CookieStore, VoiceStore, VoiceState,
    LessonsCatalogStore, LessonsCatalogState
} from './stores';

interface State {
    isDirty: boolean,
    apiState: APIState
    subscribers: any[],
    passStore: PassStore,
    voiceStore: VoiceStore,
    lessonsCatalogStore: LessonsCatalogStore,
    rootMenuStore: RootMenuStore,
    cookiesStore: CookieStore,
    publishRerender: () => Promise<void>
}

interface APIState {
    isProduction: boolean,
    rootMenu: RootMenuState,
    lessonsCatalog: LessonsCatalogState
    pass: PassState,
    voice: VoiceState
}

let state: State = null;

function publishRerender() {
    state.isDirty = true;
    renderEvent.publish();
    return Promise.resolve();
}


function init(window: Window) {

    state = {
        isDirty: true,
        apiState: null,
        passStore: new PassStore(),
        voiceStore: new VoiceStore(),
        cookiesStore: new CookieStore(window),
        lessonsCatalogStore: new LessonsCatalogStore(),
        rootMenuStore: new RootMenuStore(RootType.lessons),
        publishRerender,
        subscribers: [
            events.onLogin.subscribe(o => reducers.onLogin(state, o)),
            events.onLogOut.subscribe(() => reducers.onLogOut(state)),
            events.onToogleRegisterView.subscribe(() => reducers.onToogleRegisterView(state)),
            events.onRegisterOnServer.subscribe(o => reducers.onRegisterOnServer(state, o)),
            events.onSubscribeOnServer.subscribe(o => reducers.onSubscribeOnServer(state, o)),
            events.readEvent.subscribe(o => reducers.onRead(state, o)),
            events.rootMenuEvent.subscribe(o => reducers.onRootMenuEvent(state, o)),
            events.showRootMenu.subscribe(() => reducers.onShowRootMenu(state)),
            events.loadNewLessonEvent.subscribe(o => reducers.onLoadNewLessonEvent(state, o)), //click to load new lesson on menu
            events.goTest.subscribe(() => reducers.goTest(state)),
            events.closeStatusBoardEvent.subscribe(() => reducers.onCloseStatusBoardEvent(state)),
            events.saveStatusBoardEvent.subscribe(o => reducers.onSaveStatusBoardEvent(state, o)),
            events.onNextBoard.subscribe(() => reducers.onNextBoard(state)),
            events.onNextRandomBoard.subscribe(() => reducers.onNextRandomBoard(state)),
            events.onPrevBoard.subscribe(() => reducers.onPrevBoard(state)),
            events.onChoosePicture.subscribe(o => reducers.setUserAnswer(state, o)),
            events.onChooseRadio.subscribe(o => reducers.setUserAnswer(state, o)),
            events.onChooseOneTwoThree.subscribe(o => reducers.setUserAnswer(state, o)),
            events.onChooseMultiRadio.subscribe(o => reducers.setUserAnswer(state, o)),
            events.onToogleSupportHelp.subscribe(() => reducers.onToogleSupportHelp(state)),
            events.scrollPosition.subscribe(o => reducers.onScrollPosition(state, o)),
            events.onChangeVoice.subscribe(o => reducers.onChangeVoice(state, o)),
        ]
    }

    const cookie = state.cookiesStore.getCookie();
    if (cookie && cookie.password && cookie.login) {
        return state.lessonsCatalogStore.getLessons()
            .then(() => reducers.onLogin(state, { email: cookie.login, password: cookie.password }))
            .then(() => reducers.loadCookie(state))
    }

    return state.lessonsCatalogStore.getLessons().then(() => reducers.loadCookie(state))
}

function updateAPIState(state: State) {
    state.isDirty = false;
    const pass = state.passStore.getStatus();
    state.apiState = {
        isProduction: config.isProduction,
        voice: state.voiceStore.getState(),
        rootMenu: state.rootMenuStore.getState(),
        lessonsCatalog: state.lessonsCatalogStore.getState(pass),
        pass,
    };
    state.cookiesStore.setCookie(state.apiState);
    return state.apiState;
}


function getState(): APIState {
    if (state) return state.isDirty ? updateAPIState(state) : state.apiState;
    throw new Error('Please initialize services before using getState')
}

export {
    init,
    getState,
    State,
    APIState
};



