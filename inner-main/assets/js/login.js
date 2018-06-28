ap=angular.module('LoginApp');

ap.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

ap.lazy.controller('loginController',['$http','$scope','$state','cfpLoadingBar','factoryName',function($http,$scope,$state,cfpLoadingBar,factoryName){

   $scope.cart=[
 {"service":"abc", "price":299, "quantity":1},
 {"service":"wxy", "price":199, "quantity":1},
 {"service":"opq", "price":399, "quantity":1},
 
 ];
console.log($scope.cart);
 $scope.showCart = function(){
 factoryName.setData($scope.cart); //here we are setting our data that needs to be shown in the factory.

}
 
   $scope.show=false;
   $scope.posts = [];
    $scope.section = null;
    $scope.subreddit = null;
    $scope.subreddits = ['cats', 'pics', 'funny', 'gaming', 'AdviceAnimals', 'aww'];

    var getRandomSubreddit = function() {
      var sub = $scope.subreddits[Math.floor(Math.random() * $scope.subreddits.length)];

      // ensure we get a new subreddit each time.
      if (sub == $scope.subreddit) {
        return getRandomSubreddit();
      }

      return sub;
    };

    $scope.fetch = function() {
      $scope.subreddit = getRandomSubreddit();
      $http.jsonp('http://www.reddit.com/r/' + $scope.subreddit + '.json?limit=50&jsonp=JSON_CALLBACK').success(function(data) {
        $scope.posts = data.data.children;
      });
    };

    $scope.start = function() {
      cfpLoadingBar.start();
    };

    $scope.complete = function () {
      cfpLoadingBar.complete();
    }

$scope.login=function(){

//$scope.start();
  var Send={"email":$scope.username,
            "password":$scope.password};
  /*var config = 
  {
    headers: {

    'Authorization': Send,
  },
  withCredentials: true
};*/
/*var requs={
                method :  'POST',
                url :  'http://192.168.101.24:8000/wlogin/',
                data : Send,
                
                withCredentials: false,
              };*/
/*$http(requs)    //give path to authentication api
.then(function(response){
  console.log(response);*/

//if(response.data[0].msg=="active"){

 $state.go('main');
 //$scope.complete();
  

//}
//else{
  console.log('he');
  $scope.msg='Invalid Credentials';
  $scope.show=true;      
  //$location.path('/');

//}

//});

};

}]);