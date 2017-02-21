define(['jquery'],function($){
        var idx1 = 0
        var idx2 = 0
        return{
            next1:function(){
                this.iii=idx1;
                idx1++;
                if(idx1 == 4){
                    idx1 = 0
                }
                $('#div1').find("img").siblings().css("display","none")
                //console.log(111)
                //console.log(idx1)
                $($('#div1 img')[idx1]).css("display","block")
                $('#ul1').find('li').siblings().css("backgroundColor","black")
                $($('#ul1 li')[idx1]).css("backgroundColor","white")
            },
            prev1:function(){
                idx1--;
                if(idx1 == -1){
                    idx1 = 3
                }
                $('#div1').find("img").siblings().css("display","none")
                //console.log(111)
                //console.log(idx1)
                $($('#div1 img')[idx1]).css("display","block")
                $('#ul1').find('li').siblings().css("backgroundColor","black")
                $($('#ul1 li')[idx1]).css("backgroundColor","white")
            },
            idx1:function() {
                return idx1;
            },
            //idx1:return idx1,
            idx2:idx2,
            hover1:function(index){
                //console.log( index)

                //idx1 = $(this).index(this)
                idx1 = index
                $('#div1').find("img").siblings().css("display","none")
                //console.log(111)
                $($('#div1 img')[idx1]).css("display","block")
                $('#ul1').find('li').siblings().css("backgroundColor","black")
                $($('#ul1 li')[idx1]).css("backgroundColor","white")
                //console.log(idx1)
                //var that = this;

            }

        }
    }
)