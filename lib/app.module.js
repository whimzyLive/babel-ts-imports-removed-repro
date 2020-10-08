"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppModule = void 0;

var _common = require("@nestjs/common");

var _cats = require("./cats/cats.module");

var _dec, _class;

let AppModule = (_dec = (0, _common.Module)({
  imports: [_cats.CatsModule]
}), _dec(_class = class AppModule {}) || _class);
exports.AppModule = AppModule;