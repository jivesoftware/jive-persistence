var testUtils = require('jive-testing-framework/testUtils');
var jive = require('jive-sdk');
var jiveMongo = require('../');

var makeRunner = function() {
    var runner = Object.create(require('jive-testing-framework/baseSuite'));

    runner.getParentSuiteName = function() {
        return 'jive';
    };

    runner.onTestStart = function(test) {
        var persistence = new jiveMongo({
            'databaseUrl' : 'mongodb://localhost:27017/mongoTestDB'
        });
        test['ctx']['persistence'] = persistence;
    };

    runner.onTestEnd = function(test) {
        test['ctx']['persistence'].destroy();
    };

    runner.setupSuite = function(test) {
        test['testUtils'] = testUtils;
        test['jive'] = jive;
        test['jiveMongo'] = jiveMongo;
    };

    runner.teardownSuite = function(test) {
    };

    return runner;
};

makeRunner().runTests(
    {
        'context' : {
        },
        'runMode' : 'test',
        'testcases' : process.cwd()  + '/library',
        'timeout' : 5000
    }
).then( function(allClear) {
    if ( allClear ) {
        process.exit(0);
    } else {
        process.exit(-1);
    }
});