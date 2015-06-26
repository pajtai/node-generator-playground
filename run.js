'use strict';

var BB = require('bluebird');

console.log('old school promises');
require('./old-school')(false);

BB
    .delay(1000)
    .then(function() {
        console.log();
        console.log('new school promises');
        require('./new-school')(false);
    });
