import { State } from '../../APIState';
import { RootType } from '../../../types';

export function onToogleRegisterView(state: State) {
    state.passStore.toogleRegister();
    state.publishRerender();
}


export function onScrollPosition(state: State, top: number) {
    state.rootMenuStore.setScrollPosition(top);
    state.isDirty = true;
    //do not rerender but the state is dirty
}

