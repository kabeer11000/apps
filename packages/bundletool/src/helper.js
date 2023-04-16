const fs = require('fs-extra');
const path = require('path');
const request = require('request');
const chalk = require('chalk');
const spawn = require('child_process').spawn;

const DEFAULT_BASE_DIRECTORY =  path.resolve(__dirname, '..', 'bin');
const BUNDLETOOL_URL = "https://api.github.com/repos/google/bundletool/releases/latest";
const BUNDLETOOL_FILE_NAME = 'bundletool.jar';
const rainbowMode = process.env['ADB_RAINBOW'] || false;
const moreLogging = process.env['TOOL_LOGGING'] || false;
const highlightErrors = process.env['ADB_HIGHLIGHT_ERRORS'] || true;
const errorRegex = new RegExp('error:', 'i');
const BUNDLETOOL_FILE_PATH = path.join(DEFAULT_BASE_DIRECTORY, BUNDLETOOL_FILE_NAME);

function logRawLine(line) {
	process.stdout.write(line);
}

function lineLoggerMap(line) {
	if (line.length > 0) {
		if (rainbowMode) {
			let randomInt = Math.floor(Math.random() * colors.length);
			let info = chalk[colors[randomInt]];
			process.stdout.write(info(line));
		} else if (highlightErrors) {
			if (errorRegex.test(line)) {
				let error = chalk['red'];
				process.stdout.write((error(line)));
			} else {
				logRawLine(line);
			}
		} else {
			logRawLine(line);
		}
	}
}

const checkIfJava = function checkIfJava(callback) {
  var spawnProc = spawn('java', ['-version']);
  spawnProc.on('error', function(err){
      return callback(err, null);
  });
  spawnProc.stderr.on('data', function(data) {
      data = data.toString().split('\n')[0];
      var javaVersion = new RegExp('java version').test(data) ? data.split(' ')[2].replace(/"/g, '') : false;
      if (javaVersion != false) {
          // We have Java installed
          return callback(null, javaVersion);
      } else {
          // TODO: No Java installed
        return callback(new Error('Java not found'));
      }
  });
};

function stdoutToLines(stdout) {
	let stdoutString = stdout.toString();
	stdoutString.split('\r').map(lineLoggerMap);
}

const spawnProcess = function spawnProcess(path, userArgs) {
	let spawnOptions = {};
	if (spawnOptions.inherit) {
		spawnOptions.stdio = 'inherit';
	}
	spawnOptions.stdio = 'inherit';
	let toolProcess = spawn(path, userArgs, { stdio: ['inherit', null, 'inherit'], shell: true });
	if(moreLogging) {
		console.log(`${path} ${userArgs}`);
	}
	toolProcess.on('error', function (err) {
		console.error(`Failed to start child process. ${err}`);
		process.exit(1);
	});
	toolProcess.stdout.on('data', function (data) {
		stdoutToLines(data);
	});
};

const checkBinaryExists = function checkBinaryExists() {
  if (fs.existsSync(BUNDLETOOL_FILE_PATH)) return BUNDLETOOL_FILE_PATH;
  else return false;
};

const getFileStream = function getFileStream() {
  return new Promise(function (resolve, reject) {
    fs.ensureDir(DEFAULT_BASE_DIRECTORY)
    .then(function () {
      resolve(fs.createWriteStream(BUNDLETOOL_FILE_PATH));
    })
    .catch(reject);
  });
};

const downloadBinary = function downloadBinary() {
  return new Promise(function (resolve, reject) {
    request(BUNDLETOOL_URL, {
      headers: {
        'User-Agent': 'Android-Bundletool-Wrapper-JS',
      }
    }, async function (error, response) {
      if (error) { 
        return reject(new Error('Unable to download the binary'));
      }
      const responseJSON = JSON.parse(response.body);
      const assetDownloadURL = responseJSON.assets[0] && responseJSON.assets[0].browser_download_url;
      request(assetDownloadURL, {
        headers: {
            'Cache-Control': 'max-age=0',
            'Connection': 'keep-alive',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
        },
        gzip: true
      })
      .pipe(await getFileStream())
      .on('close', function () {
        console.log(chalk.green(`The file is finished downloading.`));
        resolve(BUNDLETOOL_FILE_PATH);
      });
    });
  });
};

module.exports.checkIfJava = checkIfJava;
module.exports.spawnProcess = spawnProcess;
module.exports.downloadBundletool = downloadBinary;
module.exports.checkIfBundletoolExists = checkBinaryExists;
