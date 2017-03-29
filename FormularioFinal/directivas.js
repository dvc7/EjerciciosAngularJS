var app = angular.module("FormularioFinal");
app.directive('myValidation',function(){
  return{
    require: 'ngModel',
    link: function(scope,elm,attr,ctrl){
      ctrl.$validators.myValidation = function(modelValue, viewValue){
        if(ctrl.$isEmpty(modelValue)){
          return true;
        }
        if(viewValue){
          if(viewValue > 0 && viewValue < 10){
            return true;
          }
          else{
            return false;
          }
        }
        return false;
      };
    }
  };
});

/*
app.directive('tntNifValidation', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.tntnifvalidation = function(modelValue, viewValue) {


        if (ctrl.$isEmpty(modelValue)) {
          // tratamos los modelos vacíos como correctos
          return true;
        }


        if (viewValue) {


          var letterValue = viewValue.substr(viewValue.length - 1);
          var numberValue = viewValue.substr(viewValue.length - (viewValue.length - 1));
          var controlLetter = "TRWAGMYFPDXBNJZSQVHLCKE".charAt(numberValue % 23);


            if(letterValue === controlLetter ){
              return true;
            } else {
              return false;
            }
        }


      // NIF inválido
      return false;


      };
    }
  };
});
*/
/*
app.directive('tntUserSignedup', function($q, $timeout) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
    var usernames = ['adrian', 'josemanuel', 'jorge'];


      ctrl.$asyncValidators.tntusersignedup = function(modelValue, viewValue) {


        if (ctrl.$isEmpty(modelValue)) {
          return $q.when();
        }


        var def = $q.defer();


        $timeout(function() {


          if (usernames.indexOf(modelValue) > -1) {
            // Alias registrado
            def.resolve();
          } else {
            def.reject();
          }


        }, 1000);


        return def.promise;
      };
    }
  };
});
*/
