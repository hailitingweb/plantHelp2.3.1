angular.module("myapp").controller("meCtrl", function ($scope, $ionicModal) {
    $scope.arr=[
        "images/myarticle/111.jpg",
        "images/myarticle/222.jpg",
        "images/myarticle/333.jpg",
        "images/myarticle/tc4.jpg",
    "images/myarticle/tc5.jpg"];
    $scope.changeImg=function(e){
        $scope.arr[0]=e;
        //$scope.meLists[0].userId.headImg=e;
    };
    $scope.concel=function(){
    };
    $scope.show=false;
    $scope.plus=function(){
        if($scope.show) {
            $scope.show=false;
        }else {
            $scope.show=true;
        }
    };
    $ionicModal.fromTemplateUrl("shareApp.html", {
        scope: $scope,
        animation: "slide-in-up"
    }).then(function (shareApp) {
        $scope.shareApp = shareApp;
    });
    $scope.openModal = function () {
        $scope.shareApp.show();
    };
    $scope.closeModal = function () {
        $scope.shareApp.hide();
    };
    $ionicModal.fromTemplateUrl("headImg.html", {
        scope: $scope,
        animation: "slide-in-up"
    }).then(function (headImg) {
        $scope.headImg = headImg;
    });
    $scope.openModal = function () {
        $scope.headImg.show();
    };
    $scope.closeModal = function (e) {
        e.hide();
        $scope.meLists[0].userId.headImg=$scope.arr[0];
    };
});