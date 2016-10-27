/**
 * Created by hxsd on 2016/9/29.
 */
angular.module("myapp")
    .controller("homeCtrl",function($scope,$http,$state,$ionicViewSwitcher,recommendDataFactory,dataFactory){
        console.log("tabs.home:"+$scope.page_manage.isSignIn);
        // 创建一些scope变量
        $scope.page = 0;    // 用来保存当前请求的页码
        $scope.total = 1;   // 用来保存总页数
        $scope.recommendPlants = [];
        $scope.getRecommendPlants = function () {
            $scope.page++;  // 页数++

            var url = "json/recommend.json";   // 请求的url
            $http.get(url)
                .success(function (recommendPlants) {
                    angular.forEach(recommendPlants, function (recommendPlant) {
                        $scope.recommendPlants.push(recommendPlant);
                    });

                    // 更新总页面数
                    $scope.total = 2;
                })
                .finally(function () {
                    // 广播事件，告诉无限滚动组件everything is done
                    $scope.$broadcast("scroll.infiniteScrollComplete");
                });
        };
        $scope.getRecommendPlants();    // 加载时，从API加载第一页数据

        // 查询出来要显示在view中的数据
        $scope.recommendData = recommendDataFactory.query();

        $scope.toDetailDesc = function (title) {
            $state.go("recommendDetails",{title:title});

            // 将go有动画效果
            $ionicViewSwitcher.nextDirection("forward");
        };

        // 查询出来要显示在view中的数据
        $scope.data = dataFactory.query();

        // 跳转
        $scope.toPlantDetails = function(id){
            $state.go("plantDetails",{id:id});

            // 将go有动画效果
            $ionicViewSwitcher.nextDirection("forward");    // "forward","back"
        };
});