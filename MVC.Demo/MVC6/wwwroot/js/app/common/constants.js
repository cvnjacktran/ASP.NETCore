"use strict";
var Constants = (function () {
    function Constants() {
    }

    Constants.pathApi = "this is the path API";

    Constants.testFn = function () {
        console.log("test function from constants.");
    }

    return Constants;
}());