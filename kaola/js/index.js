$(document).ready(function(){
	/*鼠标移动过th时th样式的改变*/
	$(".tabChange th").mouseover(function(){
		$(this).addClass("active");
		$(".tabChange th").not(this).removeClass("active");
	});
	/*鼠标移动过th时，下面产品信息改变*/
	$(".tab1").mouseover(function(){
		$(".contentArea-1").css("display","block");
		$(".contentArea-2").css("display","none");
		$(".contentArea-3").css("display","none");
		$(".contentArea-4").css("display","none");
		$(".contentArea-5").css("display","none");
	});
	$(".tab2").mouseover(function(){
		$(".contentArea-2").css("display","block");
		$(".contentArea-1").css("display","none");
		$(".contentArea-3").css("display","none");
		$(".contentArea-4").css("display","none");
		$(".contentArea-5").css("display","none");
	});
	$(".tab3").mouseover(function(){
		$(".contentArea-3").css("display","block");
		$(".contentArea-1").css("display","none");
		$(".contentArea-2").css("display","none");
		$(".contentArea-4").css("display","none");
		$(".contentArea-5").css("display","none");
	});
	$(".tab4").mouseover(function(){
		$(".contentArea-4").css("display","block");
		$(".contentArea-1").css("display","none");
		$(".contentArea-2").css("display","none");
		$(".contentArea-3").css("display","none");
		$(".contentArea-5").css("display","none");
	});
	$(".tab5").mouseover(function(){
		$(".contentArea-5").css("display","block");
		$(".contentArea-1").css("display","none");
		$(".contentArea-3").css("display","none");
		$(".contentArea-4").css("display","none");
		$(".contentArea-2").css("display","none");
	});
	/*footer处的app*/
	$(".icon-5").mouseover(function(){
		$(".m-notice-1").css("display","block");
	});
	$(".icon-5").mouseout(function(){
		$(".m-notice-1").css("display","none");
	});
	$(".icon-6").mouseover(function(){
		$(".m-notice-2").css("display","block");
	});
	$(".icon-6").mouseout(function(){
		$(".m-notice-2").css("display","none");
	});
	$(".icon-7").mouseover(function(){
		$(".m-notice-3").css("display","block");
	});
	$(".icon-7").mouseout(function(){
		$(".m-notice-3").css("display","none");
	});
	/*navTop处的app*/
	$(".app").mouseover(function(){
		$(".m-notice-4").css("display","block");
		$(".app").mouseout(function(){
			$(".m-notice-4").css("display","none");
		});
	});
	$(".xinlang-app").mouseenter(function(){
		$(".m-notice-5").css("display","block");
	});
	$(".xinlang-app").mouseleave(function(){
		$(".m-notice-5").css("display","none");
	});
	$(".weixin-app").mouseenter(function(){
		$(".m-notice-6").css("display","block");
	});
	$(".weixin-app").mouseleave(function(){
		$(".m-notice-6").css("display","none");
	});
	$(".yixin-app").mouseenter(function(){
		$(".m-notice-7").css("display","block");
	});
	$(".yixin-app").mouseleave(function(){
		$(".m-notice-7").css("display","none");
	});
	
	/*navTopRight*/
	$(".topNavRight-3").mouseover(function(){
		$(this).css("background","#fff");
		$(".dropMenuOne").css({"border":"1px solid #e8e8ea",
								"display":"block"});
		$(".topNavRight-3 .sep").css("color","#fff");
		$(".topNavRight-2 .sep").css("color","#fff");
		$(".topNavRight-3 .arr").css("background","url(images/up.jpg) no-repeat");
	});
	$(".topNavRight-3").mouseout(function(){
		$(this).css("background","rgb(242,242,242)");
		$(".dropMenuOne").css("display","none");
		$(".topNavRight-3 .sep").css("color","#ccc");
		$(".topNavRight-2 .sep").css("color","#ccc");
		$(".topNavRight-3 .arr").css("background","url(images/down.png) no-repeat");
	});
	$(".topNavRight-4").mouseover(function(){
		$(this).css("background","#fff");
		$(".dropMenuTwo").css({"border":"1px solid #e8e8ea",
								"display":"block"});
		$(".topNavRight-4 .sep").css("color","#fff");
		$(".topNavRight-3 .sep").css("color","#fff");
		$(".topNavRight-4 .arr").css("background","url(images/up.jpg) no-repeat");
	});
	$(".topNavRight-4").mouseout(function(){
		$(this).css("background","rgb(242,242,242)");
		$(".dropMenuTwo").css("display","none");
		$(".topNavRight-4 .sep").css("color","#ccc");
		$(".topNavRight-3 .sep").css("color","#ccc");
		$(".topNavRight-4 .arr").css("background","url(images/down.png) no-repeat");
	});
	$(".topNavRight-7").mouseenter(function(){
		$(this).css("background","#fff");
		$(".dropMenuThree").css({"border":"1px solid #e8e8ea",
								"display":"block",
								"left":"-80px"		
		});
		$(".topNavRight-7 .sep").css("color","#fff");
		$(".topNavRight-6 .sep").css("color","#fff");
		$(".topNavRight-7 .arr").css("background","url(images/up.jpg) no-repeat");
	});
	$(".topNavRight-7").mouseleave(function(){
		$(this).css("background","rgb(242,242,242)");
		$(".dropMenuThree").css({"display":"none"
								
	});
		$(".topNavRight-7 .sep").css("color","#ccc");
		$(".topNavRight-6 .sep").css("color","#ccc");
		$(".topNavRight-7 .arr").css("background","url(images/down.png) no-repeat");
	});
	/*所有分类的展开*/
	$(".allClass").mouseenter(function(){
		$(".dropMenu4").css("display","block");
	});
	$(".allClass").mouseleave(function(){
		$(".dropMenu4").css("display","none");
	});
	$(".dropMenu4 li a").mouseenter(function(){
		$(this).addClass("hover");
	});
	$(".dropMenu4 li a").mouseleave(function(){
		$(this).removeClass("hover");
	});
	/*所有分类的二级菜单的展开*/
	$(".secondmenu-1").mouseenter(function(){
		$(".secondMenu-1").css("display","block");
	});
	$(".secondmenu-1").mouseleave(function(){
		$(".secondMenu-1").css("display","none");
	});
	$(".secondMenu-1").mouseenter(function(){
		$(this).css("display","block");
		$(".dropMenu4").css("display","block");
	});
	$(".secondMenu-1").mouseleave(function(){
		$(this).css("display","none");
		$(".dropMenu4").css("display","none");
	});
	$(".secondmenu-2").mouseenter(function(){
		$(".secondMenu-2").css("display","block");
	});
	$(".secondmenu-2").mouseleave(function(){
		$(".secondMenu-2").css("display","none");
	});
	$(".secondMenu-2").mouseenter(function(){
		$(this).css("display","block");
		$(".dropMenu4").css("display","block");
	});
	$(".secondMenu-2").mouseleave(function(){
		$(this).css("display","none");
		$(".dropMenu4").css("display","none");
	});
	$(".secondmenu-3").mouseenter(function(){
		$(".secondMenu-3").css("display","block");
	});
	$(".secondmenu-3").mouseleave(function(){
		$(".secondMenu-3").css("display","none");
	});
	$(".secondMenu-3").mouseenter(function(){
		$(this).css("display","block");
		$(".dropMenu4").css("display","block");
	});
	$(".secondMenu-3").mouseleave(function(){
		$(this).css("display","none");
		$(".dropMenu4").css("display","none");
	});
	$(".secondmenu-4").mouseenter(function(){
		$(".secondMenu-4").css("display","block");
	});
	$(".secondmenu-4").mouseleave(function(){
		$(".secondMenu-4").css("display","none");
	});
	$(".secondMenu-4").mouseenter(function(){
		$(this).css("display","block");
		$(".dropMenu4").css("display","block");
	});
	$(".secondMenu-4").mouseleave(function(){
		$(this).css("display","none");
		$(".dropMenu4").css("display","none");
	});
	$(".secondmenu-5").mouseenter(function(){
		$(".secondMenu-5").css("display","block");
	});
	$(".secondmenu-5").mouseleave(function(){
		$(".secondMenu-5").css("display","none");
	});
	$(".secondMenu-5").mouseenter(function(){
		$(this).css("display","block");
		$(".dropMenu4").css("display","block");
	});
	$(".secondMenu-5").mouseleave(function(){
		$(this).css("display","none");
		$(".dropMenu4").css("display","none");
	});
	$(".secondmenu-6").mouseenter(function(){
		$(".secondMenu-6").css("display","block");
	});
	$(".secondmenu-6").mouseleave(function(){
		$(".secondMenu-6").css("display","none");
	});
	$(".secondMenu-6").mouseenter(function(){
		$(this).css("display","block");
		$(".dropMenu4").css("display","block");
	});
	$(".secondMenu-6").mouseleave(function(){
		$(this).css("display","none");
		$(".dropMenu4").css("display","none");
	});
	$(".secondmenu-7").mouseenter(function(){
		$(".secondMenu-7").css("display","block");
	});
	$(".secondmenu-7").mouseleave(function(){
		$(".secondMenu-7").css("display","none");
	});
	$(".secondMenu-7").mouseenter(function(){
		$(this).css("display","block");
		$(".dropMenu4").css("display","block");
	});
	$(".secondMenu-7").mouseleave(function(){
		$(this).css("display","none");
		$(".dropMenu4").css("display","none");
	});
	$(".secondmenu-8").mouseenter(function(){
		$(".secondMenu-8").css("display","block");
	});
	$(".secondmenu-8").mouseleave(function(){
		$(".secondMenu-8").css("display","none");
	});
	$(".secondMenu-8").mouseenter(function(){
		$(this).css("display","block");
		$(".dropMenu4").css("display","block");
	});
	$(".secondMenu-8").mouseleave(function(){
		$(this).css("display","none");
		$(".dropMenu4").css("display","none");
	});
	$(".secondmenu-9").mouseenter(function(){
		$(".secondMenu-9").css("display","block");
	});
	$(".secondmenu-9").mouseleave(function(){
		$(".secondMenu-9").css("display","none");
	});
	$(".secondMenu-9").mouseenter(function(){
		$(this).css("display","block");
		$(".dropMenu4").css("display","block");
	});
	$(".secondMenu-9").mouseleave(function(){
		$(this).css("display","none");
		$(".dropMenu4").css("display","none");
	});
	$(".secondmenu-10").mouseenter(function(){
		$(".secondMenu-10").css("display","block");
	});
	$(".secondmenu-10").mouseleave(function(){
		$(".secondMenu-10").css("display","none");
	});
	$(".secondMenu-10").mouseenter(function(){
		$(this).css("display","block");
		$(".dropMenu4").css("display","block");
	});
	$(".secondMenu-10").mouseleave(function(){
		$(this).css("display","none");
		$(".dropMenu4").css("display","none");
	});
	
	var es = document.forms[0].elements;
es[1].onclick = function(){
  clearInputFile(es[0]);
};
var submit=$(".formSubmit")
submit.after(submit.clone().val(""));
submit.remove();
});

