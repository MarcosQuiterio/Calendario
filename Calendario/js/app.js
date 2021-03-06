(function(){
  'use strict';
  var juntas={};
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      setTimeout(function() {
        alert(''+device.uuid);
      }, 100);
    };
  });

  module.controller('DetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;
    //navigator.notification.vibrate(2000); //milliseconds
	//navigator.notification.beep(2); // numbr of times
  });

  module.controller('MasterController', function($scope, $data, $http) {
    $scope.items = juntas;  
    $http.get('http://www.empowerlabs.com/intellibanks/data/Sandbox/Francisca/WebService.php').
  success(function(data, status, headers, config) {
  	data.reverse();
    $data.items=data;
    juntas=data;
    $scope.items = $data.items;  
    $scope.showDetail = function(item) {
      var selectedItem = item;
      $data.selectedItem = selectedItem;
      $scope.ons.navigator.pushPage('page1.html', {title : selectedItem.title});
    };
  }).
  error(function(data, status, headers, config) {
  	
  });
  });

  module.factory('$data', function() {
      var data = {};
      
      data.items = juntas;
      
      return data;
  });
})();

