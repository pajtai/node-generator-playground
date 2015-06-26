'use strict';

var BB = require('bluebird'),
    delay = require('./delay');

module.exports = function(silent) {
    BB
        .all([
            delay('p1start', 'p1end', 0, silent),
            delay('p2start', 'p2end', 0, silent),
            delay('p3start', 'p3end', 0, silent)
        ])
        .then(function() {
            return delay('s1start', 's1end', 0, silent)
        })
        .then(function() {
            return delay('s2start', 's2end', 0, silent)
        })
        .then(function() {
            return delay('s3start', 's3end', 0, silent)
        });
};

