'use strict';

/**
 * @ngdoc function
 * @name clarionEnterpriseApp.controller:RequisitionCtrl
 * @description
 * # RequisitionCtrl
 * Controller of the clarionEnterpriseApp
 */
angular.module('clarionEnterpriseApp')
  .controller('RequisitionCtrl', function ($scope,authFactory,$location) {


    $scope.loadComboData=function () {

       authFactory.coretechnology().then(function (response){
          if(response.success) {
              $scope.technology=response.data.coretechnology;
          } else {
             // $scope.vm.flag= true;
               console.log(response.message);
          }   
       });

      authFactory.certaintys().then(function (response){
          if(response.success) {
              $scope.certaintys=response.data.certainities;
          } else {
             // $scope.vm.flag= true;
               console.log(response.message);
          }   
       });

        authFactory.cirticalities().then(function (response){
          if(response.success) {
              $scope.criticalitys=response.data.criticalities;
          } else {
             // $scope.vm.flag= true;
               console.log(response.message);
          }   
       });


      authFactory.customers().then(function (response){
         if(response.success) {
              $scope.customerNames=response.data.customers;
          } else {
             // $scope.vm.flag= true;
               console.log(response.message);
          }   
       });

        


    }

  // dynamically get customer name 
  // 	$scope.customerNames=[
  // 							{id: 1, name: 'Clarion technologies'},
  // 							{ id: 2, name:  'Golden comm'},
  // 							{ id: 3, name:  'Smart Dealer'},
  // 							{ id: 3, name:  'G8way Health'},
  // 							{ id: 3, name:  'Minute2go'}
  // 						];

  	//dynamically get Certainty 
  	// $scope.certaintys=[
  	// 					{id: 1, name: 'Confirmed'},
  	// 					{ id: 2, name:  'High Probability'},
  	// 					{ id: 3, name:  'I am being proactive'}
  	// 				];

  	//dynamically get Criticality 
  	/*$scope.criticalitys=[
  						{id: 1, name: 'High – threat to engagement'},
  						{ id: 2, name:  'Medium – good to start soon'},
  						{ id: 3, name:  'Low – have sufficient time'}
  					];*/

  	//dynamically get Anticipated duration 
  	$scope.anticipatedDurations=[
  						{id: 1, name: '6 Months +'},
  						{ id: 2, name:  '3 – 6 months'},
  						{ id: 3, name:  '1 – 3 months'},
  						{ id: 4, name:  'Less than one month'}
  					];

  	//dynamically get Anticipated duration 
  	//$scope.coreTechnologies=

    
  });
var test = angular.module('test', []);

test.controller('testController', ['$compile', '$scope','$window', function($compile, $scope, $window) {
    $scope.openWindow = function() {
        $window.open('http://www.c-sharpcorner.com/1/302/angularjs.aspx', 'C-Sharpcorner', 'width=500,height=400');
    };}]);