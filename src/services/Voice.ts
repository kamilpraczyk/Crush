import { space } from '../lessons/helper/constants';
import { Speech } from '../types';

export interface ReturnVoice {
    voices: Speech[];
    current: Speech;
}

function isVoiceSupported() {
    return (<any>window).SpeechSynthesisUtterance && (<any>window).speechSynthesis;
}

function getVoices() {
    let voices: Speech[] = [];
    if (isVoiceSupported()) {
        voices = window.speechSynthesis.getVoices();
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
        console.log('this.voices', this.voices);
        this.current = this.voices[0];
    }
    stopReading() {
        stop();
    }

    read(value: string) {
        this.stopReading();
        if (!this.voices.length) { //webkit not initialized on time
            console.warn("Voices wasn't ready - reinitialize");
            this.voices = getVoices();
            this.current = getVoices()[0];
        }
        read(value, this.current);
    }

    setVoice(name: string) {
        this.current = this.voices.filter(voice => voice.name === name)[0];
    }

    getState(): ReturnVoice {
        return {
            voices: this.voices,
            current: this.current
        }
    }
}

