// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname)
module.exports = {...config, resolver: {...config.resolver, extraNodeModules: require('node-libs-react-native')}};
