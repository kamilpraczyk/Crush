import { State } from '../../APIState';
import { RootType } from '../../../types';

export function onChangeVoice(state: State, name: string) {
    state.voiceStore.setVoice(name);
    state.publishRerender();
}

export function onRead(state: State, read: string) {
    state.voiceStore.read(read);
}