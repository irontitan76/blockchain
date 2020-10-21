const Block = require('./Block');
const _colors = require('colors/safe');

class Blockchain {
  constructor(){
    this.blockchain = [this.createGenesisBlock()];
    this.difficulty = 6;
  };

  createBlock(newBlock){
    const startedAt = new Date();
    newBlock.precedingHash = this.getLastBlock().hash;
    newBlock.proofOfWork(this.difficulty);       
    this.blockchain.push(newBlock);
    console.log(`${_colors.bold.blue('[ ALPHA ]')} ${startedAt}`);
    console.log(`${_colors.bold.blue('[ OMEGA ]')} ${new Date()}`);
  };

  createGenesisBlock(){
    return new Block(0, new Date(), 'Genesis', '0');
  };

  getLastBlock() {
    return this.blockchain[this.blockchain.length - 1];
  };

  verify() {
    for(let i = 1; i < this.blockchain.length; i = i + 1){
      const currentBlock = this.blockchain[i];
      const precedingBlock= this.blockchain[i-1];

      if(currentBlock.hash !== currentBlock.computeHash()){
          return false;
      }

      if(currentBlock.precedingHash !== precedingBlock.hash)
        return false;
      }

    return true;
  };
};

  module.exports = Blockchain;