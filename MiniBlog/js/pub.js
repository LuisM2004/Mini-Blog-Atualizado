angular.module('Blog', []);
angular.module('Blog').controller('Rest', function($scope,$http,$location){
    var absUrl = $location.absUrl()
    var URL = absUrl.split("#/");
    console.log(URL);
    $http.get('https://api-fake-blog.herokuapp.com/postagem/' + URL[1]).success((date)=>{
        $scope.publicacao = date;
    });

});