//please contact me giaiphapthuonghieu.org@gmail.com
//website http://giaiphapthuonghieu.vn or http://faceseo.vn

(function($) {
    $.fn.linhnguyen = function(options) {        
        var defaults = {  
	    	animation: 'fadeAndPop', //fade, fadeAndPop, none
		    animationspeed: 300, //how fast animtions are
		    closeonbackgroundclick: true, //if you click background will modal close?
		    dismissmodalclass: 'close-linhnguyen-modal' //the class of a button or element that will close an open modal
    	}; 

        var options = $.extend({}, defaults, options); 
	
        return this.each(function() {
        	var modal = $(this),
        		topMeasure  = parseInt(modal.css('top')),
				topOffset = modal.height() + topMeasure,
          		locked = false,
				modalBG = $('.linhnguyen-modal-bg');

			if(modalBG.length == 0) {
				modalBG = $('<div class="linhnguyen-modal-bg" />').insertAfter(modal);
			}		    
			modal.bind('linhnguyen:open', function () {
			  modalBG.unbind('click.modalEvent');
				$('.' + options.dismissmodalclass).unbind('click.modalEvent');
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modal.css({'top': $(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"top": $(document).scrollTop()+topMeasure + 'px',
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					}
					if(options.animation == "fade") {
						modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': $(document).scrollTop()+topMeasure});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					} 
					if(options.animation == "none") {
						modal.css({'visibility' : 'visible', 'top':$(document).scrollTop()+topMeasure});
						modalBG.css({"display":"block"});	
						unlockModal()				
					}
				}
				modal.unbind('linhnguyen:open');
			}); 	

			modal.bind('linhnguyen:close', function () {
			  if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"top":  $(document).scrollTop()-topOffset + 'px',
							"opacity" : 0
						}, options.animationspeed/2, function() {
							modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
							unlockModal();
						});					
					}  	
					if(options.animation == "fade") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"opacity" : 0
						}, options.animationspeed, function() {
							modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
							unlockModal();
						});					
					}  	
					if(options.animation == "none") {
						modal.css({'visibility' : 'hidden', 'top' : topMeasure});
						modalBG.css({'display' : 'none'});	
					}		
				}
				modal.unbind('linhnguyen:close');
			});     
   	
    	modal.trigger('linhnguyen:open')
			
			//Close Modal Listeners
			var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
			  modal.trigger('linhnguyen:close')
			});
			
			if(options.closeonbackgroundclick) {
				modalBG.css({"cursor":"pointer"})
				modalBG.bind('click.modalEvent', function () {
				  modal.trigger('linhnguyen:close')
				});
			}
			$('body').keyup(function(e) {
        		if(e.which===27){ modal.trigger('linhnguyen:close'); } // 27 is the keycode for the Escape key
			});
			
			function unlockModal() { 
				locked = false;
			}
			function lockModal() {
				locked = true;
			}	
			
        });//each call
    }//orbit plugin call
})(jQuery);
        
$(window).load(function() {
		if(document.cookie.indexOf("adf") == -1)
		{
			document.cookie = "adfpopunder1=adf";
			var divpopup = document.createElement("div");
			$(divpopup).attr('id', 'myModal');
			$(divpopup).attr('class', 'linhnguyen-modal');
			$( "body" ).append(divpopup);
			$("#myModal").html("<a href='http://skyvillas-regentphuquoc.com/' target='_blank'><img src='http://faceseo.vn/bannerweb/hoc-seo-chuyen-sau.jpg' width='500px'/><br/><div role="form" class="wpcf7" id="wpcf7-f36-p34-o1" lang="en-US" dir="ltr">
<div class="screen-reader-response"></div>
<form action="/#wpcf7-f36-p34-o1" method="post" class="wpcf7-form" novalidate="novalidate">
<div style="display: none;">
<input type="hidden" name="_wpcf7" value="36">
<input type="hidden" name="_wpcf7_version" value="5.0.2">
<input type="hidden" name="_wpcf7_locale" value="en_US">
<input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f36-p34-o1">
<input type="hidden" name="_wpcf7_container_post" value="34">
<input type="hidden" name="_post_id" value="34">
</div>
<div class="slider-form">
<div class="header">
<h1>Tham khảo dự án và giá bán ngay!</h1>
</div>
<hr>
<p><label>Tên quý khách*</label><span class="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false"></span></p>
<p><label>Email</label><span class="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email" aria-invalid="false"></span></p>
<p><label>Số điện thoại*</label><span class="wpcf7-form-control-wrap phone"><input type="tel" name="phone" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel" aria-required="true" aria-invalid="false"></span></p>
<p><input type="submit" value="Nhận bảng giá &amp; cập nhật sản phẩm!" class="wpcf7-form-control wpcf7-submit"><span class="ajax-loader"></span></p>
<div class="figure">*Thông tin cần nhập</div>
</div>
<div class="wpcf7-response-output wpcf7-display-none"></div></form></div></a>. Học tại nhà CEO Faceseo. <h2><a class='close-linhnguyen-modal'>X</a></h2>");
			$('#myModal').linhnguyen($('#myModal').data());
		}
});
