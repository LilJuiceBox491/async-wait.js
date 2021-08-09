// Make sure util is required
require("util");

// Function definitions
async function wait(time) {
  await require("util").promisify(setTimeout)(time);
}

async function configure() {
  await require("util").promisify(setTimeout)(0);
}

// Export
module.exports = {
  wait,
  configure
}