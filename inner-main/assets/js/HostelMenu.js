ap=angular.module('LoginApp');

ap.lazy.controller('HostelMenuController',['$http','$scope','$uibModal',function($http,$scope,$uibModal){


/*$scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };*/

  $scope.MenuData={'Sun':{'Breakfast':['Chapaati','Dal','Sabzi','Rice'],'Lunch':['Chapaati','Dal','Sabzi','Rice'],'Snacks':['Chapaati','Dal','Sabzi','Rice'],'Dinner':['Chapaati','Dal','Sabzi','Rice']},
					'Mon':{'Breakfast':[],'Lunch':[],'Snacks':[],'Dinner':[]},
					'Tues':{'Breakfast':[],'Lunch':[],'Snacks':[],'Dinner':[]},
					'Wed':{'Breakfast':[],'Lunch':[],'Snacks':[],'Dinner':[]},
					'Thurs':{'Breakfast':[],'Lunch':[],'Snacks':[],'Dinner':[]},
					'Fri':{'Breakfast':[],'Lunch':[],'Snacks':[],'Dinner':[]},
					'Sat':{'Breakfast':[],'Lunch':[],'Snacks':[],'Dinner':[]}};

  $scope.col = Object.keys($scope.MenuData).length;

$scope.openModal = function(){
 $scope.modalInstance = $uibModal.open({
 ariaLabelledBy: 'modal-title',
 ariaDescribedBy: 'modal-body',
 templateUrl: 'hostel/modalWindow.html',
 controller :'ModelHandlerController',
 controllerAs: '$ctrl',
 size: 'md',
 resolve: {
 
 }
 });

 }

}]);

ap.lazy.controller("ModelHandlerController",function($scope,$uibModalInstance){
 
 

 $scope.cancelModal = function(){
 console.log("cancelmodal");
 $uibModalInstance.dismiss('close');
 }
 $scope.ok = function(){
 $uibModalInstance.close('save');
 
 }
 
});

