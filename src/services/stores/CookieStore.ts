import { RootType } from '../../types';
import { APIState, getState } from '../../services';
import _ = require('underscore');

interface Cookie {
    login: string,
    password: string,
    lessonUid: string,
    rootId: RootType,
    rootScroll: number,
    rootIsMinimalized: boolean
    voiceName: string
}

function set(window: Window, name: any, value: Cookie, days: number) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toUTCString();
    }
    else var expires = "";
    window.document.cookie = name + "=" + JSON.stringify(value) + expires + "; path=/";
}

function get(window: Window, name: string): Cookie {
    const nameEQ = name + "=";
    const ca = window.document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
            return JSON.parse(c.substring(nameEQ.length, c.length));
    }

    return null;
}

function getCookie(window: Window) {
    return get(window, 'secretCookie');
}

function setCookie(window: Window, apiState: APIState) {

    const cookie: Cookie = {
        login: apiState.pass.user.email,
        password: apiState.pass.user.password,
        lessonUid: apiState.lessonsCatalog.uid,
        rootId: apiState.rootMenu.activeId,
        rootScroll: apiState.rootMenu.scrollPosition,
        rootIsMinimalized: apiState.rootMenu.isMinimalized,
        voiceName: apiState.voice.current && apiState.voice.current.name
    };

    set(window, 'secretCookie', cookie, 7);
    return cookie;
}

function initbeforeUnload(window: Window) {
    window.onbeforeunload = function (e) {
        const state = getState();
        if (!_.isEqual(getCookie(window), setCookie(window, state))) {
            const confirmationMessage = "Are you sure you want to quit?";
            e = e || window.event;
            if (e) e.returnValue = confirmationMessage;
            return confirmationMessage;
        }
        return;
    }
}




class CookieStore {

    private window: Window;
    constructor(window: Window) {
        this.window = window;
        initbeforeUnload(this.window);
    }

    public setCookie = (s: APIState) => setCookie(this.window, s);
    public getCookie = () => getCookie(this.window);
}

export {
    CookieStore
}