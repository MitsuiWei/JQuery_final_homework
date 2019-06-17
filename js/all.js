jQuery(document).ready(function($) {
	$('.dropdown').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(this).find('.drop').slideToggle();
        $(this).siblings().find('.drop').slideUp();
        $(this).find('a').toggleClass('active');
	});
   /*以上是menu設定*/

   $('.top').click(function(event) {
	  event.preventDefault();
	  $('html,body').animate({
	    scrollTop: 0
	  }, 1000);
	 });

   /*以上是top按鈕設定*/

	var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:true,
    delay:1000,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

	/*以上是swiper設定*/

	lightbox.option({
        'resizeDuration': 500,
        'wrapAround': true,
        
      });

	/*以上是lightbox設定*/

	

});