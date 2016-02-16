/// <reference path="../../typings/tsd.d.ts" />
import Dispatcher from './Dispatcher';

class AppDispatcher extends Dispatcher {
    constructor() {
        super()
    }
}

const appDispatcher = new AppDispatcher();
export = appDispatcher;