$(document).ready(function(){
	$(".dropdown-items").hide();
	$(".menuButton").hide();	
	
	$(".dbutton").click(function(){
		$(".dropdown-items").toggle();
	})
	$(window).resize(()=> {

	if($(this).width() < 600){
		$(".hideItem").hide();
		$(".menuButton").show();
		
	}
	else{
		$(".hideItem").show();
		$(".menuButton").hide();
		
	}
	})
	$(".menuButton").click(function(){
		$(".hideItem").toggle();
		
		
	})
	
			
})