angular.module("oneFramework").directive("oneFramework", function () {
    return {
        transclude: true,
        scope: {
            title: '@',
            subtitle: '@',
            iconImage : '@'
        },
        controller: "oneFrameworkController",
        templateUrl: "ext-modules/oneFramework/oneFrameworkTemplate.html"
    };
}); 