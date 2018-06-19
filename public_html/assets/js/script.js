//gallery engine
var idNum //
function imgViewerOn(n) {
	idNum = n;
	$('.img-viewer').css('display','flex');
	$("#gal_" + idNum).css('display','block');
};

function imgViewerOff() {
	$("#gal_" + idNum).css('display','none');
	$('.img-viewer').css('display','none');
};