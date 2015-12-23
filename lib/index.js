'use strict';

var Transform = require('streams').Transform,
    inherits = require('util').inherits;

function GerritStream(options) {
  if (!(this instanceof GerritStream)) { return new GerritStream(options); }

  Transform.call(this, options);
}

inherits(GerritStream, Transform);

GerritStream.prototype.connect = function () {
  return this;
};

exports = module.exports = GerritStream;
