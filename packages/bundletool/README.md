# android-bundletool # (500+ Downloads)

This is a fully self contained module that wraps the Android Bundletool (https://github.com/google/bundletool)

This grabs the latest Bundletool Platform tools from https://developer.android.com/studio/command-line/bundletool

Fully multi platform and tested on windows, Linux and Mac OS. Please let me know if your OS does not work.

## Requirements ##
* NodeJs 8+ recommended NodeJs 4/6 should also work but are unsupported
* Java JDK 8+

## Programmatic Usage ##
~~~~
const bundletool = require('../src/bundletool').bundletool;
const bundletoolCommands = require('../src/bundletool').bundletoolCommands;

bundletool({
  command: bundletoolCommands.buildApks,
  bundlePath: '/Users/aditya/ScratchWork/android-bundletool/src/app.aab',
  outputPath: '/Users/aditya/ScratchWork/android-bundletool/app.apks',
});
~~~~

With Version 1.0.0 bundletoolCommands now returns an object with the following commands:
~~~
buildApks: 'build-apks',
buildBundle: 'build-bundle',
extractApks: 'extract-apks',
installApks: 'install-apks',
version: 'version',
~~~


## Contributions ##
* Always welcome 

## Roadmap ##
* more customisation to support all buildtool commands

## TroubleShooting ##
* EACCESS errors on unix: `Error: EACCES: permission denied`
  https://docs.npmjs.com/getting-started/fixing-npm-permissions
* Be careful with option one because doing a chown on usr/bin can override the sudo command on unix systems
* You might have to do `chmod a+x node_modules/android-buildtool/bin` for the binary to be executable

## Known Issues ##
* Please add any issues you find to github

### Running Tests ###
* `npm test`

### Contributing guidelines ###
* Write tests
* Check linting
* Do a Pull request

### Legal ###
* By using this module you agree to any terms and conditions outlined by Google,
documented in the NOTICE.txt under the platform tools installation

### Any Questions? ###
* Feel free to contact me on github
