angular.module("TodoList",["LocalStorageModule"])
.controller("TodoController", function($scope,localStorageService){
  if(localStorageService.get("angular-todolist")){
    $scope.todo = localStorageService.get("angular-todolist");
  }
  else{
    $scope.todo = [];
  }
  /*
    {
      descripcion: "terminar el curso angular"
      fecha: "3-03-15"
    }
  */
  $scope.$watchCollection('todo',function(newValue,oldValue){
    localStorageService.set("angular-todolist",$scope.todo);
  });
  $scope.addActv = function(){
    $scope.todo.push($scope.newActv);
    $scope.newActv = {};
  }
  $scope.clean = function(){
    $scope.todo = [];
  }
});
