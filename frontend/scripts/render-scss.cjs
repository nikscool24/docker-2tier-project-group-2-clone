'use strict';
const autoprefixer = require('autoprefixer');
const fs = require('fs');
const packageJSON = require('../package.json');
const upath = require('upath');
const postcss = require('postcss');
const sass = require('sass');
const sh = require('shelljs');

const stylesPath = '../src/scss/styles.scss';
const destPath = upath.resolve(__dirname, '../dist/css/styles.css');

// Define entryPoint BEFORE using it
const entryPoint = `/*!
* Start Bootstrap - ${packageJSON.title} v${packageJSON.version} (${packageJSON.homepage})
* Copyright 2013-${new Date().getFullYear()} ${packageJSON.author}
* Licensed under ${packageJSON.license} (https://github.com/StartBootstrap/${packageJSON.name}/blob/master/LICENSE)
*/
@import "${stylesPath}"
`;

module.exports = function renderSCSS() {
    const results = sass.renderSync({
        data: entryPoint,
        includePaths: [
            upath.resolve(__dirname, '../node_modules'),
        ],
    });

    const destPathDirname = upath.dirname(destPath);
    if (!sh.test('-e', destPathDirname)) {
        sh.mkdir('-p', destPathDirname);
    }

    postcss([autoprefixer])
        .process(results.css, { from: 'styles.css', to: 'styles.css' })
        .then((result) => {
            result.warnings().forEach((warn) => {
                console.warn(warn.toString());
            });
            fs.writeFileSync(destPath, result.css.toString());
        });
};
