$('.carousel').carousel({
	interval: 3000
});

$(window).scroll(function() {
	var scroll = $(window).scrollTop();

	//>=, not <=
	if (scroll >= 400) {
		//clearHeader, not clearheader - caps H
		$('.centerCards').addClass('animated flipInY');
	}
}); //missing );
