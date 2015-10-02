/*
Description: PWA2 - Week Two - Project two
Author: Sarah R. Greenhill - 770562
Date: August 14, 2015
*/



$(document).ready(function() {
	/*Tool Tips*/
	$('.masterTooltip').hover(function(){
		console.log("test");
		var title = $(this).attr('title');
		$(this).data('tipText' , title).removeAttr('title');
		$('<p class="tooltip"></p>')
		.text(title)
		.appendTo('body')
		.fadeIn('slow');	
	}, function() {
		
		$(this).attr('title' , $(this).data('tipText'));
		$('tooltip').remove();	//Removes the tooltip
		
	}).mousemove(function(event){
		
		var mousex = event.pageX + 20; //Gets the coords of x
		var mousey = event.pageY + 10; //Gets the coords of y
			$('tooltip')
			.css({top: mousey , left: mousex})		
		
	});


	/* Modal */ 
	
	$('.modalClick').on('click' , function(event){
		event.preventDefault();
		$('#overlay')
			.fadeIn()
			.find('#modal')
			.fadeIn();
	
	});
	
	$('.close').on('click' , function(event){
		event.preventDefault();
		$('#overlay')
		.fadeOut()
		.find('#modal')
		.fadeOut();
	});
			
	/* Nav */
	
	$('nav li ul').hide().removeClass('fallback');
	$('nav li').hover(function (){
    	$('ul', this).stop().slideDown(100);
	},
  
	function (){
    	$('ul', this).stop().slideUp(100);
  }
);

}); /* close ready function */

