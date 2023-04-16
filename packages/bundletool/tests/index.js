const bundletool = require('../src/bundletool').bundletool;
const bundletoolCommands = require('../src/bundletool').bundletoolCommands;

bundletool({
  command: bundletoolCommands.buildApks,
  bundlePath: '/Users/aditya/ScratchWork/android-bundletool/src/app.aab',
  outputPath: '/Users/aditya/ScratchWork/android-bundletool/app.apks',
});