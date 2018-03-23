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
        mainView.router.load({ url: 'sharing/step2.html' });
    }
}]);
app.controller("Step2Controller", ["$scope", "$http", '$rootScope', 'userService', function ($scope, $http, $rootScope, $userService) {
    $scope.user = $userService.getUser();
  
    $scope.save = function () {
        $userService.setUser($scope.user);
        myApp.pickerModal('.confirm-card');
    }
}]);
app.controller("CardConfirmController", ["$scope", "$http", '$rootScope', 'userService', function ($scope, $http, $rootScope, $userService) {
    $scope.user = $userService.getUser();

    $scope.save = function () {
        $userService.setUser($scope.user);
        myApp.closeModal('.confirm-card');
        mainView.router.load({ url: 'sharing/step3.html' });
    }
}]);
app.controller("Step3Controller", ["$scope", "$http", '$rootScope', 'userService', function ($scope, $http, $rootScope, $userService) {
    $scope.user = $userService.getUser();

    $scope.save = function () {
        $userService.setUser($scope.user);
        $rootScope.$broadcast('end-started');
        myApp.pickerModal('.end-ride');
    }
}]);
app.controller("EndController", ["$scope", "$http", '$rootScope', 'userService', '$timeout', '$http', function ($scope, $http, $rootScope, $userService, $timeout, $http) {
    $scope.user = $userService.getUser();
    var promise = null;
    var _end = function () {
        myApp.closeModal('.end-ride');
        mainView.router.load({ url: 'home.html' });
    }
    
    $scope.$on('end-started', function (event, args) {
        if (promise) 
            $timeout.cancel(promise);
       // promise = $timeout(_end, 10000);
    });

    

}]);

//PAYMENT
app.controller("PaymentStep1Controller", ["$scope", "$http", '$rootScope', 'userService', '$timeout', function ($scope, $http, $rootScope, $userService, $timeout) {
    $scope.user = $userService.getUser();
    var promise = null;
    var _end = function () {
        myApp.hideIndicator();
        mainView.router.load({ url: 'home.html' });
    }

    $scope.save = function () {
        myApp.showIndicator();
        $userService.setUser($scope.user);
        if (promise) 
            $timeout.cancel(promise);
        promise = $timeout(_end, 3000);
    }
}]);