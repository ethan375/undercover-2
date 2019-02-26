console.log("files working");
const app = angular.module('Undercover', ['ngRoute']);

  app.config(function($routeProvider){
    
    $routeProvider
    .when( '/arcadia',{
      templateUrl:'./views/arcadia.html'
    })
    .when('/aluminumpergola',{
      templateUrl: './views/alumpergola.html' 
    })
    .when('/commercial',{
      templateUrl:'./views/commercial.html'
    })
    .when('/heaters',{
      templateUrl:'./views/heaters.html'
    })
    .when('/home', {
      templateUrl: './views/home.html'
    })
    .when('/residential',{
      templateUrl:'./views/residential.html'
    })
    .when('/retractableroofs',{
      templateUrl:'./views/retracroofs.html'
    })
    .when('/rectratableawnings',{
      templateUrl:'./views/retractable.html'
    })
    .when('/solarscreens',{
      templateUrl:'./views/screens.html'
    })
    .when('/about', {
      templateUrl:"./views/about.html"
    })
    .when('/contact', {
      templateUrl: "./views/contact.html"
    })
    .otherwise({
      templateUrl: './views/home.html'
    })
  });