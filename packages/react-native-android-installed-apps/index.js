const RNAndroidInstalledApps = require("react-native").NativeModules.RNAndroidInstalledApps;

module.exports = {
    getApps() {
        return RNAndroidInstalledApps.getApps();
    },
    getNonSystemApps() {
        return RNAndroidInstalledApps.getNonSystemApps();
    },
    getSystemApps() {
        return RNAndroidInstalledApps.getSystemApps();
    }
};
