/// <reference path="../../Scripts/angular.js" />
"use strict";

angular.module("oneMenu").directive("oneMenuItem", function () {
    return {
        require : '^oneMenu',
        scope:  {
            label : '@'
        },
        templateUrl: "ext-module/oneMenu/oneMenuItemTemplate.html",
        controller: "oneMenuItemController"
    };
})