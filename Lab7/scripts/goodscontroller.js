angular
    .module("Application")
    .controller("GoodsController", ($scope, StorageService) => {
        $scope.goods = [
            { name: "продукт 1", quantity: 10, id: "key1", price: StorageService.load("key1") },
            { name: "продукт 2", quantity: 10, id: "key2", price: StorageService.load("key2") },
            { name: "продукт 3", quantity: 10, id: "key3", price: StorageService.load("key3") },
            { name: "продукт 4", quantity: 10, id: "key4", price: StorageService.load("key4") },
            { name: "продукт 5", quantity: 10, id: "key5", price: StorageService.load("key5") },
            { name: "продукт 6", quantity: 10, id: "key6", price: StorageService.load("key6") }
        ];
        console.log($scope.goods);
        $scope.onChange = (key, value) => {
            StorageService.save(key, value);
        }
    });