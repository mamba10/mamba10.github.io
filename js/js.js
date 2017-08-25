/*轮播图*/
$(function(){	
	//背景图换掉
	
	$('.banner ul li').each(function(index, element) {
        $(element).css({ background:'url(images/banner'+(index+1)+'.jpg) no-repeat center center'})
    });
	
	
	//自动播放
	var timer = null;
	var num =0;
	
	
	function autoplay(){	
		timer=setInterval(function(){
			right()	
		},1000)
	};
	autoplay()
	
	
	function right(){	
	
			num++;
			
			if(num>3){	
				num=0;
			}
			$('.banner ul').animate({left:-num*100+'%'})
	}
	function left(){	
			num--;
			
			if(num<0){	
				num=3;
			}
			$('.banner ul').stop().animate({left:-num*100+'%'})
	}
	
	//鼠标移上大的范围 all 停止自动播放
	//		鼠标移开继续播放
	$('.banner').hover(function(e) {
        clearInterval(timer);
    },function(){	
		clearInterval(timer);
		autoplay()
	});
	//左点击和右点击 
	$('.banner span:eq(0)').click(function(e) {
		left()
    });
	$('.banner span:eq(1)').click(function(e) {
			right()
    });
})


/*点击事件*/

$(function(){	
	$('.years').click(function() {
			$(this).css('background','#20a0ff').siblings().css('background','#fff')
			$(this).css('color','#fff').siblings().css('color','#666')
	});
})
