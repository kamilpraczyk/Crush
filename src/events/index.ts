import { EventFactory, VoidEventFactory } from './factory';
import { RootType } from '../types';

export const unsubscribe = (unsubscribes: Array<() => void>) => unsubscribes && unsubscribes.forEach(u => u()); // helper



export const events = {
    scrollPosition: EventFactory<number>('scrollPosition'),
    onLogin: EventFactory<{ email: string, password: string }>('onLogin'),
    onLogOut: VoidEventFactory('onLogOut'),
    onToogleRegisterView: VoidEventFactory('onToogleRegisterView'),
    onRegisterOnServer: EventFactory<{ name: string, email: string, password: string, retypePassword: string }>('onRegisterOnServer'),
    onSubscribeOnServer: EventFactory<string>('onSubscribeOnServer'),


    readEvent: EventFactory<string>('readEvent'),
    saveStatusBoardEvent: EventFactory<{ uid: string, status: number }>('saveStatusBoardEvent'),
    closeStatusBoardEvent: VoidEventFactory('closeStatusBoardEvent'),
    goTest: VoidEventFactory('goTest'),
    showRootMenu: VoidEventFactory('showRootMenu'),

    rootMenuEvent: EventFactory<RootType>('rootMenuEvent'),
    loadNewLessonEvent: EventFactory<string>('loadNewLessonEvent'),


    onNextBoard: VoidEventFactory('onNextBoard'),
    onNextRandomBoard: VoidEventFactory('onNextRandomBoard'),
    onPrevBoard: VoidEventFactory('onPrevBoard'),


    onChoosePicture: EventFactory<string>('onChoosePicture'),
    onChooseRadio: EventFactory<string>('onChooseRadio'),
    onChooseOneTwoThree: EventFactory<string>('onChooseOneTwoThree'),
    onChooseMultiRadio: EventFactory<string>('onChooseMultiRadio'),
    onToogleSupportHelp: VoidEventFactory('onToogleSupportHelp'),

}

export const renderEvent = VoidEventFactory('renderEvent')
