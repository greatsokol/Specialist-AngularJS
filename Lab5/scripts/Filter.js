angular
    .module("Application")
    .filter("reversed", () => {
        return (str) => str.split("").reverse().join("");
    });