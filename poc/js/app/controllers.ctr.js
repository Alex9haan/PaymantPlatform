app.controller("HomeController", ["$scope", "$http", '$rootScope', 'userService', function ($scope, $http, $rootScope, $userService) {
    $scope.user = $userService.getUser();
   
    $scope.openWelcom = function () {
        $rootScope.welcomescreen.open();
    }
    
}]);

app.controller("Step1Controller", ["$scope", "$http", '$rootScope', 'userService', '$timeout', function ($scope, $http, $rootScope, $userService, $timeout) {
    $scope.user = $userService.getUser();
   
    $scope.save = function () {
        $userService.setUser($scope.user);
        mainView.router.load({ url: 'sharing/step2.html' });
    }
    
    $scope.finish = false;
    var timer = $timeout(
        function () {
            $scope.finish = true;
        },
        8000
    );
    $scope.$on("$destroy", function (event) {
        $timeout.cancel(timer);
    });
}]);
app.controller("Step2Controller", ["$scope", "$http", '$rootScope', 'userService','$timeout', function ($scope, $http, $rootScope, $userService, $timeout) {
    $scope.user = $userService.getUser();
  
    $scope.save = function () {
        $userService.setUser($scope.user);
        myApp.pickerModal('#confirm-card-sharing');
        $rootScope.$broadcast("open-confirmcard", true);
    }
    $scope.finish = false;
    var timer = $timeout(
        function () {
            $scope.finish = true;
        },
        6000
    );
    $scope.$on("$destroy", function (event) {
        $timeout.cancel(timer);
    });
}]);
app.controller("CardConfirmController", ["$scope", "$http", '$rootScope', 'userService','$timeout', function ($scope, $http, $rootScope, $userService, $timeout) {
    $scope.user = $userService.getUser();
    var timer, promise = null;
    $rootScope.$on("open-confirmcard", function (event, args) {
        $scope.isStarted = !$scope.isStarted;
        $scope.finish = false;
        if (timer)
            $timeout.cancel(timer);
        timer = $timeout(
            function () {
                $scope.finish = true;
            },
            7000
        );
    });
    var _end = function () {
        $scope.finish = false;
        myApp.hideIndicator();
        myApp.closeModal('#confirm-card-sharing');
        mainView.router.load({ url: 'sharing/step3.html' });
        

    }
    $scope.save = function () {
        $scope.finish = false;
        myApp.showIndicator();
        
        
        myApp.showIndicator();
        if (promise)
            $timeout.cancel(promise);
        promise = $timeout(_end, 1000);
        
    }
    $scope.finish = false;
   
    $scope.$on("$destroy", function (event) {
        $timeout.cancel(timer);
        if (promise)
            $timeout.cancel(promise);
    });
}]);
app.controller("Step3Controller", ["$scope", "$http", '$rootScope', 'userService','$timeout', function ($scope, $http, $rootScope, $userService, $timeout) {
    $scope.user = $userService.getUser();
    var timer, promise = null;
    var _end = function () {
        $scope.finish = false;
        myApp.hideIndicator();
        $userService.setUser($scope.user);
        $rootScope.$broadcast('end-started');
        myApp.pickerModal('.end-ride');
        myApp.alert('Payment successful!');
    }
    $scope.save = function () {

        myApp.showIndicator();
        if (promise)
            $timeout.cancel(promise);
        promise = $timeout(_end, 3000);

      
    }
    $scope.$on("$destroy", function (event) {
        $timeout.cancel(timer);
        if (promise)
            $timeout.cancel(promise);
    });

}]);
app.controller("EndController", ["$scope", "$http", '$rootScope', 'userService', '$timeout', '$http', function ($scope, $http, $rootScope, $userService, $timeout, $http) {
    $scope.user = $userService.getUser();
    var promise = null;
   
    
    $scope.$on('end-started', function (event, args) {
        if (promise) 
            $timeout.cancel(promise);
    });
    $scope.goBack = function () {
        myApp.closeModal('.end-ride');
        mainView.router.load({ url: 'home.html' });
    }
    $scope.$on("$destroy", function (event) {
        if (promise)
            $timeout.cancel(promise);
    });
}]);

//PAYMENT
app.controller("PaymentStep1Controller", ["$scope", "$http", '$rootScope', 'userService', '$timeout', function ($scope, $http, $rootScope, $userService, $timeout) {
    $scope.user = $userService.getUser();
    var promise = null;
    var _end = function () {
        myApp.hideIndicator();
        mainView.router.load({ url: 'payment/step2.html' });
    }

    $scope.save = function () {
        myApp.showIndicator();
        $userService.setUser($scope.user);
        if (promise) 
            $timeout.cancel(promise);
        promise = $timeout(_end, 500);
    }
    $scope.finish = false;
    var timer = $timeout(
        function () {
            $scope.finish = true;
        },
        10000
    );
    $scope.$on("$destroy", function (event) {
        $timeout.cancel(timer);
    });
}]);
app.controller("PaymentStep2Controller", ["$scope", "$http", '$rootScope', 'userService', '$timeout', function ($scope, $http, $rootScope, $userService, $timeout) {
    $scope.user = $userService.getUser();
   
    $scope.saved = false;
    var promise = null;
    var _end = function () {
        myApp.hideIndicator();
       
        //myApp.alert('Payment successful!');
    }

    $scope.save = function () {
        myApp.pickerModal('#payment-card');
        $rootScope.$broadcast("open-confirmcard2", true);
        $scope.saved = true;
        //myApp.showIndicator();
        //$userService.setUser($scope.user);
        //if (promise)
        //    $timeout.cancel(promise);
        //promise = $timeout(_end, 3000);
    }
    $scope.finish = false;
    var timer = $timeout(
        function () {
            $scope.finish = true;
        },
        2000
    );
    $scope.$on("$destroy", function (event) {
        $timeout.cancel(timer);
    });
}]);
app.controller("CardConfirm2Controller", ["$scope", "$http", '$rootScope', 'userService','$timeout', function ($scope, $http, $rootScope, $userService, $timeout) {
    $scope.user = $userService.getUser();
    var timer;
    $rootScope.$on("open-confirmcard2", function (event, args) {
        $scope.isStarted = !$scope.isStarted;
        $scope.finish = false;
        if (timer)
            $timeout.cancel(timer);
        timer = $timeout(
            function () {
                $scope.finish = true;
            },
            7000
        );
    });
    var promise = null;
    var _end = function () {
        $scope.finish = false;
        myApp.hideIndicator();
        myApp.closeModal('#payment-card');
        myApp.pickerModal('.end-payment');
        myApp.alert('Payment successful!');

    }

    $scope.save = function () {
        $scope.finish = false;
        myApp.showIndicator();
         if (promise)
            $timeout.cancel(promise);
        promise = $timeout(_end, 3000);
    }
    $scope.finish = false;
   
    $scope.$on("$destroy", function (event) {
        $timeout.cancel(timer);
        if (promise)
            $timeout.cancel(promise);
    });
}]);
app.controller("EndPaymentController", ["$scope", "$http", '$rootScope', 'userService', '$timeout', '$http', function ($scope, $http, $rootScope, $userService, $timeout, $http) {
    $scope.user = $userService.getUser();
    $scope.date = new Date();
    var promise = null;
    
    $scope.goBack = function () {
        myApp.closeModal('.end-payment');
        mainView.router.load({ url: 'home.html' });
    }
    $scope.$on('end-started', function (event, args) {
        if (promise)
            $timeout.cancel(promise);
    });
    $scope.$on("$destroy", function (event) {
        if (promise)
            $timeout.cancel(promise);
    });


}]);
