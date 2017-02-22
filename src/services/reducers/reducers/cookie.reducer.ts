import { State } from '../../APIState';
import { isFree } from '../../../lessons/helper/constants';

export function loadCookie(state: State) {
    const cookie = state.cookiesStore.getCookie();
    if (cookie) {
        cookie.rootId && state.rootMenuStore.setRootMenuTo(cookie.rootId);
        cookie.rootScroll && state.rootMenuStore.setScrollPosition(cookie.rootScroll);
        cookie.voiceName && state.voiceStore.setVoice(cookie.voiceName);
        state.rootMenuStore.showMenu(cookie.rootIsMinimalized);
        if (cookie.lessonUid) {
            const lesson = state.lessonsCatalogStore.getLessonByUid(cookie.lessonUid);
            if (lesson && isFree(state.apiState, lesson.freeType))
                state.lessonsCatalogStore.setActiveLesson(cookie.lessonUid);
        }
    }
    state.publishRerender();
}


export function onScrollPosition(state: State, top: number) {
    state.rootMenuStore.setScrollPosition(top);
    state.isDirty = true;
    //do not rerender but the state is dirty
}
