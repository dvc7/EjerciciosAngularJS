angular.module("MyFirstApp",[])
  .run(function($rootScope){
    $rootScope.nombre = "Daniel";
  })
  .controller("FirstController", function($scope){
    $scope.nombre = "pepe";
    setTimeout(function(){
      $scope.$apply(function(){
        $scope.nombre=":3";
      });
    },1000);
  })
  .controller("ChildController", function($scope){

  });
