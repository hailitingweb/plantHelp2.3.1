/**
 * Created by hxsd on 2016/10/18.
 */
angular.module("myapp").controller("cameraCtrl", function ($scope) {
//    $scope.photoErr = false;
//    $scope.photoBtnDiable = true;
//    var mediaStream = null, track = null;
//    navigator.getMedia = (navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
//    if (navigator.getMedia) {
//        navigator.getMedia({video: true},
//            //successCallBack
//            function (stream) {
//                var s = window.URL.createObjectURL(stream);
//                var video = document.getElementById("video");
//                video.src = window.URL.createObjectURL(stream);
//                mediaStream = stream;
//                track = stream.getTracks()[0];
//                $scope.photoBtnDiable = false;
//                $scope.$apply();
//            },
//            //errorCallBack
//            function(err){
//                $scope.errorPhoto();
//                console.log("the following err occured:"+err);
//            });
//    }else {
//        $scope.errorPhoto();
//    }
});