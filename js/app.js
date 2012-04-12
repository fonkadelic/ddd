/* Author: Bernhard Loibl (bernhard.loibl@googlemail.com) */

(function ($, undefined) {
		
	var instagramXHR = $.ajax({
		type: 		"GET",
	    dataType: 	"jsonp",	
	   	cache: 		false,		
		url: 		"http://embedagram.com/e/plugin/24074487/", 	// 24074487 = Instagram-UserID
      	data: 		"thumb_width=300&limit=1"
    })
    .done(function(data) {
		var length = typeof data.html != 'undefined' ? data.html.length : 0;
		
		if (length > 0) {
			$(data.html).hide()
					   	.appendTo("#instagram")
					   	.fadeIn();
		}
    });

})(jQuery);


