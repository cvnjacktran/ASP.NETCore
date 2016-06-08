"use strict";

// register app
var app = angular.module('mvcApp', [
    'ngRoute'
]);

// register namespace
var mvcApp = {};
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

"use strict";
+function (mvcApp) {
    var ProductService = function ($http, $q) {
        this.httpService = $http;
        this.qService = $q;
        this.pathApi = "";
    };

    ProductService.prototype.getProducts = function (productResquest) {
        var self = this;
        var deferred = self.qService.defer();
        self.httpService.get(self.pathApi + "GetProducts")
        .then(function (response) {
            deferred.resolve(response.data);
        }, function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    };

    ProductService.prototype.getText = function () {
        return "this is message from service";
    };

    mvcApp.ProductService = ProductService;

}(mvcApp || (mvcApp = {}))

"use strict";
+function (mvcApp) {

    var HomeController = (function () {
        function HomeController($scope, productService, productFactory) {
            this.scope = $scope;
            this.productService = productService;
            this.productFactory = productFactory;

            this.firstName = "Jack";
            this.lastName = "Tran";

            this.getFullName();
        }
        HomeController.prototype = {
            getFullName: function () {
                var self = this;
                self.scope.fullName = self.firstName + " " + self.lastName;
                return self.scope.fullName;
            },

            alertMsg: function () {
                var msg1 = this.productService.getText();
                var msg2 = this.productFactory.getText();
                console.log(msg1);
                console.log(msg2);
            }
        }
        return HomeController;
    }());

    mvcApp.HomeController = HomeController;

}(mvcApp || (mvcApp = {}));
"use strict";

//Rute config
app.config(routeConfig);
function routeConfig($routeProvider) {
    var baseTemplateUrl = '../js/app/partials/';
    $routeProvider
    .when('/home', {
        templateUrl: baseTemplateUrl + 'home.html',
        controller: 'HomeController',
        controllerAs: 'home'
    })
    .otherwise({
        redirectTo: '/view2'
    });
};

// Dependency injection
// Factories
app.factory("productFactory", function () {
    return mvcApp.ProductFactory;
});

// Services
app.service("productService", ['$http', '$q',function ($http, $q) {
        return new mvcApp.ProductService($http, $q);
    }
]);

// Controllers
mvcApp.HomeController.$inject = ['$scope', 'productService', 'productFactory'];
app.controller('HomeController', mvcApp.HomeController);