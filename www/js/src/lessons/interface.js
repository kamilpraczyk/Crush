"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/tsd.d.ts" />
var dictionary = require('../utils/dictionary');
var TimeOutError = (function (_super) {
    __extends(TimeOutError, _super);
    function TimeOutError(message) {
        _super.call(this, message);
        this.message = message;
        this.name = 'TimeOutError';
        this.message = dictionary.SERVER_ERROR_TIMEOUT;
        this.stack = (new Error()).stack;
    }
    TimeOutError.prototype.toString = function () {
        return this.name + ': ' + this.message;
    };
    return TimeOutError;
}(Error));
exports.TimeOutError = TimeOutError;
var InvalidServerDataError = (function (_super) {
    __extends(InvalidServerDataError, _super);
    function InvalidServerDataError(message) {
        _super.call(this, message);
        this.message = message;
        this.name = 'InvalidServerData';
        this.message = dictionary.SERVER_ERROR_INVALID_DATA;
        this.stack = (new Error()).stack;
    }
    InvalidServerDataError.prototype.toString = function () {
        return this.name + ': ' + this.message;
    };
    return InvalidServerDataError;
}(Error));
exports.InvalidServerDataError = InvalidServerDataError;
var ServerRequestError = (function (_super) {
    __extends(ServerRequestError, _super);
    function ServerRequestError(message) {
        _super.call(this, message);
        this.message = message;
        this.name = 'ServerRequestError';
        this.message = dictionary.SERVER_ERROR_REQUEST;
        this.stack = (new Error()).stack;
    }
    ServerRequestError.prototype.toString = function () {
        return this.name + ': ' + this.message;
    };
    return ServerRequestError;
}(Error));
exports.ServerRequestError = ServerRequestError;
