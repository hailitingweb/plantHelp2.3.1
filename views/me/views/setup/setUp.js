/**
 * Created by hxsd on 2016/10/21.
 */
angular.module("myapp")
    .controller("setUpCtrl",function($scope,$state){
        $scope.exit=function(){
            $scope.page_manage.isSignIn=false;
            $scope.page_manage.currentAccount=null;
            $scope.page_manage.userAccount="";
            $scope.page_manage.userPassword="";
            $state.go("page_sign_in");
        }
});
