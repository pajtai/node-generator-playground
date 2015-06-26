'use strict';

var newSchool = require('./new-school'),
    oldSchool = require('./old-school'),
    Benchmark = require('benchmark'),
    suite = new Benchmark.Suite;

suite
    .add('New School Promises', function() {
        newSchool();
    })
    .add('Old School Promises', function() {
        oldSchool();
    })
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').pluck('name'));
    })
    .run({ 'async': true });

