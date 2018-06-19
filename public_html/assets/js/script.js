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

//form
$("#form1, #form2").submit(function (e) {
        var formID = $(this).attr('id'),
            data = {
                project_title: 'Joly Woo (New)',
                lid: {
                    name: $(this).find('input[name="lid[name]"]').val(),
                    phone: $(this).find('input[name="lid[phone]"]').val(),
                    email: $(this).find('input[name="lid[email]"]').val()
                }
            };
        $.ajax({
            type: "POST",
            url: "http://conti.skyspace.club/lids.json",
            data: data,
            success: function (e) {
                $('#' + formID)[0].reset();
 
                var scroll_top = $(window).scrollTop();
                var doc_h = $(window).height();
                var pos_modal = (doc_h / 2) + scroll_top;
                event.preventDefault();
                $('.modal_overlay.send').addClass('active');
                $('.modal_overlay.send .modal_content').css({
                    'top': pos_modal
                });
 
                console.log("Ушла в конти")
            },
            error: function () {
                console.log("Не ушла в конти")
            }
        }), e.preventDefault()
    });

$(document).ready(function(){
    $('.head').css('height',$(window).height());
});