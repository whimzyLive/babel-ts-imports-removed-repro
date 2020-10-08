"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatsService = void 0;

var _common = require("@nestjs/common");

var _dec, _class, _temp;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let CatsService = (_dec = (0, _common.Injectable)(), _dec(_class = (_temp = class CatsService {
  constructor() {
    _defineProperty(this, "cats", []);
  }

  create(cat) {
    this.cats.push(cat);
  }

  findAll() {
    this.create({
      color: 'black'
    });
    this.create({
      color: 'brown'
    });
    return this.cats;
  }

}, _temp)) || _class);
exports.CatsService = CatsService;