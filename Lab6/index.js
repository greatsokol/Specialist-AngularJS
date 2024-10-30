angular
    .module("Application", ["ngRoute"])
    .config(($routeProvider) => {
        $routeProvider
            .when("/", {
                templateUrl: "pages/main/main.html",
            })
            .when("/persons", {
                templateUrl: "pages/persons/persons.html",
                controller: "personsController"
            })
            .when("/orders", {
                templateUrl: "pages/orders/orders.html",
                controller: "ordersController"
            })
            .otherwise({
                template: "<h1>404</h1>"
            })
    });