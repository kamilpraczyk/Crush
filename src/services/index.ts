/// <reference path="../../typings/tsd.d.ts" />
import {init, clear, lessonsCatalog, lessonsStatus, pass, RootType, rootMenu} from './APIState';


function getState() {
    return {
        lessonsCatalog,
        lessonsStatus,
        pass
    };
}

export {
getState,
init,
clear,
lessonsCatalog,
RootType,
rootMenu
};

