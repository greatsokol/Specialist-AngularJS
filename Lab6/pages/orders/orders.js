angular
    .module("Application")
    .controller("ordersController", function ($scope, $rootScope) {
        $scope.$on("$routeChangeSuccess", () => {
            if ($rootScope.selectedPerson !== undefined) {
                $scope.order = [
                    { name: "товар 1", price: 20 * $rootScope.selectedPerson, quantity: 10 },
                    { name: "товар 2", price: 2 * $rootScope.selectedPerson, quantity: 20 },
                    { name: "товар 3", price: 5 * $rootScope.selectedPerson, quantity: 100 },
                    { name: "товар 4", price: 66 * $rootScope.selectedPerson, quantity: 1000 },
                    { name: "товар 5", price: 8 * $rootScope.selectedPerson, quantity: 55 },
                    { name: "товар 6", price: 10 * $rootScope.selectedPerson, quantity: 88 },
                    { name: "товар 7", price: 3 * $rootScope.selectedPerson, quantity: 100 },
                    { name: "товар 8", price: 1, quantity: 33 },
                    { name: "товар 9", price: 22, quantity: 75 },
                ];
            } else {
                $scope.order = null;
            }
        });
    });