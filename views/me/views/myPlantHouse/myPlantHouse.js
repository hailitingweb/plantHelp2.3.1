angular.module("myapp")
    .controller("myPlantHouseCtrl", function ($scope, $http,$state,$ionicViewSwitcher,dataFactory) {
       $http.get("json/flowers.json").success(function(data){
             $scope.myPlantHouseList=data[0].plant2;
       });
        // 查询出来要显示在view中的数据
        $scope.data = dataFactory.query();
    });
