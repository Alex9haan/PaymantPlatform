
var myApp = {};
var mainView = {};
var rightView = {};
var $$ = Dom7;

var app = angular.module("AngularApp", ['angularJSTypedEffect']);
app.run(function ($rootScope) {
    myApp = new Framework7({
        modalTitle: 'Payment Platform',
        material: true,
        pushState: true,
        angular: true
    });
    mainView = myApp.addView('.view-main', {});
    mainView.router.load({ url: 'home.html' });
    //$rootScope.welcomescreen = _fnWelcomInit();
})
app.controller("RootController", ["$scope", function($scope) {
    $scope.title = "Paymant Platform";
}])



