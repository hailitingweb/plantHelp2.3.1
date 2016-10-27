angular.module("myapp").controller("commentCtrl", function ($scope,$stateParams,$ionicModal,$interval) {
    var id=$stateParams.id;
    $scope.info={
        comment:""
    };
    angular.forEach($scope.circleData,function(e){
        if(id== e.id){
            $scope.items= e.comment[1].comment;
            $scope.sentComment=function(comment){
                if(comment==""){
                    alert("您输入为空哦！！")
                }else {
                    var itemComment={
                        "CimgUser": "images/circle/tx0.jpg",
                        "CuserName": "樱桃小汤圆",
                        "Ctime":"",
                        "item": ""
                    };
                    var time=new Date();
                    $scope.CHours=time.getHours();
                    $scope.CMin=time.getMinutes();
                    itemComment.Ctime=$scope.CHours+":"+$scope.CMin;
                    itemComment.item=comment;
                    $scope.items.unshift(itemComment);
                    $scope.info.comment="";
                    $scope.modal.hide();
                }

            };
        }
    });
});
