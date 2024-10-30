angular
    .module("goodsModule", [])
    .controller("goodsController",  ($scope) => {
        $scope.goods = [
            { name: "good1", quantity: 10, price: 100 },
            { name: "good2", quantity: 20, price: 200 },
            { name: "good3", quantity: 30, price: 300 },
        ];
    });
