/// <reference path="../../Scripts/angular.js" />

angular.module("oneMenu").controller("oneMenuController", ['$scope',
    function ($scope) {
        this.setActiveElement = function (el) {
            $scope.activeElement = el;
        };
        this.setRoute = function (route) {
            $rootScope.$broadcast('one-menu-selected-event', { route: route });
        };
    }
]);