import { State } from '../../APIState';
import { RootType } from '../../../types';

export function goTest(state: State) {
    state.rootMenuStore.setRootMenuTo(RootType.close);
    state.publishRerender();
}

export function onRootMenuEvent(state: State, id: RootType) {
    state.rootMenuStore.setRootMenuTo(id);
    state.publishRerender();
}

export function onShowRootMenu(state: State) {
    state.rootMenuStore.showMenu(false);
    state.publishRerender();
}

export function onLoadNewLessonEvent(state: State, uid: string) {
    state.lessonsCatalogStore.setActiveLesson(uid);
    state.rootMenuStore.setRootMenuTo(RootType.explenation);
    state.rootMenuStore.resetExplenationScroll();
    state.publishRerender();
}
