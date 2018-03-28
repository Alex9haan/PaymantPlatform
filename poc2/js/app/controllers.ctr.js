app.controller("HomeController", ["$scope", "$http", '$rootScope', 'userService', function ($scope, $http, $rootScope, $userService) {
    
    $scope.openWelcom = function () {
        $rootScope.welcomescreen.open();
    }
    
}]);

app.controller("Step1Controller", ["$scope", "$http", '$rootScope', 'userService', '$timeout', function ($scope, $http, $rootScope, $userService, $timeout) {
    $scope.users = $userService.getUsers();
    $scope.search = "";
    $scope.clear = function () {
        $scope.search = "";
    }
    $scope.filterFunction = function (element) {
        return element.customerName.toLowerCase().includes($scope.search.toLowerCase()) || $scope.search == "";
    };
}]);