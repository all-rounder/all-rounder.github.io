$(document).ready(function(){  
	var top_val = $('#menu li a').css('left');
	$('#menu li').hover(
		function () {
			$(this).children('a').stop().animate({left:0}, {easing: 'easeOutQuad', duration:300}).animate({backgroundPosition:'100% 0px'},{queue:false, duration:0, easing: 'linear'});
		},
		function () {
			$(this).children('a').stop().animate({left:top_val}, {easing: 'easeOutQuad', duration:50}).animate({backgroundPosition:'0px 0px'},0);
		}    
	);
	$("#slider").easySlider({
		auto: false, 
		continuous: false,
		numeric: true
	});
	$(".tab_content").hide();
	$(".tab_content:first").show();
	$("ul#menu li").click(function() {
		$(".tab_content").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});
	$("a.fancybox").fancybox({
		'titleShow'    : false,
		'transitionIn' : 'elastic',
		'transitionOut': 'elastic'
	});
	$('form#contactForm').submit(function() {
		$('form#contactForm .error').remove();
		var hasError = false;
		$('.requiredField').each(function() {
			if(jQuery.trim($(this).val()) == '') {
				var labelText = $(this).prev('label').text();
				$(this).parent().append('<span class="error"><img src="images/error.png" alt="Error"></span>');
				hasError = true;
			}	else if(jQuery.trim($(this).val()) == 'Name') {
				var labelText = $(this).prev('label').text();
				$(this).parent().append('<span class="error"><img src="images/error.png" alt="Error"></span>');
				hasError = true;
			}	else if(jQuery.trim($(this).val()) == 'Email') {
				var labelText = $(this).prev('label').text();
				$(this).parent().append('<span class="error"><img src="images/error.png" alt="Error"></span>');
				hasError = true;
			}	else if(jQuery.trim($(this).val()) == 'Message') {
				var labelText = $(this).prev('label').text();
				$(this).parent().append('<span class="error"><img src="images/error.png" alt="Error"></span>');
				hasError = true;
			} else if($(this).hasClass('email')) {
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				if(!emailReg.test(jQuery.trim($(this).val()))) {
					var labelText = $(this).prev('label').text();
					$(this).parent().append('<span class="error"><img src="images/error.png" alt="Error"></span>');
					hasError = true;
				}
			}
		});
		if(!hasError) {
			$('form#contactForm li input.submit').fadeOut('normal', function() {
				$(this).parent().append('<img src="js/loading.gif" alt="Loading" height="16" width="16" class="loading_image" />');
			});
			var formInput = $(this).serialize();
			$.post($(this).attr('action'),formInput, function(data){
				$('form#contactForm').slideUp("fast", function() {				   
					$(this).before('<div class="thanks"><h1>Thanks</h1><p>I received your message.<br />I will get back to you asap.</p></div>');
				});
			});
		}
		return false;
	});
});
