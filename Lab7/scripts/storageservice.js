angular
    .module("Application")
    .service("StorageService", ["$window", function ($window) {
        this.save = (key, value) => {
            $window.localStorage.setItem(key, value);
        };

        this.load = (key) => {
            return $window.localStorage.getItem(key);
        };
    }]);