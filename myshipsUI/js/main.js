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
	  $(".map_main .map_type").css("left","370px");
	  $(".map_main .copy").css("left","360px");
	  $(".map_main .map_tool").css("left","370px");
	  $(".ltab_box").mCustomScrollbar({
			  scrollInertia:150
	  });
	  $(".search_box2_m").mCustomScrollbar({
			  scrollInertia:150
	  });
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

	/*
	 * left_tool 关闭的时候 点击 船队、关注、搜索 按钮事件
	 */
    $(".left_tool_open_m ul li i").click(function () {
        $(".left_tool_open").hide();
        $(".left_tool").show();
        $(".map_main .scale").css("left","370px");
        $(".map_main .map_type").css("left","370px");
        $(".map_main .copy").css("left","360px");
        $(".map_main .map_tool").css("left","370px");
        $(".ltab_box").mCustomScrollbar({
            scrollInertia:150
        });
        $(".search_box2_m").mCustomScrollbar({
            scrollInertia:150
        });
    })
    $(".left_tool_open_m ul li i.i1").click(function (){
        $(".ltab_main").show();
        $(".search_box").hide()
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
     * search_box 搜索框 联想
     */
    $(".search_box_t").on("keyup", function(){
    	if($(".search_box_t input[type='text']").val()==""){
            $(".search_box_m").hide()
			/* 判断进入搜索框的入口 (1. left_open、2. ul li i.i3)*/
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

});