
interface Handler<Payload> { (payload?: Payload): void }

interface BaseEvent<Payload> {
    subscribe(handler: Handler<Payload>): () => void;
    publish(payload: Payload): boolean;
}

// Must be a better way than this...
export function VoidEventFactory(diagnosticName: string) {
    const e = EventFactory<void>(diagnosticName);
    const publish = () => e.publish(undefined);
    return { publish, subscribe: e.subscribe };
}

export function EventFactory<Payload>(diagnosticName: string): BaseEvent<Payload> {
    let handlers: Handler<Payload>[] = [];

    function subscribe(handler: Handler<Payload>) {
        handlers.push(handler);
        return () => unsubscribe(handler);
    }

    function unsubscribe(handler: Handler<Payload>) {
        handlers = handlers.filter(h => h !== handler);
    }

    function publish(payload: Payload) {
        // Note. Minimal implementation merely ensures all subscribers notify even if one fails.
        // Pub-Sub implmentations typically do things like: cache handlers in case callers mutate, send events on nexttick, 
        // don't store null handlers, de-duplicate handlers, handle publish recursion...but we don't need any of this (yet).
        handlers.forEach(handler => {
            handler(payload);
        });
        return true; //return for promises;
    }

    // Best attempt at error message, but try not to cause an error itself. 
    function logError(err: Error, payload: Payload) {
        let payloadStr = payload && Object.keys(payload).join(',');
        payloadStr = JSON.stringify(payload)
    }

    return {
        subscribe,
        publish
    }
}

