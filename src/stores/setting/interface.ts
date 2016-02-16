/// <reference path="../../../typings/tsd.d.ts" />

export interface SettingFace {
    name: string,
    disable: boolean,
    active: boolean,
    hide?: boolean
}

export interface SettingMapFace {
    [id: string]: SettingFace;
}
