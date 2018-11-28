'use strict';

function FirestoreTimestamp(createdAt) {
  this._createdAt = createdAt;
}

FirestoreTimestamp.prototype.toDate = function () {
  return new Date(this._createdAt);
};

module.exports = FirestoreTimestamp;
