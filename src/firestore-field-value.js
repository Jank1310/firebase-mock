'use strict';

function MockFirestoreFieldValue(type, value) {
  this.type = type;
  if(this.type === 'serverTimestamp') {
    this._createdAt = new Date();
  }
  if(this.type === 'increment') {
    this._incrementValue = value;
  }
}

MockFirestoreFieldValue.prototype.isEqual = function (other) {
  if (other instanceof MockFirestoreFieldValue && this.type === other.type) {
    return true;
  }
  return false;
};

MockFirestoreFieldValue.delete = function () {
  return new MockFirestoreFieldValue('delete');
};

MockFirestoreFieldValue.serverTimestamp = function () {
  return new MockFirestoreFieldValue('serverTimestamp');
};

MockFirestoreFieldValue.increment = function (value) {
  return new MockFirestoreFieldValue('increment', value);
};

module.exports = MockFirestoreFieldValue;
