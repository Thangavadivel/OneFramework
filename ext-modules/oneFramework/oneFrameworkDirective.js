/// <reference path="../../Scripts/angular.js" />

"use strict";

angular.module("oneFramework").directive("oneFramework", function () {
    return {
        transclude: true,
        scope: {

        },
        controller: "oneFrameworkController",
        templateUrl: "ext-modules/oneFramework/oneFrameworkTemplate.html"
    };
});