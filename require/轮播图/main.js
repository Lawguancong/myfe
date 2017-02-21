require(['jquery','click'],function($,Click){
    //var idx1 = 0
    //var idx2 = 0
    $('#next1').on('click',function(){
        Click.next1();
        //console.log(Click.idx1())
        //var index = Click.idx1()
        //console.log(index)
    })
    $('#prev1').on('click',function(){
        Click.prev1();
    })
    $('#ul1 li').hover(function(){
        Click.hover1($(this).index());
        //console.log($(this).index())
        //console.log(Click.idx1)
        //console.log(Click.idx1)
        //console.log(Click.idx1())
        //console.log(Click.next1.iii)
    })
    var timer = setInterval(function(){
        Click.next1();  //timer = 7 ?
        //console.log(timer)
    },1000)
    $('#container1').hover(function(){
        clearInterval(timer)
        //timer = -1
        //console.log(timer)
    },function(){
        timer = setInterval(function(){ //不能 var timer = setInterval()
            Click.next1();
        },1000)
    })

    //$('#container1').on('hover',function(){
    //    clearInterval(timer)
    //},function(){
    //    timer = setInterval(function(){ //不能 var timer = setInterval()
    //                Click.next1();
    //            },1000)
    //})

    //console.log(Click.idx1)
})