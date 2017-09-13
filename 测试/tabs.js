 var app= angular.module('ionicApp', ['ui.router','ionic']);

    app.config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('tabs', {
          url: "/tab",
          abstract: true,
          templateUrl: "fanghui/tabs.html"
        })
        .state('tabs.home', {
          url: "/home",
          views: {
            'home-tab': {
              templateUrl: "fanghui/home.html",
              controller: 'HomeTabCtrl'
            }
          }
        })
        .state('tabs.facts', {
          url: "/facts",
          views: {
            'home-tab': {
              templateUrl: "fanghui/facts.html"
            }
          }
        })
        .state('tabs.facts2', {
          url: "/facts2",
          views: {
            'home-tab': {
              templateUrl: "fanghui/facts2.html"
            }
          }
        })
        
       $urlRouterProvider.otherwise("/tab/home");

    })

    .controller('HomeTabCtrl', function($scope) {
      console.log('HomeTabCtrl');
    });