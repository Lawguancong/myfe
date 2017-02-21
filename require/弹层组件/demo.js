/**
 * Created by apple on 17/2/19.
 */
//require.config({
//    paths: {
//        jquery: 'jquery-1.12.4'
//    }
//});
require(['jquery','dialog'],function($,Dialog){
    //var dialog = new Dialog()

    $('#btn').on('click',function(){
        Dialog.open({
            width:500,
            title:"登录",
            url:'login.html'
        });
    });
    $('#btn2').on('click',function(){
        //console.log($('.demo-container'))
        if($('.demo-container')){
            console.log(1111)
            console.log($('.demo-container'))
            return
        }
        Dialog.close();
    });
});