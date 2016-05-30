var constants_1 = require('../lessons/helper/constants');
var read = function (value) {
    console.log('read', value);
    if (window.SpeechSynthesisUtterance && window.speechSynthesis) {
        value = value.replace(constants_1.space, '');
        value = value.replace('_', '');
        var utterance = new window.SpeechSynthesisUtterance(value);
        var voices = window.speechSynthesis.getVoices();
        utterance.voice = voices.filter(function (voice) { return voice.name == "Google UK English Male"; })[0];
        window.speechSynthesis.speak(utterance);
    }
};
var stopReading = function () {
    window.speechSynthesis && window.speechSynthesis.cancel();
};
module.exports = {
    read: read,
    stopReading: stopReading
};
