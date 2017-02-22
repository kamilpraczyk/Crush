import { State } from '../../APIState';
import { RootType } from '../../../types';
import _ = require('underscore');

export function onNextBoard(state: State) {
    state.lessonsCatalogStore.boardStatusStore.onNextBoard();
    state.voiceStore.stopReading();
    state.publishRerender();
}
export function onNextRandomBoard(state: State) {
    state.lessonsCatalogStore.boardStatusStore.onNextRandomBoard();
    state.voiceStore.stopReading();
    state.publishRerender();
}
export function onPrevBoard(state: State) {
    state.lessonsCatalogStore.boardStatusStore.onPrevBoard();
    state.voiceStore.stopReading();
    state.publishRerender();
}

export function setUserAnswer(state: State, name: string) {
    const isCompletedBoard = state.lessonsCatalogStore.boardStatusStore.boardAnswerStore.setUserAnswer(name);
    _.isBoolean(isCompletedBoard) && state.lessonsCatalogStore.boardStatusStore.setCompletedBoard(isCompletedBoard);
    state.publishRerender();
}

export function onCloseStatusBoardEvent(state: State) {
    state.rootMenuStore.setRootMenuTo(RootType.lessons);
    state.lessonsCatalogStore.resetActiveLesson();
    state.publishRerender();
}

export function onToogleSupportHelp(state: State) {
    state.lessonsCatalogStore.boardStatusStore.boardAnswerStore.toggleSupportHelp();
    state.publishRerender();
}

export function onSaveStatusBoardEvent(state: State, data: { uid: string, status: number }) {
    state.passStore.startSaveStatus(() => state.publishRerender())
        .then(() => state.passStore.saveStatus(data))
        .then(() => state.lessonsCatalogStore.setNumberFinished(data.uid, data.status))
        .finally(() => onCloseStatusBoardEvent(state));
}