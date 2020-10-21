const Block = require('./Block');
const Blockchain = require('./Blockchain');

const smashingCoin = new Blockchain();

smashingCoin.createBlock(new Block(1, new Date(), {
  sender: 'Ross Sheppard',
  recipient: 'Kelley Sheppard',
  amount: 82.52
}));

smashingCoin.createBlock(new Block(2, new Date(),{
  sender: 'Kelley Sheppard',
  recipient: 'LJ Lambert',
  amount: 76.89
}));

smashingCoin.createBlock(new Block(2, new Date(),{
  sender: 'Kelley Sheppard',
  recipient: 'Sarrah Sheppard',
  amount: 43.23
}));

console.log(JSON.stringify(smashingCoin.blockchain, null, 4));