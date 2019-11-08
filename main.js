$(document).ready(function() {
    var width = $('.slider').width();
    var slide_container = $('.slider').find('.slides');
    var slides = slide_container.find('.slide');
    var currentSlide = 1;
    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $('.slides').animate({
                'margin-left': -720
            }, 1000, function() {
                currentSlide++;
                if (currentSlide === slides.length) {
                    currentSlide = 1;
                    $('.slides').css('margin-left', 0)
                }

            })
        }, 2000)
    }

    function stopSlider() {
        clearInterval(interval);
    }
    $('.slides').on('mouseenter', stopSlider).on('mouseleave', startSlider);
    startSlider();
});