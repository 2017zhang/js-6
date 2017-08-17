angular.module('routingDemoApp',['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/0', {
            templateUrl: '0.html',
            // controller: 'loginCtrl'
        })
            .when('/1', {
                templateUrl: '1.html',
                // controller: '1Ctrl'
            })
            .when('/2', {
                templateUrl: '2.html',
                // controller: '2Ctrl'
            }).otherwise({redirectTo: '/login'});
    }]);
