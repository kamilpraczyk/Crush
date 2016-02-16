/// <reference path="../../../typings/tsd.d.ts" />
import Dispatcher from '../../dispatcher/Dispatcher';
import utils = require('../utils');
import _ = require('underscore');
import { each, isFunction } from 'underscore';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';


export default class BaseStore extends Dispatcher {
    private emitter = null as any;

    public constructor() {
        super()
        this.emitter = new EventEmitter()
        this.emitter.setMaxListeners(0)
    }

    emitChange() {
        this.emitter.emit(CHANGE_EVENT);
    }

    addChangeListener(callback: Function) {
        this.emitter.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback: Function) {
        this.emitter.removeListener(CHANGE_EVENT, callback);
    }
}
