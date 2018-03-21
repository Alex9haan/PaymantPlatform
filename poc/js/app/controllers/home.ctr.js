app.controller("HomeController", ["$scope", "$http", '$rootScope', 'userService', function ($scope, $http, $rootScope, $userService) {
    $scope.user = $userService.getUser();
    
    $scope.fnOpen = function () {
       $rootScope.welcomescreen.open();  
    }
    //$scope.fnOpen();
}]);