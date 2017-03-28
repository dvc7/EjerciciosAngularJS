angular.module("CustomDirective",[])
.directive('backImg', function(){
  return function(scope, element,attrs){
    attrs.$observe('backImg',function(value){
      element.css({
          "background": "url("+value+")",
          "background-size": "cover",
          "background-position": "center"
      });
    });
  }
})
/*
style="background:url({{repo.owner.avatar_url}});
background-position:center;background-size:cover"
*/
.controller("AppCtrl",function($scope,$http){
  $http.get("https://api.github.com/users/codigofacilito/repos")
  .then(function(response){
    $scope.repos = response.data;
    console.log(response.data);
  })
  .catch(function(response){
    console.error('Repos error', response.status, response.data);
  });
});
