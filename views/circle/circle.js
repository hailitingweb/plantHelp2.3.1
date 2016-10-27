angular.module("myapp").controller("circleCtrl", function ($scope, $ionicModal, $timeout, $location, $interval) {
    $scope.showImg = function (e) {
        $scope.transparent = "transparent";
        if (e == "collect") {
            $scope.collect = true;
            $scope.shield = false;
            $scope.report = false;
        } else if (e == "shield") {
            $scope.shield = true;
            $scope.report = false;
            $scope.collect = false;
        }
        else if (e == "report") {
            $scope.report = true;
            $scope.shield = false;
            $scope.collect = false;
        }
        $timeout(function () {
            $scope.modal.hide();
            $scope.transparent = "";
            $scope.collect = $scope.shield = $scope.report = false;
        }, 1800);
    };
    var arr = [];
    var refavor = [];
    angular.forEach($scope.circleData, function (even) {
        arr.push(even.id);
    });
    $scope.favor = function (obj,e) {
        if($scope.isture != e){
            arr.push($scope.circleData[0].id);
        }
        $scope.isture = e;
        angular.forEach(arr, function (even) {
            if (e == even) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] == even) {
                        arr.splice(i, 1);
                    }
                }
                obj = parseInt(obj) + 1;
                refavor.push(e);
                angular.forEach($scope.circleData, function (even) {
                    if (e == even.id) {
                        even.favor = obj;
                    }
                });
            }
        });
    };
    //分享
    $scope.show = true;
    $scope.shareShow = function (e) {
        if($scope.show){
            angular.forEach($scope.circleData, function (even) {
                    if (e == even.id) {
                        $scope.share = even.id;
                    }else {
                        $scope.share != even.id;
                    }
                    $scope.show = false;
                }
            )
        }else {
            $scope.show = true;
            $scope.share =0;
        }

    };
    //模态层
    $ionicModal.fromTemplateUrl("more.html", {
        scope: $scope,
        animation: "slide-in-up"
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function () {
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };
    //Cleanup the model when we are done with it!
    $scope.$on("$destroy", function () {
        $scope.model.remove();
    });
    //Execute action on hide modal
    $scope.$on("modal.hidden", function () {
        //    Execute action
    });
    $scope.$on("modal.removed", function () {
        //    Execute action
    });

});