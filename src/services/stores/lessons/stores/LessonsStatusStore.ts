import _ = require('underscore');
import dictionary = require('../../../../utils/dictionary');
import css = require('../../../../utils/css/css');
import utils = require('../../../../utils/utils');
import { LessonFace } from '../../../../types';

interface LessonsMap {
    [uid: string]: LessonFace
}

interface MapStatus {
    [uid: string]: number
}

interface LessonStatusState {
    allBoardsLength: number,
    allBoardsUndane: number,
    allBoardsCorrect: number,
    allBoardsIncorrect: number,
    entriesCorrectPercentage: string,
    finishedLessons: number,
    // iconSetStatus: { name: number, icon: string }[]
}

function getNewLessonsStatus(map: LessonsMap, allBoardsLength: number): LessonStatusState {
    let allBoardsCorrect = 0;
    let allBoardsIncorrect = 0;
    let finishedLessons = 0;
    // const statusIcons: MapStatus = {};

    _.mapObject(map, (lesson, uid) => {
        if (lesson.numberFinished) {
            finishedLessons++;
            allBoardsCorrect += lesson.numberFinished;
            allBoardsIncorrect += (lesson.boards.length - lesson.numberFinished);
            /*  lesson.iconSet.map(icon => {
                  if (!statusIcons[icon]) statusIcons[icon] = 0;
                  ++statusIcons[icon];
              });*/
        }
    });

    /* const iconSetStatus: { name: number, icon: string }[] = [];
     _.mapObject(statusIcons, (nr, icon) => {
         iconSetStatus.push({ name: nr, icon });
     });*/

    return {
        allBoardsLength: allBoardsLength,
        allBoardsUndane: allBoardsLength - allBoardsCorrect - allBoardsIncorrect,
        allBoardsCorrect,
        allBoardsIncorrect,
        entriesCorrectPercentage: utils.toPercentHumanize(allBoardsCorrect, allBoardsLength),
        finishedLessons,
        // iconSetStatus
    }
}


export {
    getNewLessonsStatus,
    LessonStatusState
}