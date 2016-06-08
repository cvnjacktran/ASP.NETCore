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
