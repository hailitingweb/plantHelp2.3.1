angular.module("myapp").controller("myPraiseCtrl",function($scope){
    $scope.remove=function(e){
        console.log(e,$scope.circleData.length);
        var i=0;
        angular.forEach($scope.circleData,function(items){
            console.log(items.id);
            if(e==items.id){
                $scope.circleData.splice(i,1);
            }
            i++;
        })
    }
});
