$(document).ready(function(){
	$(".modal").hide();
	$(".launch").click(function(){
		$(".modal").show();
		$("body").css("background-color","grey");
	})
	$(".close").click(function(){
		$(".modal").hide();
		$("body").css("background-color","");
	})
})
