app.controller("HomeController", ["$scope", "$http", '$rootScope', function ($scope, $http, $rootScope) {
    $scope.title = "News Feeds";
    $scope.nasa = [];
    
    $http({
        "method": "GET",
        "url": "http://rss2json.com/api.json?rss_url=https://www.nasa.gov/rss/dyn/breaking_news.rss"
    }).then(function (data) {
        $scope.nasa = data.data.items;
    });

    $http({
        "method": "GET",
        "url": "http://rss2json.com/api.json?rss_url=http://www.cnet.com/rss/smart-home/"
    }).then(function (data) {
        $scope.tech = data.data.items;
    });

    $http({
        "method": "GET",
        "url": "http://rss2json.com/api.json?rss_url=http://www.cnet.com/rss/gaming/"
    }).then(function (data) {
        $scope.games = data.data.items;
        });

    
    $scope.fnOpen = function () {
        $rootScope.welcomescreen.open();  
    }
    $scope.fnOpen();
}]);