var angular = require("angular");

angular
    .module('app', [])
    .controller('appMain', ['$scope', function ($scope) {
        console.log('hit');
    }]);