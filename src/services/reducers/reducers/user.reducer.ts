import { State } from '../../APIState';


export function onLogin(state: State, o: { email: string, password: string }) {
    state.passStore.startLogin(() => state.publishRerender())
        .then(() => state.passStore.login(o))
        .then(() => state.publishRerender())
        .then(() => state.passStore.updateLastLogin())
        .then(() => state.passStore.readStatus({ email: state.passStore.getStatus().user.email }))
        .then(data => {
            if (data && data.state && data.state.length) {
                data.state.map(item => state.lessonsCatalogStore.setNumberFinished(item.name, parseInt(item.value)));
            }
        })
        .finally(() => state.publishRerender());
}

export function onLogOut(state: State) {
    state.passStore.logout();
    state.lessonsCatalogStore.resetAllNumberFinished();
    state.publishRerender();
}

export function onSubscribeOnServer(state: State, valid_to: string) {
    state.passStore.startSubscribe(() => state.publishRerender())
        .then(() => state.passStore.subscribe({ email: state.passStore.getStatus().user.email, valid_to: valid_to }))
        .finally(() => state.publishRerender());
}

export function onRegisterOnServer(state: State, o: { name: string, email: string, password: string, retypePassword: string }) {
    state.passStore.startRegister(() => state.publishRerender())
        .then(() => state.passStore.register(o))
        .then(() => state.passStore.sendEmailGreeting(o))
        .then(() => state.passStore.login(o))
        .finally(() => state.publishRerender());
}

