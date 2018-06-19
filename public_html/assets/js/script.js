//gallery animation engine

var idNum //
function imgViewerOn(n) {
	idNum = n;
	$('.img-viewer').fadeIn(500).css('display','flex');
	$('#gal_' + idNum).css('display','block');
};

function imgViewerOff() {
	$('#gal_' + idNum).fadeOut(500);
	$('.img-viewer').fadeOut(500);
};

//map animation engine

$(document).ready(function() {
	$('.map').click(function() {
		$('.front-ground').fadeOut(1000);
	});
});