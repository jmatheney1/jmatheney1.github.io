$(Document).ready	
$(function(){
        $('section > div').hover(function(){
            
            $(this).addClass('openSesame');
        
        }, function(){
            
            $(this).removeClass('openSesame');
            
        });

	})