"use strict";

require("reflect-metadata");

var _core = require("@nestjs/core");

var _app = require("./app.module");

async function bootstrap() {
  const app = await _core.NestFactory.create(_app.AppModule);
  await app.listen(3000);
}

bootstrap();