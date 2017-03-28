var app = angular.module("MyFirstApp",[]);
app.controller("FirstController", function($scope){
  $scope.nombre = "Daniel";
  $scope.nuevoComentario = {};
  $scope.comentarios = [
    {
      comentario: "Buen tutorial",
      username: "pepe huevos repes"
    },
    {
      comentario: "Malisimo el tutorial",
      username: "mauricio colmenero"
    }
  ];
  $scope.agregarComentario = function(){
    $scope.comentarios.push($scope.nuevoComentario);
    $scope.nuevoComentario = {};
  }
});

//MVVM
//La vista es el HTML
//VM --> sucede a traves de scope
