'use strict';
const upath = require('upath');
const sh = require('shelljs');
const renderPug = require('./render-pug.cjs');

const srcPath = upath.resolve(__dirname, '../src');

sh.find(srcPath).forEach(_processFile);

function _processFile(filePath) {
    if (
        filePath.match(/\.pug$/) &&
        !filePath.match(/include/) &&
        !filePath.match(/mixin/) &&
        !filePath.match(/\/pug\/layouts\//)
    ) {
        renderPug(filePath);
    }
}
