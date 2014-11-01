define([
        '../module',
        '../namespace',
    ],
    function (module, moduleNS) {
        'use strict';
        var name = moduleNS + ".homeCtrl";
        //        var dependencies = ['$scope', namespaceCommon + '.EmployeeService'];
        //        var controller = function ($scope, EmployeeService) {
        //            var vm = this;
        //            vm.searchKey = "";
        //            vm.clearSearch = function () {
        //                vm.searchKey = "";
        //                findAllEmployees();
        //            };
        //
        //            vm.search = function () {
        //                EmployeeService.findByName(vm.searchKey).then(function (employees) {
        //                    vm.employees = employees;
        //                });
        //            };
        //
        //            var findAllEmployees = function () {
        //                EmployeeService.findAll().then(function (employees) {
        //                    vm.employees = employees;
        //                });
        //            };
        //
        //            findAllEmployees();
        //        };

        var deps = ["$scope"];
        var controller = function ($scope) {
            var vm = this;
            vm.test = "Landed in home page!";
            console.log(vm);
        };
        module.controller(name, deps.concat(controller));
    });