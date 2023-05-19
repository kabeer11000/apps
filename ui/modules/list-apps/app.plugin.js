const {createRunOncePlugin} = require("@expo/config-plugins")
const pkg = require('./package.json');

const withListApps = (config, props = {}) => {
    return config;
};
module.exports = createRunOncePlugin(withListApps, pkg.name, pkg.version);