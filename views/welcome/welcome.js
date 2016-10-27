/**
 *
 */
angular.module("myapp")
    .controller("welcomeCtrl",function($scope,$interval,$state){
        $scope.count = 3;
        var timer = $interval(function(){
            $scope.count--;
            if($scope.count == 0){
                $interval.cancel(timer);
                $state.go("page_sign_in");
            }
        },1800);

});