// @generated: @expo/next-adapter@4.0.12
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#shared-steps

module.exports = { presets: ['@expo/next-adapter/babel'], plugins: [
        ["module-resolver", {
            "alias": {
                "@Utilities": "./src/utilities",
                "@Components": "./src/components",
                "@Screens": "./src/screens",
                "@Hooks": "./src/hooks",
                "@Assets": "./assets",
                "@Types": "./types"
            },
            "extensions": [
                ".js",
                ".jsx",
                ".ts",
                ".tsx",
            ]
        }],
    ]};
