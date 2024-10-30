angular
    .module("YearApp")
    .controller("AgeToBirthdayYear", ($scope) => {
        $scope.age = null;
        $scope.calculateBirthdayYear = () => {
            if ($scope.age && Number.isInteger(Number($scope.age))) {
                return (new Date()).getFullYear() - $scope.age;
            } else {
                return null;
            }
        };
    });