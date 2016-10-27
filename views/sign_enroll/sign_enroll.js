angular.module("myapp")
	.controller("signenrollCtrl",function($scope,$ionicPopup,$state,account_manage){
		$scope.regist={
			account:"",
			password:""
		};
		$scope.enroll_btn = function(){
			var result=account_manage.regist($scope.regist.account,$scope.regist.password);
			console.log(result);
			if(result){
				$scope.showAlert("恭喜你，注册成功！");
				$state.go("page_sign_in");
			}else{
				$scope.showAlert("该账号已被注册");
			}
		};

		// 警告框
		$scope.showAlert=function (message) {
			$ionicPopup.alert({
				title: '警告',
				template: '<p style="text-align: center;font-size: 14px;">植物小帮手提醒您</p><h4 style="text-align: center">'+message+'</h4>',
				buttons: [{text:"确定"}]
			}).then(function (res) {
				console.log('请慎重考虑，反正我告诉过你了。');
			});
		};
});
