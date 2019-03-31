app.controller("registerCtrl",function ($scope, authFactory, $location, $log){
    $scope.msg = "Welcome to the register Page";
    $log.log($scope.msg);
    let promise = authFactory.authCheck();
    
    promise.then(data =>{
        console.log(data);
        if(data.isAuth){
            $location.path("/community");
        } else {
            $location.path("/login");
        }
        console.log(data)
    }, err => {
    });

    $scope.callRegister = function() {
        if ($scope.registerForm.email.$valid && $scope.registerForm.username.$valid && $scope.registerForm.lastname.$valid&& $scope.email && $scope.password) {
            $scope.register();
        }else if(!$scope.registerForm.email.$valid || !$scope.registerForm.username.$valid || !$scope.registerForm.lastname.$valid){
            swal ( "Oops" ,  "Pls provide valid data " ,  "error" );            
        }
        else{
            swal ( "Oops" ,  "Pls provide required email, password..." ,  "error" );
        }
    };

    $scope.register = () => {
        let promise = authFactory.register($scope.username, $scope.lastname, $scope.email, $scope.password);
        promise.then(data =>{
            $location.path("/login");
        }, err => {
            swal ( "Oops" ,  "Register unsuccessfull!Pls try again with different email and password...." ,  "error" )
        });
    };
});