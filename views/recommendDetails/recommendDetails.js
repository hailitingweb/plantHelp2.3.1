/**
 * Created by wxl on 16-10-23.
 */
angular.module("myapp")
    .controller("recommendDetailsCtrl",function ($scope,$stateParams,recommendDataFactory) {
    // 解析url中的参数(通过url传递的参数，解析出来都是字符串)
        var title = $stateParams.title;
        $scope.recommendDetails = {};
        // 查询出来要显示在view中的数据
        var recommendData = recommendDataFactory.query();
        //console.log(recommendData.recommendList);
        angular.forEach(recommendData.recommendList, function (item) {
            if (item.title == title) {
                $scope.recommendDetails = item;
                //console.log($scope.plantDetails);
                return false;   // 中断forEach循环 <=> break
            }
        });
}).filter('trust2Html', ['$sce',function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
}])