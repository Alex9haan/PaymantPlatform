app.controller("HomeController", ["$scope", "$http", '$rootScope', 'userService', function ($scope, $http, $rootScope, $userService) {
    
    $scope.openWelcom = function () {
        $rootScope.welcomescreen.open();
    }
    
}]);

app.controller("Step1Controller", ["$scope", "$http", '$rootScope', 'userService', '$timeout', function ($scope, $http, $rootScope, $userService, $timeout) {
    $scope.finish = false;
    $scope.users = $userService.getUsers();
    $scope.search = "";
    $scope.clear = function () {
        $scope.search = "";
    }
    var timer = $timeout(
        function () {
            $scope.finish = true;
            typeWriter();
        },
        1000
    );
    $scope.filterFunction = function (element) {
        return element.customerName.toLowerCase().includes($scope.search.toLowerCase()) || $scope.search == "";
    };
    $scope.$on("$destroy", function (event) {
        $timeout.cancel(timer);
    });

    var i = 0;
    var txt = 'Mario Rossi'; /* The text */
    var speed = 100; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
        $timeout.cancel(timer);
        if (i < txt.length) {
            $scope.search += txt.charAt(i);
            i++;
            timer = $timeout(typeWriter, speed);
        }
    }

}]);