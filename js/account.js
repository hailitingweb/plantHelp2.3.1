/**
 * Created by zhanghong on 2016/10/16.
 */
function account(account_name, password){
    this.account_name=account_name;
    this.password=password;
    this.gender="女";
    this.head_img="images/0_03.jpg";
    this.nickname="樱桃小丸子";
    this.introduction="我是一个植物爱好者";
    this.level="LV2";
    this.credit="良好";
    this.qq="307826789";
    this.regist_date=new Date();
    this.location="杭州市西湖区";

    this.collect=[];

    this.messages=[];
}
function  supAccount(info){
    this.info=info;
}

