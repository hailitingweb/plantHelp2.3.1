/**
 * Created by zhang on 2016/10/16.
 */
angular.module("myapp").factory("account_manage",function(){
    function parseAccount(){
        var acts=JSON.parse(localStorage["accounts"]);
        return acts;
    }
    return {
        //登录
        "sign_in": function (account_name,password) {
            var loginResult = {};
            var acts=parseAccount();
            for(var index in acts){
                if(acts[index].account_name==account_name){
                    if(acts[index].password==password){
                        loginResult.isSuccess = true;
                        loginResult.result = (new supAccount(acts[index]));
                        return loginResult;
                    }else{
                        loginResult.isSuccess = false;
                        loginResult.result = "密码错误";
                        return loginResult; //密码错误
                    }
                }
            }
            loginResult.isSuccess = false;
            loginResult.result = "账号不存在";
            return loginResult;
        },
        //注册
        "regist":function(account_name,password){
            var acts=parseAccount();
            for(var index in acts){
                if(acts[index].account_name==account_name){
                    return false;//账号已经存在
                }
            }
            var acnt=new account(account_name,password);
            acts.push(acnt);
            localStorage["accounts"]=JSON.stringify(acts);
            return true;//注册成功
        },
        query_account: function (account_name) {
            var acts=parseAccount();
            for(var index in acts){
                if(acts[index].account_name==account_name){
                    return (new supAccount(acts[index]));//暂定
                }
            }
            return 1;//查询失败
        },
        /*
        * 获取所有的账号对象,如果输入账号，返回账号数组（不包含输入账号）
        * */
        getAccounts:function(user){
            var acts=parseAccount();
            var subacts=[];
            for(var i in acts){
                if(acts[i].account_name==user){
                    continue;
                }
                subacts.push((new supAccount(acts[i])));
            }
            return subacts;
        },
        /*
        *info:包装前对象
        * */
        update:function(info){
            var acts=parseAccount();
            for(var i in acts){
                if(acts[i].account_name==info.account_name){
                    acts[i]=info;
                    localStorage["accounts"]=JSON.stringify(acts);
                }
            }
        }
    }
});