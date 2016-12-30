import { RootType } from '../types';
import { APIState, getState } from '../services';
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

interface CookieReturn {
    setCookie: (apiState: APIState) => Cookie
    getCookie: () => Cookie
}


function cookies(window: Window): CookieReturn {

    function set(name: any, value: Cookie, days: number) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toUTCString();
        }
        else var expires = "";
        window.document.cookie = name + "=" + JSON.stringify(value) + expires + "; path=/";
    }

    function get(name: string): Cookie {
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

    function getCookie() {
        return get('secretCookie');
    }

    function setCookie(apiState: APIState) {

        const cookie: Cookie = {
            login: apiState.pass.user.email,
            password: apiState.pass.user.password,
            lessonUid: apiState.lessonsCatalog.uid,
            rootId: apiState.rootMenu.activeId,
            rootScroll: apiState.rootMenu.scrollPosition,
            rootIsMinimalized: apiState.rootMenu.isMinimalized,
            voiceName: apiState.voice.current && apiState.voice.current.name
        };

        set('secretCookie', cookie, 7);
        return cookie;
    }

    function initbeforeUnload() {
        window.onbeforeunload = function (e) {
            const state = getState();
            if (state.pass.user.email) {
                if (!_.isEqual(getCookie(), setCookie(state))) {
                    const confirmationMessage = "Are you sure you want to quit?";
                    e = e || window.event;
                    if (e) e.returnValue = confirmationMessage;
                    return confirmationMessage;
                }
            }
            return;
        }
    }

    initbeforeUnload();
    return {
        setCookie,
        getCookie
    }
}


export {
    cookies,
    CookieReturn
}