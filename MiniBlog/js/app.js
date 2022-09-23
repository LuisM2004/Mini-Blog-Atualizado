angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http){
  $http.get('https://api-fake-blog.herokuapp.com/postagens').
      success(function(data) {
          $scope.publicacoes = data;
          $scope.local = (main)=>{
            window['numero'] = main;
            localStorage.setItem('local', numero);
          }
      }
  );
});
/*
angular.module('informacoes', []);
angular.module('informacoes').controller('RestInf', ($scope,$http)=>{
  $http.get('https://api-fake-blog.herokuapp.com/postagens').
    success(function(data){
      $scope.publicacoes = data[localStorage.getItem("local")];
    });
});
*/