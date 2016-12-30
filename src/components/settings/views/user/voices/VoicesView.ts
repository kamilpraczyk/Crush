
import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import { getState, APIState } from '../../../../../services';
import { events } from '../../../../../events';
const {div, select, option} = React.DOM;

function getTitle() {
    return div({
        style: CommonCss.getText()
    }, dictionary.AUDIO_LANGUAGE);
}

function getVoices(apiState: APIState) {
    return apiState.voice.voices.map(voice => {
        return option({ key: voice.name, value: voice.name }, voice.name);
    });
}

function getInput(apiState: APIState) {
    return select({
        style: CommonCss.getBoxInput(),
        value: apiState.voice.current && apiState.voice.current.name,
        onChange: (e: any) => events.onChangeVoice.publish(e.target.value as string)
    }, getVoices(apiState))
}

function render() {

    const apiState = getState();

    return div({
        style: CommonCss.getPanel()
    }, div({
        style: CommonCss.getContainer()
    },
        getTitle(),
        getInput(apiState)
    ));
}

export = render;