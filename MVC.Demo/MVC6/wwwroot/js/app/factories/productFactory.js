"use strict";
+function (mvcApp) {

    var ProductFactory = function () {

    };

    ProductFactory.create = function () {
        return "this is message from factory";
    };

    ProductFactory.getText = function () {
        return "this is message from factory";
    };

    mvcApp.ProductFactory = ProductFactory;

}(mvcApp || (mvcApp = {}))
