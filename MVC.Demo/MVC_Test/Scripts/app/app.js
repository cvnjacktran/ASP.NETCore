"use strict";

//Rute config
app.config(routeConfig);
function routeConfig($routeProvider) {
    var baseTemplateUrl = '../Scripts/app/partials/';
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