$(document).ready(function(){
	var currentPosition = 0;
	var slideWidth = 560;
	var slides = $('.slide');
	var numberOfSlides = slides.length;
	// Убираем прокрутку
	$('#slidesContainer').css('overflow', 'hidden');
	// Вставляем все .slides в блок #slideInner
	slides
	.wrapAll('<div id="slideInner"></div>')
	// Float left to display horizontally, readjust .slides width
	.css({
		'float' : 'left',
		'width' : slideWidth
	});
	// Устанавливаем ширину #slideInner, равную ширине всех слайдов
	$('#slideInner').css('width', slideWidth * numberOfSlides);
	// Прячем правую стрелку при загрузке скрипта
	manageControls(currentPosition);
	// Отлавливаем клик на класс .controls
	$('.control')
		.bind('click', function(){
	  		// Определение новой позиции
			currentPosition = ($(this).attr('id')=='rightControl') ? currentPosition+1 : currentPosition-1;
			// Прячет / показывает элементы контроля
			manageControls(currentPosition);
			// Move slideInner using margin-left
			$('#slideInner').animate({
				'marginLeft' : slideWidth*(-currentPosition)
			});
		});

  // Автопрокрутка, если не нужна, то просто удалите код ниже
	var mycolslide = 1;
	setInterval(function(){
		if (mycolslide < 3) { //здесь указываем количество слайдов, которые есть у нас
			currentPosition = currentPosition+1;
			mycolslide = mycolslide + 1;
		} else {
			currentPosition = 0;
			mycolslide = 1;
		}
		// Прячет / показывает элементы контроля
		manageControls(currentPosition);
		// Move slideInner using margin-left
		$('#slideInner').animate({
			'marginLeft' : slideWidth*(-currentPosition)
		});
	},2500)// каждые 2 секунды будет меняться слайд
  // Конец автопрокрутки

	// manageControls: показывает или скрывает стрелки в зависимости от значения currentPosition
	function manageControls(position){
	  // Спрятать левую стрелку, если это левый слайд
		if(position==0){ $('#leftControl').hide() }
		else{ $('#leftControl').show() }
	  // Спрятать правую стрелку, если это последний слайд
		if(position==numberOfSlides-1){ $('#rightControl').hide() }
		else{ $('#rightControl').show() }
		}










	let timer = document.querySelector(".order__timer");
	var countDownTimer = 30 * 60;
	var x = setInterval(function() {
		countDownTimer--;
		var minutes = Math.floor((countDownTimer % (60 * 60)) / 60);
		var seconds = Math.floor(countDownTimer % 60);
		timer.innerHTML = "Успей купить " + minutes + ":" + seconds;
		if (countDownTimer <= 0) {
			clearInterval(x);
			timer.innerHTML = "Время вышло";
		}
	}, 1000);




	let orderInput = document.querySelector(".order__input-tel").addEventListener('input', restrictToInteger);
	function restrictToInteger() {
		this.value = this.value.replace(/[^0-9]/g, '');
	}


	







	$(function(){
		$("#button a[href^='#']").click(function(){
			var _href = $(this).attr("href");
			$("html, body").animate({scrollTop: $(_href).offset().top});
			return false;
		});
	});

});
