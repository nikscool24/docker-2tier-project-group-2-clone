'use strict';
const sh = require('shelljs');
const upath = require('upath');

const destPath = upath.resolve(__dirname, '../dist');
sh.rm('-rf', `${destPath}/*`);
