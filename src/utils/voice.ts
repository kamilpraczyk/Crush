/// <reference path="../../typings/tsd.d.ts" />
import _ = require("underscore");
import {space}  from '../lessons/helper/constants';

const read = function (value: string) {
  value = value.replace(space, '');
  value = value.replace('_', '');

  var utterance = new (<any>window).SpeechSynthesisUtterance(value);
  var voices = (<any>window).speechSynthesis.getVoices();

  utterance.voice = voices.filter(function (voice: any) { return voice.name == 'Alex'; })[0];

  (<any>window).speechSynthesis.speak(utterance);
}


 const stopReading = function () {
  (<any>window).speechSynthesis.cancel();
}

export = {
  read,
  stopReading
};
