"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatsModule = void 0;

var _common = require("@nestjs/common");

var _cats = require("./cats.controller");

var _cats2 = require("./cats.service");

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CatsModule = (_dec = (0, _common.Module)({
  controllers: [_cats.CatsController],
  providers: [_cats2.CatsService, _awsSdk.default.S3]
}), _dec(_class = class CatsModule {}) || _class);
exports.CatsModule = CatsModule;