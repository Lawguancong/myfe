$(document).ready(function () {
	$("#wrap").height($(window).height());
	$(".main_wrap").height($(window).height());
	$(".left_tool_open_m").height($(window).height());
	$(".left_tool_m").height($(window).height());
	$(".ltab_box").height($(window).height()-$(".left_tool_m .pos").height()-$(".logo_left").height()-$(".search_box").outerHeight()-$(".ltab_main_t").height()-$(".left_foot").height()-60);
    $(".search_box2_m").height($(window).height()-$(".left_tool_m .pos").height()-$(".logo_left").height()-$(".search_box2_t").height()-$(".search_box2_ts").height()-$(".ltab_main_t").height()-$(".left_foot").height()-92);
	$(".map_main").height($(window).height());
});
/*
 * 放大、缩小可视化窗口时调整 #wrap、.left_tool、.map_main 相关元素的height
 */
$(window).resize(function () {
	$("#wrap").height($(window).height());
	$(".main_wrap").height($(window).height());
	$(".left_tool_open_m").height($(window).height());
	$(".left_tool_m").height($(window).height());
	$(".ltab_box").height($(window).height()-$(".left_tool_m .pos").height()-$(".logo_left").height()-$(".search_box").outerHeight()-$(".ltab_main_t").height()-$(".left_foot").height()-60);
    $(".search_box2_m").height($(window).height()-$(".left_tool_m .pos").height()-$(".logo_left").height()-$(".search_box2_t").height()-$(".search_box2_ts").height()-$(".ltab_main_t").height()-$(".left_foot").height()-92);
	$(".map_main").height($(window).height());

    /*ltab_main_m 滚动条*/
    if($(".ltab_box").height()/$(".lfollow").height()<1){
        $(".ltab_box_scrollbar").show()


        $(".ltab_box_moving_scrollbar").height($(".ltab_box").height()/$(".lfollow").height()*$(".ltab_box").height())
        $(".lfollow").css({"top":($(".ltab_box").height()-$(".lfollow").height())*($(".ltab_box_moving_scrollbar").position().top)/($(".ltab_box").height()-$(".ltab_box").height()/$(".lfollow").height()*$(".ltab_box").height())})

    }else{
        $(".ltab_box_scrollbar").hide();
        $(".lfollow").css("top",0)
    }
    if(parseInt(($(".ltab_box_moving_scrollbar").css("top")))<0){
        $(".ltab_box_moving_scrollbar").css("top",0)
        $(".lfollow").css("top",0)
    }
    if(parseInt(($(".ltab_box_moving_scrollbar").css("top")))+parseInt(($(".ltab_box_moving_scrollbar").height()))>$(".ltab_box").height()){
        $(".ltab_box_moving_scrollbar").css({"top":$(".ltab_box").height()-$(".ltab_box_moving_scrollbar").height()})
        $(".lfollow").css("top",$(".ltab_box").height()-$(".lfollow").height())
    }

    /*结束*/

}).resize();



