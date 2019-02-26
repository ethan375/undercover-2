const app = angular.module('Undercover', ['ngRoute']);
  console.log("this works like this");
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

  app.controller("ContactController", ['$http', function($http){
    controller = this;

    this.submitForm = function(){
      $http({
        method:'POST',
        url: 'https://script.google.com/a/undercoveroutdoors.com/macros/s/AKfycbzh7PuFXmL8DZ9RykwPyWug-fvmL1Z0mXydTupn/exec',
        data:{
          name: controller.name,
          body: controller.message,
          address: controller.address,
          number: controller.number,
          email: controller.email,
        }
      }).then(function(res){
        console.log(res)
      }).then(function(err){
        console.error(err)
      })
    }
  }]);