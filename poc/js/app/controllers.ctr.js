app.controller("HomeController", ["$scope", "$http", '$rootScope', 'userService', function ($scope, $http, $rootScope, $userService) {
    $scope.user = $userService.getUser();
    
    $scope.openWelcom = function () {
        $rootScope.welcomescreen.open();
    }
    //$scope.fnOpen();
}]);
app.controller("Step1Controller", ["$scope", "$http", '$rootScope', 'userService', function ($scope, $http, $rootScope, $userService) {
    $scope.user = $userService.getUser();
    $scope.save = function () {
        $userService.setUser($scope.user);
        mainView.router.load({ url: 'step2.html' });
    }
}]);
app.controller("Step2Controller", ["$scope", "$http", '$rootScope', 'userService', function ($scope, $http, $rootScope, $userService) {
    $scope.user = $userService.getUser();
    $scope.save = function () {
        $userService.setUser($scope.user);
        
    }
}]);