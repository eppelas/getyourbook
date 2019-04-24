$(function() {

var type = window.location.hash.substr(1);

console.log(type);



	if (type == 'delivery') {
		$('#faq_delivery').addClass('show');
		$('.delivery').removeClass('collapsed');
	};



	$('#btn_delivery').click(function() {
<<<<<<< HEAD
		console.log('Hello');
=======
>>>>>>> 18b26f7f04f57516388a34567cb0674b5cb84e4c
		$('#faq_delivery').addClass('show');
		$('.delivery').removeClass('collapsed');
	} );

});

