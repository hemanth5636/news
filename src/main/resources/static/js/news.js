var app = angular.module('news', []);

app.controller('newsController', function ($scope, $http) {

    $scope.sources = null;
    response = $http.get('https://newsapi.org/v2/sources?apiKey=fa942eeec6cd4c00a13ef3ce8d729495').success(
        function (response) {
            $scope.sources = response;
            console.log($scope.sources);
        }
    );
    $scope.getHeadlines = function(id) {
        $scope.headlines = null;
        $http.get("https://newsapi.org/v2/top-headlines?sources="+id+"&apiKey=fa942eeec6cd4c00a13ef3ce8d729495").success(
            function (response) {
                $scope.headlines = response;
                console.log(response);
            }
        )
    }
});
