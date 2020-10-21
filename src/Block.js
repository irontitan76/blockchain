const SHA256 = require('crypto-js/sha256');
const _colors = require('colors');
const updateLine = require('./updateLine');

class Block {
  constructor(index, timestamp, data, precedingHash = ' ') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
    this.nonce = 0;
  }

  computeHash() {
    return SHA256(
      this.index
      + this.precedingHash
      + this.timestamp
      + JSON.stringify(this.data)
      + this.nonce
    ).toString();
  };

  proofOfWork(difficulty){
    updateLine(_colors.cyan('Mining...'));
    const check = Array(difficulty + 1).join('0');

    while(this.hash.substring(0, difficulty) !== check){
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
};

module.exports = Block;

