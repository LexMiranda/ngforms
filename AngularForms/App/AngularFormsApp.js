var angularFormsApp = angular.module('angularFormsApp', ['ngRoute']);

angularFormsApp.config(function($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "App/Home.html",
        controller:"HomeController"
    })
    .when("/newEmployeeForm", {
        templateUrl:"App/employeeForm/efTemplate."
    });


});

angularFormsApp.controller("HomeController", function($scope, $location) {
    $scope.addNewEmployee = function() {
        $location.path('/newEmployeeForm');
    };

})