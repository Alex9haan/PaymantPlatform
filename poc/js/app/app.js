
var myApp = {};
var mainView = {};
var rightView = {};
var $$ = Dom7;

var app = angular.module("AngularApp", []);
app.run(function ($rootScope) {
    myApp = new Framework7({
        modalTitle: 'Framework7',
        material: true,
        pushState: true,
        angular: true
    });
    mainView = myApp.addView('.view-main', {});
    $rootScope.welcomescreen = _fnWelcomInit();
})
app.config(function () {
    
    window.location.hash = "#!/home.html";
    
})
app.controller("RootController", ["$scope", function($scope) {
  $scope.title = "Welcome Page";
}])



