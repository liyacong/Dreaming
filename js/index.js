//轮播图
	    var index = 0;
		var timer = null;
 	$(".next").click(function(){
 		    index++;
 		    if(index>4){
 		    	index = 0;
 		    } 
 		    tables();

 	});
 	 	$(".prev").click(function(){	
 		    index--;
 		    if(index<0){
 		    	index = 4;
 		    } 
 		    tables();
 	});
 	
 	function tables(){
			$(".second-l li").eq(index).fadeIn().siblings().fadeOut();
 	}
		timer = setInterval(function(){
			index++;
 		    if(index>4){
 		    	index = 0;
 		    } 
			tables();
		},2000);




$(".demo").hover(function(){
	$(".bg").stop(true).animate({left:0},300)
	
},function(){
	$(".bg").stop(true).animate({left:200})
})


$(".bord").hover(function(){
				
				$(this).find(".top").stop(true).delay(300).animate({width:"200px"},300);
				$(this).find(".right").stop(true).animate({height:"250px"},300);
				$(this).find(".bottom").stop(true).delay(300).animate({width:"200px"},300);
				$(this).find(".left").stop(true).animate({height:"250px"},300);
				
			},function(){
			
				$(this).find(".top").stop(true).animate({width:"0px"},300);
				$(this).find(".right").stop(true).delay(300).animate({height:"0px"},300);
				$(this).find(".bottom").stop(true).animate({width:"0px"},300);
				$(this).find(".left").stop(true).delay(300).animate({height:"0px"},300);
			});
			

//瀑布流
//$(window).on("load",function(){
//	wallterFall();
//	
//})
//页面加载
$(document).ready(function(){
   wallterFall();
});

function wallterFall(){
	var $box = $(".box");
	var w = $box.eq(0).outerWidth();
	
	var cols=parseInt(1210/w); // ji列
	//console.log(cols);
//	$(".waterfull").width(w*cols).css("margin","20px auto");
 
    var hArr=[];
   //	遍历
	$box.each(function(index,value){
		// index索引  value对象
	//	console.log(value);
		var h = $box.eq(index).outerHeight();
		if(index<cols){
			hArr[index]=h;
		}else{
			var minH=Math.min.apply(null,hArr);  //从hArr中求前六张的最小值
			var minHIndex=$.inArray(minH,hArr);   //从hArr中寻找最小高度的索引
		  // console.log(value);
		 //console.log(minHIndex)
	
		  $(value).css({
		  	"position":"absolute",
		  	"top": minH+"px",
		  	"left": minHIndex*w+"px"
		  })
		  
		  hArr[minHIndex]+=$box.eq(index).outerHeight();
		
		}
	})
	//console.log(hArr)
}