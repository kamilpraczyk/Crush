/// <reference path="../../../typings/tsd.d.ts" />


let _setting = {
    'setting1': {
        name: 'setting 1',
        disable: false
    },
    'setting2': {
        name: 'setting 2',
        disable: false
    }
};



export = {
    getAll: function() : any {
        return _setting;
    },
        getItem: function(id: string): any {
        return _setting[id]
    }
};