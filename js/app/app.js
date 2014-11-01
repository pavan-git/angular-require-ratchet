define([
        "angular",
        "./namespace",
        "./common/namespace",
        "./login/namespace",
        "./signup/namespace",
        "./home/namespace",
        "./area/namespace",
        "angularAnimate",
        "./common/module.require",
        "./login/module.require",
        "./home/module.require",
        "./signup/module.require",
        "./area/module.require"
    ],
    function (angular, appNS, commonNS, loginNS, signupNS, homeNS, areaNS) {
        "use strict";
        var app = angular.module(appNS, [
            "ngAnimate",
            "ngRoute",
            commonNS,
            loginNS,
            signupNS,
            homeNS,
            areaNS
        ]).run(function () {
            //
        });
        return app;
    });