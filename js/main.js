jQuery(document).ready(function($) {
	let tf = true;
	let switchIntervalGo;
	let sliderTimeSwitch = function(){
		let idSlide = $('.main__slide').find('.current__slide').attr('data-id');
		$('.other__slide ').find('.paragraph__other__slide p').removeClass('active__paragraph__other__slide');

		if (idSlide == $('.main__slide img').length ) {
			tf=false;
		}else if (idSlide == 1) {
			tf=true;
		}

		if (tf) {
			idSlide++;
		}else{
			idSlide--;
		}
		$('.main__slide img').removeClass('opa');
		$('.other__slide img[data-id="'+idSlide+'"]').parent().parent().find('.paragraph__other__slide p').addClass('active__paragraph__other__slide');
		$('.main__slide').find('.current__slide').addClass('opda').removeClass('current__slide');
		$('.main__slide img[data-id="'+idSlide+'"]').removeClass('opda').addClass('current__slide opa');
		$('.name__about__this__slide').text($('.active__paragraph__other__slide').text());
	};
	switchIntervalGo = setInterval(sliderTimeSwitch,12000);

	$('.other__slide').click(function(){
		clearInterval(switchIntervalGo);
		let id = $(this).find('.img__other__slide img').attr('data-id');
		$('.paragraph__other__slide p').removeClass('active__paragraph__other__slide');
		$('.main__slide img').removeClass('opa');
		$(this).find('.paragraph__other__slide p').addClass('active__paragraph__other__slide');
		$('.main__slide img').find('.current__slide').addClass('opda').removeClass('current__slide');
		$('.main__slide img[data-id="'+id+'"]').addClass('current__slide opa').removeClass('opda');
		$('.name__about__this__slide').text($('.active__paragraph__other__slide').text());
		switchIntervalGo = setInterval(sliderTimeSwitch,12000);
	});
});