$(function(){
    //���X�ر�
    $('#J_event svg').on('click',function(){
        $('#J_event').css('display','none')
    })
    //��ַ
    $('#dizhi').hover(function(){
        $(this).find('div').show()
        $(this).css({
            background:'white',
            borderLeft:'1px solid #999',
            borderRight:'1px solid #999'
        })
    },function(){
        $(this).find('div').hide()
        $(this).css({
            background:'none',
            borderLeft:'1px solid #e3e4e5',
            borderRight:'1px solid #e3e4e5'
        })
    }).find('div ul li').on('click',function(e){
        $(this).find('a').addClass('selected').end().siblings().find('a').removeClass('selected')
        e.preventDefault()
        //console.log($(this).find('a'))
        $('#dizhi > a').text($(this).find('a').text())
        //console.log($(this).find('a').text())
    })
    //�ҵľ���
    $('#my-jingdong').hover(function(){
        $('#my-jingdong > div').show()
        $(this).css({
            background:'white',
            borderLeft:'1px solid #999',
            borderRight:'1px solid #999'
        })
    },function(){
        $('#my-jingdong > div').hide()
        $(this).css({
            background:'#e3e4e5',
            borderLeft:'1px solid #e3e4e5',
            borderRight:'1px solid #e3e4e5'
        })
    })
    //�ͷ�
    $('#my-kefu').hover(function(){
        $('#my-kefu > div').show()
        $(this).css({
            background:'white',
            borderLeft:'1px solid #999',
            borderRight:'1px solid #999'
        })
    },function(){
        $('#my-kefu > div').hide()
        $(this).css({
            background:'#e3e4e5',
            borderLeft:'1px solid #e3e4e5',
            borderRight:'1px solid #e3e4e5'
        })
    })
    //��վ����
    $('#wangzhan-nav').hover(function(){
        $('#wangzhan-nav > div').show()
        $(this).css({
            background:'white',
            borderLeft:'1px solid #999',
            borderRight:'1px solid #999'
        })
    },function(){
        $('#wangzhan-nav > div').hide()
        $(this).css({
            background:'#e3e4e5',
            borderLeft:'1px solid #e3e4e5',
            borderRight:'1px solid #e3e4e5'
        })
    })



});