$(function(){
  $(".left_clo").click(function(){
	  $(".left_tool").hide();
	  $(".left_tool_open").show();
	  $(".map_main .scale").css("left","122px");
	  $(".map_main .map_type").css("left","122px");
	  $(".map_main .copy").css("left","112px");
	  $(".map_main .map_tool").css("left","122px");
  });
  $(".left_open ,.left_tool_open .btn").click(function(){
	  $(".left_tool_open").hide();
	  $(".left_tool").show();
	  $(".map_main .scale").css("left","370px");
	  $(".map_maoin .map_type").css("left","370px");
	  $(".map_main .copy").css("left","360px");
	  $(".map_main .map_tool").css("left","370px");
	  // $(".ltab_box").mCustomScrollbar({
		// 	  scrollInertia:150
	  // });
	  // $(".search_box2_m").mCustomScrollbar({
		// 	  scrollInertia:150
	  // });
      $(".search_box").show()
      $(".ltab_main").show()
      $(".ltab_main_t").css({"height":"99"}).find("ul li").siblings().show().css({"float":"left","margin":"none","height":"79","padding-top":"10px","padding-bottom":"10px","line-height":"32px"}).find("i").css({"background-image":"url(images/map_l/ltit_small.png)","width":"50","height":"50"})
      $(".ltab_box").height($(window).height()-$(".left_tool_m .pos").height()-$(".logo_left").height()-$(".search_box").outerHeight()-$(".ltab_main_t").height()-$(".left_foot").height()-60);
	  if($(".search_box_t input[type='text']").val()!="")$(".ltab_main").hide();
      $(".left_tool_open_m i.i3").attr("data-flag","false")



  });
  
  $(".right_tool_clo").click(function(){
	  $(".right_tool_clo").hide();
	  $(".right_tool_open").show();
	  $(".right_tool_m").hide();
  });
  
  $(".right_tool_open").click(function(){
	  $(".right_tool_open").hide();
	  $(".right_tool_clo").show();
	  $(".right_tool_m").show();
  });
  
  $(".rtool_nav2_open").click(function(){
	  if($(this).hasClass('on')){
		$(this).removeClass('on');
		$(".rtool_nav2").hide();
		$(".rtool_nav3").hide();
	  }else {
		$(this).addClass('on');
		$(".rtool_nav2").show();
	  }
  });
  
  $(".rtool_nav2 ul li a").click(function(){
	  if($(this).hasClass('on')){
		$(this).removeClass('on');
		$(".rtool_nav3").hide();
	  }else {
		$(this).addClass('on');
		$(".rtool_nav3").show();
	  }
  });
  
  
  $(".rtool_nav4_open").click(function(){
	  if($(this).hasClass('on')){
		$(this).removeClass('on');
		$(".rtool_nav4").hide();
	  }else {
		$(this).addClass('on');
		$(".rtool_nav4").show();
	  }
  });
  
  $(".ltab_main_t ul li").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
	$(".ltab_main_m").children(".ltab_box:eq("+$(this).index()+")").css("display","none").siblings(".ltab_box").css("display","block");
      // $(".search_box").show();
      // $(".search_box").hide();
	// $(".search_box2").hide();
  });
  
  $(".login_box label input").click(function(){
	  
	  if($(this).is(':checked')){ 
		$(this).attr("checked","checked"); 
		$(this).parent().addClass("on"); 
	  }else{ 
		$(this).removeAttr("checked"); 
		$(this).parent().removeClass("on");
	  }
	  
  });
  
  $(".news_clo").click(function(){
	  $(".news_box_m a ,.news_list ,.news_clo").hide();
	  $(".news_open").show();
	  $(".news_box_m").css("width","64px");
  });
  
  $(".news_open").click(function(){
	  $(".news_box_m a ,.news_list ,.news_clo").show();
	  $(".news_open").hide();
	  $(".news_box_m").css("width","564px");
  });
    $(".left_tool_open_m ul li i").click(function () {
        $(".left_tool_open").hide();
        $(".left_tool").show();
        $(".map_main .scale").css("left","370px");
        $(".map_main .map_type").css("left","370px");
        $(".map_main .copy").css("left","360px");
        $(".map_main .map_tool").css("left","370px");
        // $(".ltab_box").mCustomScrollbar({
        //     scrollInertia:150
        // });
        // $(".search_box2_m").mCustomScrollbar({
        //     scrollInertia:150
        // });
    })
    /*
     * left_tool 关闭的时候 点击 船队、关注、搜索 按钮事件
     */
    $(".left_tool_open_m ul li i.i1").click(function (){
        $(".ltab_main").show();
        $(".search_box").hide()
        console.log(1)
        $(".ltab_main_m .ltab_box").eq(0).hide().end().eq(1).show();
        $(".ltab_main_t").css({"height":"99"}).find("ul li").eq(0).addClass("on").show().siblings().removeClass("on").hide().siblings().css({"float":"none","margin":"0 auto","height":"79","padding-top":"10px","padding-bottom":"10px","line-height":"32px"}).find("i").css({"background-image":"url(images/map_l/ltit_small.png)","width":"50px","height":"50px"})
        $(".ltab_box").height($(window).height()-$(".left_tool_m .pos").height()-$(".logo_left").height()-$(".ltab_main_t").height()-$(".left_foot").height()-130)
    })
    $(".left_tool_open_m ul li i.i2").click(function (){
        $(".ltab_main").show();
        $(".search_box").hide()
        $(".ltab_main_m .ltab_box").eq(0).show().end().eq(1).hide();
        $(".ltab_main_t").css({"height":"99"}).find("ul li").eq(1).addClass("on").show().siblings().removeClass("on").hide().siblings().css({"float":"none","margin":"0 auto","height":"79","padding-top":"10px","padding-bottom":"10px","line-height":"32px"}).find("i").css({"background-image":"url(images/map_l/ltit_small.png)","width":"50px","height":"50px"})
        $(".ltab_box").height($(window).height()-$(".left_tool_m .pos").height()-$(".logo_left").height()-$(".ltab_main_t").height()-$(".left_foot").height()-130)

    })
    $(".left_tool_open_m ul li i.i3").click(function (){
      	$(".ltab_main").hide();
        $(".search_box").show()
		$(".left_tool_open_m i.i3").attr("data-flag","true")
    })
    /*
     * 结束
     */
    
    /*
     * search_box 搜索框 联想
     */
    $(".search_box_t").on("keyup", function(){
    	if($(".search_box_t input[type='text']").val()==""){
            $(".search_box_m").hide()
			/* 判断进入搜索框的入口 (1. left_open、2. left_tool_open_m ul li i.i3)*/
            if($(".left_tool_open_m i.i3").attr("data-flag")=="false"){
                $(".ltab_main").show()
			}else{
                $(".ltab_main").hide()
			}
        }else{
    		$(".ltab_main").hide()
            $(".search_box_m").show().find("ul").empty()
            if($(".search_box_t input[type='text']").val()=="a"){
                $(".search_box_m ul").append("<li>东方号-搜索结果a</li>")
                $(".search_box_m ul").append("<li>东方号-搜索结果aa</li>")
                $(".search_box_m ul").append("<li>东方号-搜索结果abc</li>")
                $(".search_box_m ul").append("<li>东方号-搜索结果adda</li>")
            }else if($(".search_box_t input[type='text']").val()=="b"){
                $(".search_box_m ul").append("<li>东方号-搜索结果bb</li>")
                $(".search_box_m ul").append("<li>东方号-搜索结果cc</li>")
                $(".search_box_m ul").append("<li>东方号-搜索结果dd</li>")
                $(".search_box_m ul").append("<li>东方号-搜索结果ee</li>")
            }else {
                $(".search_box_m ul").append("<li>东方号-没有搜索结果</li>")
            }
		}

    });
    /*
     * 结束
     */

    /*
     * ltab_main_m 滚动条 开始
     */
    function Initial_scrollbar_size(){
        if($(".ltab_box").height()/$(".lfollow").height()<1){
            $(".ltab_box_scrollbar").show()
            $(".ltab_box_moving_scrollbar").height($(".ltab_box").height()/$(".lfollow").height()*$(".ltab_box").height())
            $(".lfollow").css({"top":($(".ltab_box").height()-$(".lfollow").height())*($(".ltab_box_moving_scrollbar").position().top)/($(".ltab_box").height()-$(".ltab_box").height()/$(".lfollow").height()*$(".ltab_box").height())})
        }else{
            $(".ltab_box_scrollbar").hide();}
        if(parseInt(($(".ltab_box_moving_scrollbar").css("top")))+parseInt(($(".ltab_box_moving_scrollbar").height()))>$(".ltab_box").height()){
            $(".ltab_box_moving_scrollbar").css({"top":$(".ltab_box").height()-$(".ltab_box_moving_scrollbar").height()})
            $(".lfollow").css("top",$(".ltab_box").height()-$(".lfollow").height())
        }
    }
    /*点击*/
    $(".ltab_box_moving_scrollbar").on("mousedown",function (e) {
        $("html").attr("onselectstart","return false")
        $(".ltab_box_moving_scrollbar").css("transition","none")
        var oldTop_scrollbar = parseInt(($(".ltab_box_moving_scrollbar").css("top")))
        e = e || window.event;
        document.onmousemove = function (event) {
            if(oldTop_scrollbar+event.clientY-e.clientY<0){
                $(".ltab_box_moving_scrollbar").css({"top":0})
                $(".lfollow").css({"top":0})
            }else if(oldTop_scrollbar+event.clientY-e.clientY>($(".ltab_box").height() - $(".ltab_box").height()/$(".lfollow").height()*$(".ltab_box").height())){
                $(".ltab_box_moving_scrollbar").css({"top":$(".ltab_box").height() - $(".ltab_box").height()/$(".lfollow").height()*$(".ltab_box").height()})
                $(".lfollow").css({"top":$(".ltab_box").height()-$(".lfollow").height()})
            }else{
                $(".ltab_box_moving_scrollbar").css({"top":oldTop_scrollbar+event.clientY-e.clientY})
                $(".lfollow").css({"top":($(".ltab_box").height()-$(".lfollow").height())*($(".ltab_box_moving_scrollbar").position().top)/($(".ltab_box").height()-$(".ltab_box").height()/$(".lfollow").height()*$(".ltab_box").height())})
            }
        }
        document.onmouseup = function(){
            document.onmousemove = null;
            document.onmouseup = null;
            $("html").attr("onselectstart","return true")
        }
    })
    $(".left_tool_open_m ul li i.i2").click(function () {
        Initial_scrollbar_size()
    })
    $(".ltab_main .ltab_main_t ul li").eq(1).click(function () {
        Initial_scrollbar_size()
    })
    $(".left_open").click(function () {
        Initial_scrollbar_size()
    })
    /*滑轮*/
    var scrollFunc = function (e) {
        var scroll_percent = 0.34;//每次滑轮滚动的百分比 34%
        var oldTop_scrollbar = parseInt(($(".ltab_box_moving_scrollbar").css("top")))
        var oldTop_lfollow = parseInt(($(".lfollow").css("top")))
        e = e || window.event;
        if (e.wheelDelta) {  /*判断浏览器IE，谷歌滑轮事件*/
            if (e.wheelDelta > 0) { /*当滑轮向上滚动时*/
                if($(".ltab_box").height()/$(".lfollow").height()<1){
                    if( parseInt(($(".ltab_box_moving_scrollbar").css("top"))) < ( $(".ltab_box").height()- $(".ltab_box").height()/$(".lfollow").height()*$(".ltab_box").height())*scroll_percent ){
                        $(".ltab_box_moving_scrollbar").css("top",0)
                        $(".lfollow").css("top",0)
                    }else{
                        $(".ltab_box_moving_scrollbar").css({"top":oldTop_scrollbar-(( $(".ltab_box").height()- $(".ltab_box").height()/$(".lfollow").height()*$(".ltab_box").height())*scroll_percent )})
                        $(".lfollow").css({"top":oldTop_lfollow-(($(".ltab_box").height()-$(".lfollow").height())*scroll_percent)})
                    }
                    if(parseInt(($(".ltab_box_moving_scrollbar").css("top")).slice(0,-2))<0){
                        $(".ltab_box_moving_scrollbar").css("top",0)
                        $(".lfollow").css("top",0)
                    }
                }else{
                    $(".lfollow").css("top",0)
                }
            }
            if (e.wheelDelta < 0) { /*当滑轮向下滚动时*/
                // console.log(parseInt(($(".ltab_box_moving_scrollbar").css("top"))))
                // console.log(parseInt(($(".lfollow").css("top"))))
                if($(".ltab_box").height()/$(".lfollow").height()<1){
                    if($(".ltab_box_moving_scrollbar").height()+parseInt(($(".ltab_box_moving_scrollbar").css("top")).slice(0,-2))<$(".ltab_box").height()) {
                        if( (parseInt($(".ltab_box_moving_scrollbar").css("top"))>(($(".ltab_box").height()-($(".ltab_box").height()/$(".lfollow").height()*$(".ltab_box").height()))*(1-scroll_percent)))){
                            $(".ltab_box_moving_scrollbar").css({"top":(($(".ltab_box").height()-$(".ltab_box").height()/$(".lfollow").height()*$(".ltab_box").height())),"transition":"top .15s linear"})
                            $(".lfollow").css({"top":($(".ltab_box").height()-($(".lfollow").height()))})
                        }else{
                            $(".ltab_box_moving_scrollbar").css({"top": oldTop_scrollbar + (($(".ltab_box").height()-($(".ltab_box").height()/$(".lfollow").height()*$(".ltab_box").height()))) * scroll_percent,"transition":"top .15s linear"})
                            $(".lfollow").css({"top":oldTop_lfollow+(($(".ltab_box").height()-$(".lfollow").height())*scroll_percent)})
                        }
                    }
                    if(parseInt(($(".ltab_box_moving_scrollbar").css("top")).slice(0,-2))>$(".ltab_box").height()-$(".ltab_box_moving_scrollbar").height()){
                        $(".ltab_box_moving_scrollbar").css("top",$(".ltab_box").height()-$(".ltab_box_moving_scrollbar").height())
                        $(".lfollow").css("top",$(".ltab_box").height()- $(".lfollow").height())
                    }
                }else{
                    $(".lfollow").css("top",0)

                }
            }
        } else if (e.detail) {  /*Firefox滑轮事件*/
            if (e.detail< 0) { /*当滑轮向上滚动时*/
                if($(".ltab_box").height()/$(".lfollow").height()<1){
                    if( parseInt(($(".ltab_box_moving_scrollbar").css("top"))) < ( $(".ltab_box").height()- $(".ltab_box").height()/$(".lfollow").height()*$(".ltab_box").height())*scroll_percent ){
                        $(".ltab_box_moving_scrollbar").css("top",0)
                        $(".lfollow").css("top",0)
                    }else{
                        $(".ltab_box_moving_scrollbar").css({"top":oldTop_scrollbar-(( $(".ltab_box").height()- $(".ltab_box").height()/$(".lfollow").height()*$(".ltab_box").height())*scroll_percent )})
                        $(".lfollow").css({"top":oldTop_lfollow-(($(".ltab_box").height()-$(".lfollow").height())*scroll_percent)})
                    }
                    if(parseInt(($(".ltab_box_moving_scrollbar").css("top")).slice(0,-2))<0){
                        $(".ltab_box_moving_scrollbar").css("top",0)
                        $(".lfollow").css("top",0)
                    }
                }else{
                    $(".lfollow").css("top",0)
                }
            }
            if (e.detail> 0) { /*当滑轮向下滚动时*/
                if($(".ltab_box").height()/$(".lfollow").height()<1){
                    if($(".ltab_box_moving_scrollbar").height()+parseInt(($(".ltab_box_moving_scrollbar").css("top")).slice(0,-2))<$(".ltab_box").height()) {
                        if( (parseInt($(".ltab_box_moving_scrollbar").css("top"))>(($(".ltab_box").height()-($(".ltab_box").height()/$(".lfollow").height()*$(".ltab_box").height()))*(1-scroll_percent)))){
                            $(".ltab_box_moving_scrollbar").css({"top":(($(".ltab_box").height()-$(".ltab_box").height()/$(".lfollow").height()*$(".ltab_box").height())),"transition":"top .15s linear"})
                            $(".lfollow").css({"top":($(".ltab_box").height()-($(".lfollow").height()))})
                        }else{
                            $(".ltab_box_moving_scrollbar").css({"top": oldTop_scrollbar + (($(".ltab_box").height()-($(".ltab_box").height()/$(".lfollow").height()*$(".ltab_box").height()))) * scroll_percent,"transition":"top .15s linear"})
                            $(".lfollow").css({"top":oldTop_lfollow+(($(".ltab_box").height()-$(".lfollow").height())*scroll_percent)})
                        }
                    }
                    if(parseInt(($(".ltab_box_moving_scrollbar").css("top")).slice(0,-2))>$(".ltab_box").height()-$(".ltab_box_moving_scrollbar").height()){
                        $(".ltab_box_moving_scrollbar").css("top",$(".ltab_box").height()-$(".ltab_box_moving_scrollbar").height())
                        $(".lfollow").css("top",$(".ltab_box").height()- $(".lfollow").height())
                    }
                }else{
                    $(".lfollow").css("top",0)

                }
            }
        }
    }
    /*给页面绑定滑轮滚动事件*/
    if (document.addEventListener) {//firefox
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    $(".ltab_box").on("mouseover",function () {
        window.onmousewheel = document.onmousewheel = scrollFunc;
        $(window).resize(function () {
            $(".ltab_box_moving_scrollbar").css("top",0)
            $(".lfollow").css("top",0)


        })
    })
    $(".ltab_box").on("mouseout",function () {
        window.onmousewheel = document.onmousewheel = null;
    })
    /*
     * 结束
     */
});