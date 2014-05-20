var tasksApp = angular.module('tasks', ['ngRoute', 'ngResource', 'ngAnimate']);

tasksApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        // $locationProvider.html5Mode(true);
        $routeProvider.
            when('/', {
                templateUrl: 'templates/tasks.html',
                controller: 'TasksController'
            }).
            when('/unassigned', {
                templateUrl: 'templates/unassigned.html',
                controller: 'UnassignedController'
            }).
            when('/new', {
                templateUrl: 'templates/newtask.html',
                controller: 'NewTaskController'
            }).
            when('/users', {
                templateUrl: 'templates/users.html',
                controller: 'UsersController'
            }).
            otherwise({redirectTo: '/'})
    }
]);

tasksApp.factory('Users', ['$resource',
    function ($resource) {
        return $resource('api/users/');
    }
])

tasksApp.run(function ($rootScope, Users) {
    $rootScope.users = Users.query();
})

tasksApp.controller('TasksController', ['$scope', 'Users',
    function ($scope) {
        
    }
]);

tasksApp.controller('UnassignedController', ['$scope',
    function ($scope) {

    }
]);

tasksApp.controller('NewTaskController', ['$scope', 'Users',
    function ($scope) {
    }
]);

tasksApp.controller('UsersController', ['$scope',
    function ($scope) {

    }
]);
