'use strict';

var BB = require('bluebird');

module.exports = delay;

function delay(start, end, time, silent) {
    silent || console.log(start);
    return BB
        .delay(time)
        .then(function() {
            silent || console.log(end);
        });
}