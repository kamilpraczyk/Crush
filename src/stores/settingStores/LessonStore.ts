import {LessonMapFace, LessonFace} from './LessonsInterfaces';

let _lessons: LessonMapFace = {
    lesson1: {
        name: 'lesson 1',
        disable: false
    },
    lesson2: {
        name: 'lesson 2',
        disable: false
    }
};


export = {
    getAll: function(): LessonMapFace {
        return _lessons;
    },
    getItem: function(id: string): LessonFace {
        return _lessons[id]
    }
};