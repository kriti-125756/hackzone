ap=angular.module('LoginApp');

ap.lazy.controller('assignUserController',['$http','$scope','$uibModal',function($http,$scope,$uibModal){


$http.post("");

/*$scope.openModal = function(){
 $scope.modalInstance = $uibModal.open({
 ariaLabelledBy: 'modal-title',
 ariaDescribedBy: 'modal-body',
 templateUrl: 'hostel/modalWindow.html',
 controller :'ModelHandlerController',
 controllerAs: '$ctrl',
 size: 'lg',
 resolve: {
 
 }
 });

 }*/



}]);

/*ap.lazy.controller("ModelHandlerController",function($scope,$uibModalInstance){
 
 $scope.cancelModal = function(){
 console.log("cancelmodal");
 $uibModalInstance.dismiss('close');
 }
 $scope.ok = function(){
 $uibModalInstance.close('save');
 
 }
 
});*/

