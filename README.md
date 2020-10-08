# Repro for issue #12150

Look at lib/cats/cats.controller.js:72

- here `AWS.S3` is left as is after transpilation, but there is not such thing as `AWS` as somewhere in transpilation it actual import got refactored to `var _awsSdk = _interopRequireDefault(require("aws-sdk"));` but injected type still references old variable `AWS.S3` causing `Reference Error: AWS is not defined`
