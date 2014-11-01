require.config({
    paths: {
        "angular": "libs/angular/1.2.9/angular",
        "angularRouter": "libs/angular/1.2.9/angular-route",
        "angularSanitize": "libs/angular/1.2.9/angular-sanitize",
        "angularAnimate": "libs/angular/1.2.9/angular-animate",
        "ratchet": "libs/ratchet/ratchet.min",

    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "angularRouter": {
            deps: ["angular"]
        },
        "angularAnimate": {
            deps: ["angular"]
        },
        "angularSanitize": {
            deps: ["angular"]
        }
    }
});

require([
        "angular",
        "app/namespace",
        "angularRouter",
        "ratchet",
        "app/app",
        "app/routes"
    ],
    function (angular, appNS) {
        var onDeviceReady = function () {
            angular.bootstrap(document, [appNS]);
        };
        document.addEventListener("deviceready", onDeviceReady);
    });