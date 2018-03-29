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
    var autocompleteDropdownSimple = myApp.autocomplete({
        input: '#autocomplete-dropdown',
        openIn: 'dropdown',
        source: function (autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            // Find matched items
            for (var i = 0; i < $scope.users.length; i++) {
                if ($scope.users[i].customerName.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push($scope.users[i].customerName);
            }
            // Render items by passing array with result items
            render(results);
        }
    });
    $scope.filterFunction = function (element) {
        return element.customerName.toLowerCase().includes($scope.search.toLowerCase()) || $scope.search == "";
    };
}]);