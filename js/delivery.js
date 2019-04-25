$(function() {

var type = window.location.hash.substr(1);

console.log(type);



	if (type == 'delivery') {
		$('#faq_delivery').addClass('show');
		$('.delivery').removeClass('collapsed');
	};



	$('#btn_delivery').click(function() {
		console.log('Hello');
		$('#faq_delivery').addClass('show');
		$('.delivery').removeClass('collapsed');
	} );



	if (type == 'corporate') {
		$('#faq_corporate').addClass('show');
		$('.corporate').removeClass('collapsed');
	};

	if (type == 'sertificate') {
		$('#faq_sertificate').addClass('show');
		$('.sertificate').removeClass('collapsed');
	};

});

