$(document).ready(function(){

	$(".p1").hide();
	$(".p2").hide();
	$(".p3").hide();

	$(".btn1").click(function(){
		$(".p1").toggle();
		$(".btn1").css({"color":"blue", "text-decoration":"underline"});
		$(".p2").hide();
		$(".p3").hide();
		$(".btn2").css({"color":"", "text-decoration":"none"});
		$(".btn3").css({"color":"", "text-decoration":"none"});
		
	})

	$(".btn2").click(function(){
		$(".p2").toggle();
		$(".btn2").css({"color":"blue", "text-decoration":"underline"});
		$(".p1").hide();
		$(".p3").hide();
		$(".btn1").css({"color":"", "text-decoration":"none"});
		$(".btn3").css({"color":"", "text-decoration":"none"});
	})
	$(".btn3").click(function(){
		$(".p3").toggle();
		$(".btn3").css({"color":"blue", "text-decoration":"underline"});
		$(".p1").hide();
		$(".p2").hide();
		$(".btn2").css({"color":"", "text-decoration":"none"});
		$(".btn1").css({"color":"", "text-decoration":"none"});
	})


})


