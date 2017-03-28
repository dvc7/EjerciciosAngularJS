angular.module("MyFirstApp",[])
.controller("FirstController", function($scope,$http) {
  $scope.posts = [];
  $http.get("http://jsonplaceholder.typicode.com/posts")
  .then(function(response) {
    $scope.posts = response.data;
  })
  .catch(function(response){
    console.error('Repos error', response.status, response.data);
  })
  .finally(function(){
    console.log("finally finished posts");
  });

});
