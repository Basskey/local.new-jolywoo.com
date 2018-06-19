//gallery animation
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

//slider animation
$(document).ready(function(){
	$('.gallery-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		variableWidth: true,
	});
});

//map animation
$(document).ready(function() {
	$('.map').click(function() {
		$('.front-ground').fadeOut(1000);
	});
});

//scrolling animation
$(document).ready(function(){
	$('.go_to').click( function(){ //ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); //возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
		if ($(scroll_el).length != 0) { //проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); //анимируем скроллинг к элементу scroll_el
		}
		return false; //выключаем стандартное действие
	});
});