let app = angular.module('Portfolio',
    [
        'mainControllers',
        'elearningControllers',
        'profileControllers',
        'ngRoute',
        //'ngMdIcons',
    ]);
// Routing 
app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: "app/views/home.html",
                controller: "mainController",
                controllerAs: "home"
            }).
            when("/about", {
                templateUrl: "app/views/about.html",
                controller: "profileController",
                controllerAs: "profile"
            }).
            when("/elearning", {
                templateUrl: "app/views/elearning.html",
                controller: "elearningController",
                controllerAs: "elearning"
            }).
            when('/index', {
                redirectTo: '/home'
            }).
            when('/', {
                redirectTo: '/home'
            })
            .otherwise({
                redirectTo: '/'
            })
            ;

        $locationProvider.html5Mode(true);
        // .hashPrefix('!');
        //$locationProvider.html5Mode({
        //    enabled: true,
        //    requireBase: false
        //});
    }]);
