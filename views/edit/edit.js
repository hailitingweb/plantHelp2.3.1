/**
 * Created by hxsd on 2016/10/24.
 */
angular.module("myapp")
    .controller("editCtrl",function($scope,$state,account_manage){
       $scope.finish=function(){
            account_manage.update($scope.page_manage.currentAccount.info);
           $state.go("personalHome");
       };
});