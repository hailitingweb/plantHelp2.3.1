/**
 * Created by zhangHong on 2016/9/29.
 */
angular.module("myapp")
    .controller("categoryCtrl", function ($scope,$http,$state,$ionicViewSwitcher,dataFactory) {
        $scope.categoryPlants = [];
        $scope.getCategoryPlants = function () {
            var url = "json/flowers.json";   // 请求的url
            $http.get(url)
                .success(function (categoryPlants) {
                    angular.forEach(categoryPlants, function (categoryPlant) {
                        $scope.categoryPlants.push(categoryPlant);
                    });
                    //console.log($scope.categoryPlants);
                });
        };
        $scope.getCategoryPlants();

        // 查询出来要显示在view中的数据
        $scope.data = dataFactory.query();

        // 跳转
        $scope.toPlantDetails = function(id){
            $state.go("plantDetails",{id:id});

            // 将go有动画效果
            $ionicViewSwitcher.nextDirection("forward");    // "forward","back"
        };
    });