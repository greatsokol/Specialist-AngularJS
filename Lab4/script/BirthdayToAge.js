angular
    .module("YearApp")
    .controller("BirthdayToAge", ($scope) => {
        $scope.birthdayDate = null;
        $scope.calculateAge = () => {
            if ($scope.birthdayDate instanceof Date) {
                return (new Date()).getFullYear() - $scope.birthdayDate.getFullYear();
            }
            else {
                return null;
            }
        }
    });