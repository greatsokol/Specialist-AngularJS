angular
    .module("Application")
    .controller("Controller", ($scope) => {
        $scope.goods = [
            { name: "good1", count: 10, price: 1 },
            { name: "good2", count: 20, price: 2 },
            { name: "good3", count: 30, price: 3 },
            { name: "good4", count: 40, price: 4 },
            { name: "good5", count: 50, price: 5 },
            { name: "good6", count: 60, price: 6 },
            { name: "good7", count: 70, price: 7 }
        ];


    })