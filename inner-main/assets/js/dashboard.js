ap=angular.module('LoginApp');


ap.lazy.controller('dashboardController',['$http','$scope','$state','$cookies','factoryName',function($http,$scope,$state,$cookies,factoryName){
  var config = 
{
headers: {

'Cookie': $cookies.get('sessionid'),
},
withCredentials: true
};

$scope.cart=factoryName.getData();
console.log($scope.cart);

 $scope.user='Admin';
 var vt = this;
  vt.chartDoughnutLabels = [ "Hydro-Plumping Re-Texturizing Serum","Hydro-Plumping Re-Texturizing Serum"];
      vt.chartDoughnutCharts = [ 68, 210];
      vt.chartDoughnutOptions = {
      maintainAspectRatio: true,
      responsive: true
    }
    vt.chartDoughnutColours =[ '#cc3321', '#494750'];

}]);

ap.lazy.controller('DynamicHeader',['$http','$scope','$location','$window','$timeout','$log', '$document','$rootScope','$cookies',function($http,$scope,$location,$window,$timeout,$log, $document,$rootScope,$cookies){

 console.log('Header Loaded');
//window.onbeforeunload = $scope.chex;
}]);

ap.lazy.controller('DynamicLeft',['$http','$scope','$location','$window','$timeout','$log', '$document','$rootScope','$cookies',function($http,$scope,$location,$window,$timeout,$log, $document,$rootScope,$cookies){

 console.log('Left panel loaded');
 $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
//window.onbeforeunload = $scope.chex;
}]);