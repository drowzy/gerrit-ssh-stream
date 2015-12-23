# gerrit-ssh-stream [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Gerrit events as a stream

## Installation

```sh
$ npm install --save gerrit-ssh-stream
```

## Usage

```js
var gerritSSH = require('gerrit-ssh-stream');

gerritSSH({
  host: 'gerrit.host.com',
  port: 4443,
  username: 'simon',
  privateKey: '/path/to/.ssh/id_rsa'
}).connect().pipe(process.stdout);
```
## License

MIT © [Simon Thörnqvist]()


[npm-image]: https://badge.fury.io/js/gerrit-ssh-stream.svg
[npm-url]: https://npmjs.org/package/gerrit-ssh-stream
[travis-image]: https://travis-ci.org/drowzy/gerrit-ssh-stream.svg?branch=master
[travis-url]: https://travis-ci.org/drowzy/gerrit-ssh-stream
[daviddm-image]: https://david-dm.org/drowzy/gerrit-ssh-stream.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/drowzy/gerrit-ssh-stream
