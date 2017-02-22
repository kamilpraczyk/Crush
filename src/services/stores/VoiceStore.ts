import { space } from '../../lessons/helper/constants';
import { Speech } from '../../types';

export interface VoiceState {
    voices: Speech[];
    current: Speech;
}

function isVoiceSupported() {
    return (<any>window).SpeechSynthesisUtterance && (<any>window).speechSynthesis;
}
function compare(a: Speech, b: Speech) {
    if (a.lang < b.lang) return -1;
    if (a.lang > b.lang) return 1;
    return 0;
}

function getVoices() {
    let voices: Speech[] = [];
    if (isVoiceSupported()) {
        voices = window.speechSynthesis.getVoices();
        voices = voices.filter(voice => voice.lang === "en-GB" || voice.lang === "en-US"); //TODO set to en-gb
        voices = voices.sort(compare);
    }
    return voices;
}

function getInitCurrentVoice(voices: Speech[]) {
    const gb = voices.filter(voice => voice.lang === "en-GB");
    return gb.length ? gb[0] : voices[0];
}

function read(value: string, current: Speech) {
    console.log('read', value);
    if (isVoiceSupported() && current) {
        value = value.replace(space, '');
        value = value.replace('_', '');

        const utterance = new (<any>window).SpeechSynthesisUtterance(value);
        utterance.voice = current;
        (<any>window).speechSynthesis.speak(utterance);
    }
}

function stop() {
    (<any>window).speechSynthesis && (<any>window).speechSynthesis.cancel();
}

export class VoiceStore {

    private voices: Speech[] = [];
    private current: Speech = null;
    private currentNameToSet: string = null;

    constructor() {
        this.voices = getVoices();
        this.current = getInitCurrentVoice(this.voices);
    }
    stopReading() {
        stop();
    }

    read(value: string) {
        this.stopReading();
        if (!this.current) { //webkit not initialized on time
            console.warn("Voices wasn't ready - reinitialize");
            this.voices = getVoices();
            this.setVoice(this.currentNameToSet);
        }
        read(value, this.current);
    }

    setVoice(name: string) {
        this.currentNameToSet = name;
        if (this.voices.length) {
            const preferedCurrent = this.voices.filter(voice => voice.name === name)[0];
            this.current = preferedCurrent || this.voices[0];
        }
    }

    getState(): VoiceState {
        return {
            voices: this.voices,
            current: this.current
        }
    }
}

