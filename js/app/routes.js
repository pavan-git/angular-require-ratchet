define([
        "angular",
        "app/app",
        "app/namespace",
        "app/config"
    ],
    function (angular, app, appNS, appConfig) {
        "use strict";
        return app.config(["$routeProvider",
            function ($routeProvider) {
                $routeProvider.when("/home", {
                    templateUrl: appConfig.templatesDir + "home/home.html",
                    controller: appNS + ".home.homeCtrl as vm",
                });

                $routeProvider.otherwise({
                    redirectTo: "/home"
                });
        }]);

    });