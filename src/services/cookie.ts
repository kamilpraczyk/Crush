import { RootType } from '../types';
import { APIState, getState } from '../services'

interface Cookie {
    login: string,
    password: string,
    lessonUid: string,
    rootId: RootType,
    rootScroll: number,
    rootIsMinimalized: boolean
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
            rootIsMinimalized: apiState.rootMenu.isMinimalized
        };

        set('secretCookie', cookie, 7);
        return cookie;
    }

    function initbeforeUnload() {
        window.onbeforeunload = function (e) {
            if (getCookie() === setCookie(getState())) {
                return true;
            }

            var confirmationMessage = "\o/";
            (e || window.event).returnValue = confirmationMessage; //Gecko + IE
            return confirmationMessage;                            //Webkit, Safari, Chrome
        };
    }

    initbeforeUnload();
    return {
        setCookie,
        getCookie,
    }
}

export {
    cookies,
    CookieReturn
}