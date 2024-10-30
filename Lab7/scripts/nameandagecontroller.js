angular
    .module("Application")
    .controller("NameAndAgeController", ($scope, StorageService) => {
        $scope.name = StorageService.load("name");
        $scope.age = Number(StorageService.load("age"));

        $scope.onChange = (key, value) => {
            StorageService.save(key, value);
        }
    });