jQuery( document ).ready(function() {
  // Handler for .ready() called.
	//wpcf7mailsent
	//document.addEventListener( 'wpcf7submit', function( event ) {
	document.addEventListener( 'wpcf7mailsent', function( event ) {    
	    if ( '3503' == event.detail.contactFormId ) {
	          console.log("form v1");
	          setTimeout(function(){
	          	jQuery(".modalForm").fadeOut(500);
	          },2000);
	    }
	    if ( '3507' == event.detail.contactFormId ) {
	          console.log("form v2");
	          setTimeout(function(){
	          	jQuery(".modalForm").fadeOut(500);
	          },2000);
	    }	    
	}, false );

	jQuery(".closeModal").click(function(){
		console.log("asd");
		jQuery(".modalForm").fadeOut(500);
	});

	jQuery(".banner-btn-ios-prox").click(function(){
		//showForm(3);
	});

	/*jQuery(".modalForm").click(function(){
		console.log("asd");
		jQuery(".modalForm").fadeOut(1000);
	});*/

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
		jQuery("#menu-menu-principal-1").append('<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-flyout rt-mega-menu-hover"><a href="/#sumate">Sumate</a></li>');
		jQuery(".modalFormClub .form-row-inter").eq(1).find('label').eq(0).html('Nombre Responsable <span>*</span>');
	}

	window.onload=function(){
		jQuery("#menu-menu-principal-1 .menu-item a").click(function(){
			setTimeout(function(){
				console.log("asd");
				jQuery(".mobile-menu-close").trigger('click');
			},100);		
		});		
	}

});

function showForm(n){
	if(n==1){
		console.log("asd");
		jQuery(".modalForm").hide();
		jQuery(".modalFormEntrenador").fadeIn(500);
	}else{
		if(n==2){
			console.log("asd2");
			jQuery(".modalForm").hide();
			jQuery(".modalFormClub").fadeIn(500);	
		}else{
			console.log("asd3");
			jQuery(".modalForm").hide();
			jQuery(".modalFormProximamente").fadeIn(500);	
		}
	
	}
}