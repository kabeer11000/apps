const commands = require('./contants').commands;
const helper = require('./helper');

/*
opts: {
  command map object string required
  bundlePath string required
  outputPath string required
  overwrite boolean optional
  localTesting boolean optional
}
*/

function bundletool(opts) {
  if (!opts.bundlePath || !opts.outputPath) {
    console.error('Bundletool: requires bundlePath and outputPath to function');
    process.exit(1); // return with err code
  }

  if (!opts.command) {
    console.error('Bundletool: requires command to execute');
    process.exit(1); // return with err code
  }

  helper.checkIfJava(function (javaError, javaVersion) {
    if (javaError) {
      console.log('Bundletool: java not found.');
      process.exit(1); // return with err code
    }
    const bundletoolPath = helper.checkIfBundletoolExists();
    const command = opts.command;
    if (bundletoolPath) {
      const optsArgs = [];
      optsArgs.push(
        '-jar',
        bundletoolPath,
        command,
        `--bundle=${opts.bundlePath}`,
        `--output=${opts.outputPath}`,
        '--overwrite',
        '--mode=universal'
      );
      // spawn process with user arguments
      helper.spawnProcess('java', optsArgs);
    } else {
      // download the binary and then start the process with user args
    }
  });
}

module.exports = {
  bundletool: bundletool,
  bundletoolCommands: commands,
};
