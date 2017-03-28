var app = angular.module("MyFirstApp",[]);
app.controller("FirstController", ["$scope", function(m){
  m.nombre = "Daniel";
  m.nuevoComentario = {};
  m.comentarios = [
    {
      comentario: "Buen tutorial",
      username: "pepe huevos repes"
    },
    {
      comentario: "Malisimo el tutorial",
      username: "mauricio colmenero"
    }
  ];
  m.agregarComentario = function(){
    m.comentarios.push(m.nuevoComentario);
    m.nuevoComentario = {};
  }
}]);

//MVVM
//La vista es el HTML
//VM --> sucede a traves de scope
