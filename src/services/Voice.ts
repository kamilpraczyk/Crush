import _ = require("underscore");
import { space } from '../lessons/helper/constants';

interface Speech {
    lang: string,
    name: string
}

function isVoiceSupported() {
    return ((<any>window).SpeechSynthesisUtterance && (<any>window).speechSynthesis);
}

function getVoices() {
    let voices: Speech[] = [];
    if (isVoiceSupported()) {
        voices = (<any>window).speechSynthesis.getVoices();
        return voices.filter(voice => voice.lang === "en-GB" || voice.lang === "en-US");
    }
    return voices;
}

function read(value: string, current: Speech) {
    console.log('read', value);
    if (isVoiceSupported() && current) {
        value = value.replace(space, '');
        value = value.replace('_', '');

        const utterance = new (<any>window).SpeechSynthesisUtterance(value);
        const voices = getVoices();
        const voicesEn = voices.filter(voice => voice.name === current.name);
        utterance.voice = voicesEn[0];
        (<any>window).speechSynthesis.speak(utterance);
    }
}

function stop() {
    (<any>window).speechSynthesis && (<any>window).speechSynthesis.cancel();
}

export class Voice {

    private voices: Speech[] = [];
    private current: Speech = null;

    constructor() {
        this.voices = getVoices();
        this.current = this.voices[0];
    }
    stopReading() {
        stop();
    }

    read(value: string) {
        // stopReading();
        read(value, this.current);
    }

    getState() {
        return this.voices;
    }
}

