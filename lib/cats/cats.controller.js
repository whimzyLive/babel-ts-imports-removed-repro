"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.CatsController = void 0;

var _common = require("@nestjs/common");

var _cats = require("./cats.service");

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _dec,
  _dec2,
  _dec3,
  _dec4,
  _dec5,
  _dec6,
  _dec7,
  _dec8,
  _dec9,
  _dec10,
  _dec11,
  _dec12,
  _class,
  _class2;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _applyDecoratedDescriptor(
  target,
  property,
  decorators,
  descriptor,
  context
) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;
  if ("value" in desc || desc.initializer) {
    desc.writable = true;
  }
  desc = decorators
    .slice()
    .reverse()
    .reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);
  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }
  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }
  return desc;
}

let CatsController =
  ((_dec = (0, _common.Controller)("cats")),
  (_dec2 = Reflect.metadata("design:type", Function)),
  (_dec3 = Reflect.metadata("design:paramtypes", [
    typeof _cats.CatsService === "undefined" ? Object : _cats.CatsService,

  // LOOK HERE:>>> AWS is will be unkwnon, since no import AWS from 'aws-sdk made it's way through <<<:LOOK HERE
    typeof _awsSdk.default.S3 === "undefined" ? Object : AWS.S3,
  ])),
  (_dec4 = (0, _common.Get)()),
  (_dec5 = Reflect.metadata("design:type", Function)),
  (_dec6 = Reflect.metadata("design:paramtypes", [])),
  (_dec7 = (0, _common.Get)("cat")),
  (_dec8 = Reflect.metadata("design:type", Function)),
  (_dec9 = Reflect.metadata("design:paramtypes", [])),
  (_dec10 = (0, _common.Get)("s3-version")),
  (_dec11 = Reflect.metadata("design:type", Function)),
  (_dec12 = Reflect.metadata("design:paramtypes", [])),
  _dec(
    (_class =
      _dec2(
        (_class =
          _dec3(
            (_class =
              ((_class2 = class CatsController {
                constructor(catsService, s3) {
                  this.catsService = catsService;
                  this.s3 = s3;
                }

                findAll() {
                  return "This action returns all cats";
                }

                createAndGetCat() {
                  return this.catsService.findAll();
                }

                getS3Version() {
                  return this.s3.apiVersions;
                }
              }),
              (_applyDecoratedDescriptor(
                _class2.prototype,
                "findAll",
                [_dec4, _dec5, _dec6],
                Object.getOwnPropertyDescriptor(_class2.prototype, "findAll"),
                _class2.prototype
              ),
              _applyDecoratedDescriptor(
                _class2.prototype,
                "createAndGetCat",
                [_dec7, _dec8, _dec9],
                Object.getOwnPropertyDescriptor(
                  _class2.prototype,
                  "createAndGetCat"
                ),
                _class2.prototype
              ),
              _applyDecoratedDescriptor(
                _class2.prototype,
                "getS3Version",
                [_dec10, _dec11, _dec12],
                Object.getOwnPropertyDescriptor(
                  _class2.prototype,
                  "getS3Version"
                ),
                _class2.prototype
              )),
              _class2))
          ) || _class)
      ) || _class)
  ) || _class);
exports.CatsController = CatsController;
