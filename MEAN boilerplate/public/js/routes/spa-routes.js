app.config(['$routeProvider', '$locationProvider', '$stateProvider' ,'$urlRouterProvider', 'LOGIN', 'LOGOUT', 'REGISTER', 'COMMUNITY', function($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider, LOGIN, LOGOUT, REGISTER, COMMUNITY){
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');

    var indexState = {
        name: 'index',
        url: '/',
        templateUrl: "home.html",
        controller: "homeCtrl"
    }

    var loginState = {
        name: 'login',
        url: LOGIN,
        templateUrl: "login.html",
        controller: "loginCtrl"
    }

    var logoutState = {
        name: 'logout',
        url: LOGOUT,
        templateUrl: "logout.html",
        controller: "logoutCtrl"
    }

    var registerState = {
        name: 'register',
        url: REGISTER,
        templateUrl: "register.html",
        controller: "registerCtrl"
    }

    var communityState = {
        name: 'community',
        url: COMMUNITY,
        templateUrl: "community.html",
        controller: "communityCtrl"
    }

    $stateProvider.state(indexState);  
    $stateProvider.state(loginState);  
    $stateProvider.state(logoutState);  
    $stateProvider.state(registerState);  
    $stateProvider.state(communityState);  
    
}]);