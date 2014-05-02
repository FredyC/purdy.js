var Lab = require('lab');
var Purdy = require('../');


// Declare internals

var internals = {};


// Test shortcuts

var expect = Lab.expect;
var before = Lab.before;
var after = Lab.after;
var describe = Lab.experiment;
var it = Lab.test;


describe('Purdy', function() {

    it('should purdy print', function(done) {

        Purdy('winter');
        Purdy(123);
        Purdy([1,2,'foo', it, Array.isArray, new Date,1,1,1,1,12,[1,2]]);
        Purdy({a: 3, b: 'foo', rain: it, d: {king: 'cobra'}});
        Purdy(Date);
        done();
    });
});

