var app=angular.module('LoginApp',['ui.bootstrap','ui.router','ngCookies','chieffancypants.loadingBar','ngMaterial','ngMessages','ngTouch','ngAnimate',"chart.js"]);

app.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

app.factory('lazyService', [ '$http', function($http) {
  var jsPath = 'assets/${ name }.js';
  console.log(jsPath);
  var promisesCache = {};

  return {
    loadScript: function(name) {

      var path = jsPath.replace('${ name }', name);
      var promise = promisesCache[name];
      if (!promise) {
        promise = $http.get(path);
        promisesCache[name] = promise;

        return promise.then(function(result) {
          eval(result.data);
          console.info('Loaded: ' + path);
        });
      }

      return promise;
    }
  }
}]);

app.factory("factoryName", function() {
        var cartData={} //create a variable to hold the data from the controller
        function setData(data){
           cartData=data;
      }
       function getData(){
           return cartData;
     }
      return{
         setData:setData,
         getData:getData
     }

});

/*app.controller('SuperFormController',['$scope',function($scope){
 //$scope.loading=true;
    $scope.$on('LOAD',function(){$scope.loading=true;});
    $scope.$on('UNLOAD',function(){$scope.loading=false;});
  }]);*/

/*app.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    transclude: true, // Insert custom content inside the directive
    link: function(scope, element, attrs) {
      console.log('attrs: ' , attrs);
      scope.dialogStyle = {};
      if (attrs.boxWidth) {
        scope.dialogStyle.width = attrs.boxWidth;
      }
      if (attrs.boxHeight) {
        scope.dialogStyle.height = attrs.boxHeight;
      }
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    templateUrl: 'dashboard/HostelMenuModal.html'
  };
});*/

app.config(function($stateProvider,$urlRouterProvider,$controllerProvider, $provide){
 
 app.lazy = {
  controller: $controllerProvider.register,
        //directive: $compileProvider.directive,
        //filter: $filterProvider.register,
        factory: $provide.factory,
        service: $provide.service
      }

      $urlRouterProvider.otherwise('/');
      $stateProvider
      .state('root',{
        url:'',
        title:'LOGIN',
        templateUrl:'page-login.html',
         resolve: {
          ctrl: [ 'lazyService', function(lazyService) {
            return lazyService.loadScript(['js/login']);
          }]
        },
        controller:'loginController'
      })
      .state('main',{
        url:'/dashboard',
        title:'Dashboard ',
        templateUrl:'dashboard/main-page.html',
         resolve: {
          ctrl: [ 'lazyService', function(lazyService) {
            return lazyService.loadScript(['js/dashboard']);
          }]
        },
        controller:'dashboardController'
      }).state('main.hostel',{
        url:'/HostelMenu',
        //title:'View Profile',
        templateUrl:'hostel/HostelMenu.html',
        resolve: {
          ctrl: [ 'lazyService', function(lazyService) {
            return lazyService.loadScript(['js/HostelMenu']);
          }]
        },
        controller:'HostelMenuController'
      }).state('main.warden',{
        url:'/warden',
        //title:'View Profile',
        templateUrl:'user/assignWarden.html',
        resolve: {
          ctrl: [ 'lazyService', function(lazyService) {
            return lazyService.loadScript(['js/assignWarden']);
          }]
        },
        controller:'assignWardenController'
      }).state('main.AssignUser',{
        url:'/AssignUser',
        //title:'View Profile',
        templateUrl:'user/assignUser.html',
        resolve: {
          ctrl: [ 'lazyService', function(lazyService) {
            return lazyService.loadScript(['js/assignUser']);
          }]
        },
        controller:'assignUserController'
      })
    });