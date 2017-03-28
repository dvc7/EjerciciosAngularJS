angular.module("CustomDirective",[])
.controller("AppCtrl",function($scope,$http){
  $http.get("https://api.github.com/users/urielhdz/repos")
  .then(function(response){
    $scope.repos = response.data;
    console.log(response.data);
  })
  .catch(function(response){
    console.error('Repos error', response.status, response.data);
  });
});
