/**
 * Created by hxsd on 2016/9/28.
 */
angular.module("myapp")
    .controller("indoorPlantCtrl", function ($scope, $http) {
        console.log("indoor:"+$scope.page_manage.isSignIn);
        $scope.indoorPlants = [];
        $scope.getIndoorPlants = function () {
            var url = "json/plantPage.json";   // 请求的url
            $http.get(url)
                .success(function (indoorPlants) {
                    angular.forEach(indoorPlants, function (indoorPlant) {
                        $scope.indoorPlants.push(indoorPlant);
                    });
                    //console.log($scope.indoorPlants[0].indoor[0]);
                });
        };
        $scope.getIndoorPlants();

    });