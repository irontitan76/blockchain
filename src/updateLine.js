function updateLine(val) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(val);
  process.stdout.write('\n');
};

module.exports = updateLine;