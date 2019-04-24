$(function() {

var type = window.location.hash.substr(1);

console.log(type);



	if (type == 'delivery') {
		$('#faq_delivery').addClass('show');
		$('.delivery').removeClass('collapsed');
	};



	$('#btn_delivery').click(function() {
		$('#faq_delivery').addClass('show');
		$('.delivery').removeClass('collapsed');
	} );

});

