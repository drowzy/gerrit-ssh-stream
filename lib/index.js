'use strict';

var Transform = require('stream').Transform,
    inherits = require('util').inherits,
    fs = require('fs'),
    SSHClient = require('ssh2').Client;

function GerritStream(options) {
  options = options || {};

  if (!(this instanceof GerritStream)) { return new GerritStream(options); }

  Transform.call(this, options);

  this._host = options.host;
  this._port = options.port;
  this._username = options.username;
  this._privateKey = options.privateKey;
}

inherits(GerritStream, Transform);

GerritStream.prototype._transform = function (chunk, enc, next) {
  this.push(chunk);
  next();
};

GerritStream.prototype.connect = function () {
  var client = new SSHClient();

  client.on('ready', () => {
    client.exec('gerrit stream-events', (err, stream) => {
      if (err) {
        this.emit('error', err);
      }

      stream
      .pipe(this);
    });
  })
  .connect({
    host: this._host,
    port: this._port,
    username: this._username,
    privateKey: fs.readFileSync(this._privateKey)
  });

  return this;
};

exports = module.exports = GerritStream;
