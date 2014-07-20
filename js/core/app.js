var App = angular.module('App', ['ngRoute', 'angular-gestures']);

App.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'templates/Home.html'
        }).when("/cube", {
            templateUrl: 'templates/Cube.html',
            controller: 'Cube'
        }).when("/gradienttext", {
            templateUrl: 'templates/GradientText.html'
        }).when("/gradientborder", {
            templateUrl: 'templates/GradientBorder.html'
        }).when("/gradientbackground", {
            templateUrl: 'templates/GradientBackground.html'
        }).when("/keyframes", {
            templateUrl: 'templates/Keyframes.html'
        }).when("/transitions", {
            templateUrl: 'templates/Transitions.html',
            controller: 'Transitions'
        }).when("/about", {
            templateUrl: 'templates/About.html'
        }).when("/imagepreload", {
            templateUrl: 'templates/ImagePreload.html'
        }).when("/hoveractive", {
            templateUrl: 'templates/HoverActive.html'
        }).when("/inputfixedheader", {
            templateUrl: 'templates/InputFixedHeader.html'
        }).when("/overflowscroll", {
            templateUrl: 'templates/OverflowScroll.html'
        }).otherwise({
            redirectTo: '/'
        })

}
]);
