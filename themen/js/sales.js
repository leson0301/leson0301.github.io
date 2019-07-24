$(document).ready(function(e) {
    $('.has-sub').click(function(){
         $(this).toggleClass('tap');
     });
 });



//  filter

 


$(function() {
	
	// Filter
	$("li a[cs-filter]").click(function() {
		var t = $(this).attr('cs-filter');
		$("li a[cs-filter]").removeClass('btn-active');
		$(this).addClass('btn-active');
		if (t == "*") {
			$("div.items[cs-category]").show("fast");
		} else {
			$.each($("div.items[cs-category]"), function(index, value) {
				if (!$(this).attr('cs-category').match(new RegExp(t))) {
					$(this).hide("fast");
				} else {
					$(this).show("fast");
				}
			});
		}
  });
});