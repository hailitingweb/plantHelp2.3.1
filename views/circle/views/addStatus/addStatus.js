angular.module("myapp").controller("addStatusCtrl", function ($scope, $ionicModal, $timeout, $location, $interval) {
    //发布新状态
    $scope.article = {
        "text": ""
    };
    var articleLd=$scope.circleData[$scope.circleData.length - 1].id;
    $scope.plusArticle = function () {
        var time = new Date();
        $scope.CHours = time.getHours();
        $scope.CMin = time.getMinutes();
        articleLd++;
        var newArticle = {
            "comment": [
                {"count": 0},
                {"comment": []}
            ],
            "favor": "0",
            "id": "00"+articleLd,
            "img": [],
            "item": $scope.article.text,
            "time": $scope.CMin + "分钟",
            "share": "0",
            "userImg":$scope.meLists[0].userId.headImg,
            "userName": "樱桃小丸子"
        };
        $scope.circleData.unshift(newArticle);
        $scope.circleData=$scope.circleData;
        $scope.article.text = null;
    };
});
