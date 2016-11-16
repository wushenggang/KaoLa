$(document).ready(function(){
	var slideShow=$(".slideShow"),
	ul=slideShow.find("ul"),
	nav=slideShow.find(".nav span"),
	oneWidth=ul.find("li").eq(0).width(),
	pre=$(".pre"),
	next=$(".next"),
 	timer=null,
	iNow=0;

	slideShow.hover(function(){
		/*clearInterval(timer);*/
		pre.css("display","block");
		next.css("display","block");
	},function(){
		/*autoPlay();*/
		pre.css("display","none");
		next.css("display","none");
	});
	pre.on("click",function(){
		if(iNow==0)
			iNow=6;
		else iNow--;
		ani();
	});
	next.on("click",function(){
		if(iNow>=nav.length-1)
			iNow=0;
		else iNow++;
		ani();
	});

	function ani(){
		nav.eq(iNow).trigger("click");
	}
    

    nav.on("click",function(){
    	var me=$(this),
    	index=me.index();
    	iNow=index;
    	console.log(iNow);
    	ul.animate({"left":-oneWidth*iNow});
    	me.css("background","red").siblings().css("background","#ffffff");
    });
    ani();
    autoPlay();
    function autoPlay()
    {
    timer=setInterval(function(){
    	if(iNow>nav.length-1)
    		iNow=0;
    	else iNow++;
    	nav.eq(iNow).trigger("click");
    },2000);
}


});