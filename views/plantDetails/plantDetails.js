/**
 * Created by hxsd on 2016/10/20.
 */
angular.module("myapp")
    .controller("plantDetailsCtrl", function ($scope,$stateParams,dataFactory) {
        // 解析url中的参数(通过url传递的参数，解析出来都是字符串)
        var id = $stateParams.id;
        $scope.plantDetails = {};
        // 查询出来要显示在view中的数据
        var data = dataFactory.query();
        //console.log(data.plantList);
        angular.forEach(data.plantList, function (items) {
            angular.forEach(items,function(itemArr){
                angular.forEach(itemArr,function(item) {
                    if (item.id == id) {
                        $scope.plantDetails = item;
                        //console.log($scope.plantDetails);
                        return false;   // 中断forEach循环 <=> break
                    }
                })
            });
        });

        $scope.selectedType = 1;
        $scope.selectType = function(num){
            if (num == 1){
                $scope.selectedType = 1;
            }else if (num == 2){
                $scope.selectedType = 2;
            }else if (num == 3){
                $scope.selectedType = 3;
            }else if (num == 4){
                $scope.selectedType = 4;
            }else if (num == 5){
                $scope.selectedType = 5;
            }else if (num == 6){
                $scope.selectedType = 6;
            }else if (num == 7){
                $scope.selectedType = 7;
            }else if (num == 8){
                $scope.selectedType = 8;
            }
        };
    });