app.controller("communityCtrl",function ($scope, authFactory, $location){
    let promise = authFactory.authCheck();
    promise.then(data =>{
        console.log(data);
    }, err => {
        // $location.path("/login");
        console.err(err);
    });
    $scope.msg = "Welcome to the Community Page";
    
    let getPostPromise = authFactory.getPost();
    getPostPromise.then(data => {
        $scope.reccon = data.data;
    }).catch( err => {
        console.log(err);

    });
});