/// <reference path="../../typings/tsd.d.ts" />
import _ = require("underscore");
import {space}  from '../lessons/helper/constants';

const read = function (value: string) {
  console.log('read', value);
  if ((<any>window).SpeechSynthesisUtterance && (<any>window).speechSynthesis) {
    value = value.replace(space, '');
    value = value.replace('_', '');

    const utterance = new (<any>window).SpeechSynthesisUtterance(value);
    const voices = (<any>window).speechSynthesis.getVoices();
    //Google UK English Male
    //https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
    utterance.voice = voices.filter(function (voice: any) { return voice.name == "Google UK English Male"; })[0];
    (<any>window).speechSynthesis.speak(utterance);
  }
}


const stopReading = function () {
  (<any>window).speechSynthesis && (<any>window).speechSynthesis.cancel();
}

export = {
  read,
  stopReading
};
