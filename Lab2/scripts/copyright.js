angular
    .module("copyrightModule", [])
    .directive("copyright", () => {
        return {
            restrict: "E",
            template: "Copyright " + (new Date()).getFullYear()
        };
    });