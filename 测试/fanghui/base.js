
 
 var app=angular.module('ionicApp', ['ionic']);

    app.config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('tab', {
          url: "/tab",
          abstract: true,
          templateUrl: "tab.html"
        })
        .state('tab.home', {
          url: "/home",
          views: {
            'home-tab': {
              templateUrl: "/home.html",
              controller: 'HomeTabCtrl'
            }
          }
        })
        .state('tab.facts', {
          url: "/facts",
          
          views: {
            'home-tab': {
              templateUrl: "fact.html"
            }
          }
        })
        .state('tab.facts2', {
          url: "/facts2",
          views: {
            'home-tab': {
              templateUrl: "facts2.html"
            }
          }
        })
        
       $urlRouterProvider.otherwise("/tab/home");

    })

    app.controller('HomeTabCtrl', function($scope) {
      console.log('HomeTabCtrl');
    });