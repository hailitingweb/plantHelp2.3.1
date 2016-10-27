angular.module("myapp")
    .controller('pagesigninCtrl',function($scope,$state,$ionicPopup,account_manage){
    /*
    * 账号 密码登录
    * */
    console.log("page_sign_in:"+$scope.page_manage.isSignIn);
        $scope.signIn=function(account,password){
            var loginResult=account_manage.sign_in(account,password);
            if(loginResult.isSuccess){
                $scope.page_manage.isSignIn=true;
                //console.log($scope.page_manage.isSignIn);
                $scope.page_manage.currentAccount=loginResult.result;
                //console.log($scope.page_manage.currentAccount);
                $state.go("tabs.home");
            }else {
               $scope.showAlert(loginResult.result);
            }
        };

        // 警告框
        $scope.showAlert=function (message) {
            $ionicPopup.alert({
                title: '警告',
                template: '<p style="text-align: center;font-size: 14px">植物小帮手提醒您</p><h4 style="text-align: center">'+message+'</h4>',
                buttons: [{text:"确定"}]
            }).then(function (res) {
                console.log('请慎重考虑，反正我告诉过你了。');
            });
        };

        /*
        * 随便逛逛
        * */
        $scope.notSignIn=function(){
            $state.go("tabs.home");
        };

        /*
         * 我的页面路由
         * */
        $scope.me=function(){
            //console.log($scope.page_manage.isSignIn);
            if($scope.page_manage.isSignIn){
                $state.go("tabs.me");
            }else{
                $state.go("page_sign_in");
            }
        };

        $scope.circle=function(){
            //console.log($scope.page_manage.isSignIn);
            if($scope.page_manage.isSignIn){
                $state.go("tabs.circle");
            }else{
                $scope.showAlert("您还没有登录哦！");
            }
        };

});