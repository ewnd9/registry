'use strict';

function Registry(name) {
  this.name = name;
  this[this.name] = {};
}

Registry.prototype.define = function(name, value) {
  this[this.name][name] = value;
  value.services = this[this.name];

  return value;
};

module.exports = Registry;
