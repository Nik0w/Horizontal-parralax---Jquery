$('#wrapper').find('div').each(function(){
	if($(this).attr('data-zwig'))
	{
		if(scrollLeft > 0){
			var ratio = $(this).attr('data-zwig');
	    	//$(this).css({transform: 'translateX(-'+ Math.floor(scrollLeft * ratio) +'px)'});
	    	
	    	$(this).css({'transform': 'translate3d(-'+ Math.floor(scrollLeft * ratio) +'px,0,0)'});
		}
		else{
			$(this).css({'transform': 'translate3d(0,0,0)'});
		}
	}
});
