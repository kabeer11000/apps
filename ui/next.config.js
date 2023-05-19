// @generated: @expo/next-adapter@4.0.12
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const {withExpo} = require('@expo/next-adapter')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
    'solito',
    // add other packages here that need transpiling, such as moti
])

module.exports = withPlugins(
    [withTM, withFonts, withImages, [withExpo, {projectRoot: __dirname}]],
    {
        // your next config goes here ...
    }
)