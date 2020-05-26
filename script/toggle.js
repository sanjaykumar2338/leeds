


jQuery(document).ready(function(){
	jQuery('.div_one').click(function(){
	  jQuery('.div_one_main').addClass('display-none');
	  jQuery('.div_two_main').removeClass('display-none');
	  jQuery('.div_one_main').removeClass('show');
	});
	jQuery('.div_two').click(function(){
	  jQuery(this).addClass('display-none');
	  jQuery('.div_two_main').addClass('display-none');
	  jQuery('.div_three_main').removeClass('display-none');
	  jQuery('.div_two_main').removeClass('show');
	});
});
//  $('.back').click(function(){
//    $(this).parent().hide().prev().show();//hide parent and show previous
// });

