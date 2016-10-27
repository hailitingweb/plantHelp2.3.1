/**
 * Created by Administrator on 2016/10/17.
 */
var myapp = angular.module("myapp", ["ionic"]);
// 配置路由
myapp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("welcome",{
        url:"/welcome",
        templateUrl:"views/welcome/welcome.html",
        controller:"welcomeCtrl"
    }).state("tabs", {
        url: "/tabs",
        abstract: true,
        templateUrl: "views/tabs/tabs.html",
        controller:'pagesigninCtrl'
    }).state("tabs.home", {
        url: "/home",
        views: {
            "home-tab": {
                templateUrl: "views/home/home.html",
                controller:"homeCtrl"
            }
        }
    }).state("tabs.category", {
        url: "/category",
        views: {
            "category-tab": {
                templateUrl: "views/category/category.html",
                controller:"categoryCtrl"
            }
        }
    }).state("tabs.circle", {
            url: "/circle",
            views: {
                "circle-tab": {
                    templateUrl: "views/circle/circle.html",
                    controller: "circleCtrl"
                }
            }
        }).state("tabs.me", {
        url: "/me",
        views: {
            "me-tab": {
                templateUrl: "views/me/me.html",
                controller: "meCtrl"
            }
        }
    });
    $stateProvider.state("camera", {
        url:"/camera",
        templateUrl:"views/camera/camera.html",
        controller:"cameraCtrl"
    }).state("indoorPlant", {
        url: "/indoorPlant",
        templateUrl: "views/indoorPlant/indoorPlant.html"
        //controller:"indoorPlantCtrl"
    }).state("courtyardPlant", {
        url: "/courtyardPlant",
        templateUrl: "views/courtyardPlant/courtyardPlant.html"
    }).state("curbsidePlant", {
        url: "/curbsidePlant",
        templateUrl: "views/curbsidePlant/curbsidePlant.html"
    }).state("succulentPlant", {
        url: "/succulentPlant",
        templateUrl: "views/succulentPlant/succulentPlant.html"
    }).state("plantDetails", {
        url: "/plantDetails?:id",
        templateUrl: "views/plantDetails/plantDetails.html",
        controller: "plantDetailsCtrl"
    });

    $stateProvider.state("recommendDetails", {
        url: "/recommendDetails?:title",
        templateUrl: "views/recommendDetails/recommendDetails.html",
        controller: "recommendDetailsCtrl"
    });

    $stateProvider.state("tabs.category.deciduousTrees", {
        url: "/deciduousTrees",
        views: {
            "category-tab": {
                templateUrl: "views/category/categoryView/deciduousTrees.html",
                controller: "categoryCtrl"
            }
        }
    }).state("tabs.category.evergreenTree", {
        url: "/evergreenTree",
        views: {
            "category-tab": {
                templateUrl: "views/category/categoryView/evergreenTree.html",
                controller: "categoryCtrl"
            }
        }
    }).state("tabs.category.deciduousShrub", {
        url: "/deciduousShrub",
        views: {
            "category-tab": {
                templateUrl: "views/category/categoryView/deciduousShrub.html"
                //controller: "categoryCtrl"
            }
        }
    }).state("tabs.category.evergreenShrub", {
        url: "/evergreenShrub",
        views: {
            "category-tab": {
                templateUrl: "views/category/categoryView/evergreenShrub.html"
                //controller: "categoryCtrl"
            }
        }
    }).state("tabs.category.aquaticPlant", {
        url: "/aquaticPlant",
        views: {
            "category-tab": {
                templateUrl: "views/category/categoryView/aquaticPlant.html"
                //controller: "categoryCtrl"
            }
        }
    });

    $stateProvider.state("commentPlant", {
        url: "/comment?id",
        templateUrl: "views/comment/comment.html",
        controller:"commentCtrl"
    });

    //个人中心
    $stateProvider.state("personalHome", {
        url: "/personalHome",
        templateUrl: "views/personalHome/personalHome.html"
    });
    $stateProvider.state("edit",{
        url:"/edit",
        templateUrl:"views/edit/edit.html",
        controller:"editCtrl"
    });

    //植谜
    $stateProvider.state("withMystery", {
        url: "/withMystery",
        templateUrl: "views/me/views/withMystery/withMystery.html"
    });
    //植文
    $stateProvider.state("plantArticle", {
        url: "/plantArticle",
        templateUrl: "views/plantArticle/plantArticle.html"
    });
    //我的植物馆
    $stateProvider.state("myPlantHouse", {
        url: "/myPlantHouse",
        templateUrl: "views/me/views/myPlantHouse/myPlantHouse.html",
        controller: "myPlantHouseCtrl"
    });
    //我的赞
    $stateProvider.state("myPraise", {
        url: "/myPraise",
        templateUrl: "views/me/views/myPraise/myPraise.html",
        controller:"myPraiseCtrl"
    });
    //草稿箱
    $stateProvider.state("drafts", {
        url: "/drafts",
        templateUrl: "views/me/views/drafts/drafts.html"
    });
    //浏览历史
    $stateProvider.state("browsingHistory", {
        url: "/browsingHistory",
        templateUrl: "views/me/views/browsingHistory/browsingHistory.html"
    });
    //设置
    $stateProvider.state("setup", {
        url: "/setup",
        templateUrl: "views/me/views/setup/setup.html",
        controller:"setUpCtrl"
    });
    //分享植物库APP
    $stateProvider.state("shareApp", {
        url: "/shareApp",
        templateUrl: "views/me/views/shareApp/shareApp.html"
    });
    //添加发布状态
    $stateProvider.state("addStatus", {
        url: "/addStatus",
        templateUrl: "views/circle/views/addStatus/addStatus.html",
        controller:"addStatusCtrl"
    });


    $stateProvider.state("page_sign_in",{
        url:"/page_sign_in",
        templateUrl:"views/sign/page_sign_in.html",
        controller:'pagesigninCtrl'
    })// 路由到登录子页面
    .state("sign_enroll",{
        url:"/sign_enroll",
        templateUrl:"views/sign_enroll/sign_enroll.html",
        controller:'signenrollCtrl'});


    // 默认路由
    $urlRouterProvider.otherwise("/welcome");
});
    myapp.controller("myCtrl", function ($scope, $http,$state,account_manage) {
         $http.get("json/plantPage.json").success(function (data) {
               $scope.plantList = data;
             $scope.circleData = $scope.plantList[1].circle;
             $scope.indoorPlants = $scope.plantList[0].category[0].indoor;
             //$scope.succulentPlants = $scope.plantList[0].category[3].succulent;
             //console.log($scope.indoorPlants);
             $scope.meLists = $scope.plantList[2].me;
         });

        $scope.add = function(indoorPlant,id){
            for(var i=0;i<$scope.indoorPlants.length;i++){
                if($scope.indoorPlants[i].up == undefined){
                    $scope.indoorPlants[i].up = true;
                }
                if(i==id && $scope.indoorPlants[i].up){
                    $scope.indoorPlants[i].favor ++;
                    $scope.indoorPlants[i].up=false;
                    $scope.show = true;
                }
            }
        };
        /*
         * 初始化本地存储
         * */
        var accounts=localStorage["accounts"];
        if(!accounts){
            localStorage["accounts"]=JSON.stringify([]);
            account_manage.regist("zhang","123");
        }
        /*
         * 页面管理对象
         * isSignIn:用户是否登录 bool
         * current_account：当前账户信息，可以全局访问
         * */
        $scope.page_manage={
            isSignIn:false,
            currentAccount:null,
            userAccount:"",
            userPassword:"",
            hotPushs:null
        };


    });

// 使用工厂方法，创建的一个单例对象
// 这个单例对象会被缓存
myapp.factory("dataFactory", function ($http) {
    var data = {plantList: []};   // 一定要保存到对象中，不要直接保存到一个数组变量中
    $http.get("json/flowers.json").success(function (_data, status, headers, config) {
        data.plantList = _data;
    });
    return {
        query: function () {
            return data;   // 返回数据
        } // end query
    };
});

myapp.factory("recommendDataFactory", function ($http) {
    var recommendData = {recommendList: []};   // 一定要保存到对象中，不要直接保存到一个数组变量中
    $http.get("json/recommend.json").success(function (_data, status, headers, config) {
        recommendData.recommendList = _data;
    });
    return {
        query: function () {
            return recommendData;   // 返回数据
        } // end query
    };
});