/// <reference path="../../Scripts/angular.js" />
"use strict";

angular.module("oneMenu").directive("oneMenuItem", function () {
    return {
        require : '^oneMenu',
        scope:  {
            label: '@',
            icon: '@',
            route : '@'
        },
        templateUrl: 'ext-modules/oneMenu/oneMenuItemTemplate.html',
        link: function (scope, el, attr, ctrl) {
            el.on('click', function (evt) {
                evt.stopPropagation();
                evt.preventDefault();
                $scope.apply(function () {
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);
                });
            });
        }
      };
})