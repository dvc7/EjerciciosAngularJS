var mainModule = angular.module("mainModule",[]);
mainModule.filter("removeHtml", function(){
  return function(texto){
    return String(texto).replace(/<[^>]+>/gm,'');
  }
})
mainModule.controller("FiltersController",function($scope){
  $scope.mi_html = "<p>Hola mundo</p>"
});
