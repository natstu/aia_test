var myApp = angular.module('aiaTest', ['ngRoute', 'ngAnimate']);
 myApp.controller('MainController', function($scope, $routeParams, $location){
   
    $scope.$params = $routeParams;
    $location.path('/');
    
  });

myApp.controller('homeController', function($scope) {
    $scope.pageClass = 'home';
});

// about page controller
myApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'about';
});
// programmes page controller
myApp.controller('programmesController', function($scope) {
    $scope.pageClass = 'programmes';
});

// internships page controller
myApp.controller('internshipsController', function($scope) {
    $scope.pageClass = 'internships';
});

// Search and Apply page controller
myApp.controller('searchController', function($scope) {
    $scope.pageClass = 'search';
});
