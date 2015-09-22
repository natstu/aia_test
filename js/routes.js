angular.module("aiaTest")

.config(['$routeProvider', function($routeProvider){

 $routeProvider
   .when('/', {
       templateUrl:"pages/home.html",
        controller: 'homeController'

      })
   .when('/about', {
        templateUrl: 'pages/about-us.html',
        controller: 'aboutController',
        

      })
   .when('/programmes', {
        templateUrl: 'pages/programmes.html',
        controller: 'programmesController',
         
   })
   .when('/internships', {
        templateUrl: 'pages/internships.html',
        controller: 'internshipsController',
        
   })
   .when('/search', {
        templateUrl: 'pages/search-apply.html',
        controller: 'searchController',
        
   })
   .otherwise({
        redirectTo: "pages/home.html"
   })

 }]);

 

