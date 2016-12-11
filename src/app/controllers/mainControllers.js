let mainControllers = angular.module('mainControllers', ['localDataService']);

mainControllers.controller('mainController',
    ['$scope', function ($scope) {
        
    }]);

mainControllers.filter('isvisible', function () {
    return function (data, property) {
        let ret = [];
        if (!data)
            return ret;

        angular.forEach(data, function (item) {
            if (item[property]) {
                ret.push(item);
            }
        });

        return ret;
    }
});

//mainControllers.controller('navController',
//    ['$location', 'Menu', function ($location, Menu) {
//        var thisObj = this;
//
//        Menu.query(function (data) {
//            if (!data) {
//                thisObj.locations = [];
//                return;
//            }
//
//            thisObj.locations = data;
//
//        })
//
//        this.isActive = function (viewLocation) {
//            return viewLocation === $location.path()
//                && thisObj.locations[viewLocation];
//        };
//
//        this.doAction = function (menuItem, userInfo) {
//            if (!menuItem.action)
//                return;
//
//            menuItem.action();
//
//        };
//    }]);

