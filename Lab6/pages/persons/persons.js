angular
    .module("Application")
    .controller("personsController", function ($scope, $rootScope) {
        $scope.personsList = [
            { name: "Иван", surname: "Иванов", age: 50, job: "сварщик" },
            { name: "Николай", surname: "Сидоров", age: 45, job: "строитель" },
            { name: "Татьяна", surname: "Сидорова", age: 35, job: "художник" },
            { name: "Юлия", surname: "Панова", age: 29, job: "директор" },
        ];
        $scope.selectPerson = (id) => {
            $rootScope.selectedPerson = id;
        };
    });