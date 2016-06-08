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