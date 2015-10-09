'use strict';

/**
 * @ngdoc function
 * @name clarionEnterpriseApp.controller:RequisitionCtrl
 * @description
 * # RequisitionCtrl
 * Controller of the clarionEnterpriseApp
 */
angular.module('clarionEnterpriseApp')
  .controller('RequisitionCtrl', function ($scope) {
  //dynamically get customer name 
  	$scope.customerNames=[
  							{id: 1, name: 'Clarion technologies'},
  							{ id: 2, name:  'Golden comm'},
  							{ id: 3, name:  'Smart Dealer'},
  							{ id: 3, name:  'G8way Health'},
  							{ id: 3, name:  'Minute2go'}
  						];

  	//dynamically get Certainty 
  	$scope.certaintys=[
  						{id: 1, name: 'Confirmed'},
  						{ id: 2, name:  'High Probability'},
  						{ id: 3, name:  'I am being proactive'}
  					];

  	//dynamically get Criticality 
  	$scope.criticalitys=[
  						{id: 1, name: 'High – threat to engagement'},
  						{ id: 2, name:  'Medium – good to start soon'},
  						{ id: 3, name:  'Low – have sufficient time'}
  					];

  	//dynamically get Anticipated duration 
  	$scope.anticipatedDurations=[
  						{id: 1, name: '6 Months +'},
  						{ id: 2, name:  '3 – 6 months'},
  						{ id: 3, name:  '1 – 3 months'},
  						{ id: 4, name:  'Less than one month'}
  					];

  	//dynamically get Anticipated duration 
  	$scope.coreTechnologies=
  });
