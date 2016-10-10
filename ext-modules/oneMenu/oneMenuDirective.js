/// <reference path="../../Scripts/angular.js" />

"use strict";

angular.module("oneMenu").directive("oneMenu", function () {
    return {
        transclude : true,
        templateUrl: "ext-modules/oneMenu/oneMenuTemplate.html",
        scope : {

        },
        link: function (scope, el, attr) {
            
        }
    }
});