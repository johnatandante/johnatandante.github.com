let mainControllers = angular.module('mainControllers', ['localDataService', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);

mainControllers.controller('mainController',
    ['$scope', 'Carousel-Data', function ($scope, CarouselData) {
        let thisObj = this;

        $scope.myInterval = 2400;
        $scope.noWrapSlides = false;
        $scope.active = 0;

        $scope.isNavCollapsed = true;
        $scope.isCollapsed = false;
        //$scope.isCollapsedHorizontal = false;

        thisObj.currentId = 0;
        
        this.slides = [];

        CarouselData.query(function (data) {
            if (!data) {
                thisObj.slides = [];
                return;
            }

            for(let item of data) {
                thisObj.slides.push({
                    title: item.title,
                    image: item.image,
                    text: item.text,
                    id: thisObj.currentId++
                });
            }
        });

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

