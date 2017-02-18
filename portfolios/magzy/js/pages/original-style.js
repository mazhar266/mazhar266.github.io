$(function () {
    //    initialize bx-slider
    $('.carousel_sidebar').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 320,
        slideMargin: 0,
        pager: false,
        controls: true,
        touchEnabled: true,
        autoStart: true,
        auto: true,
        pause: 5000,
        nextSelector: '#slider-next2',
        prevSelector: '#slider-prev2',
        nextText: '&leftarrow;',
        prevText: '&rightarrow;'
    });
    //    end initialize bx-slider

    //start message box
    $('.message_box_content_wrapper').on('click', '.msg_close_icon', function (e) {
        $(this).parent().parent().fadeOut(1000, 'swing');
    });
    //    end message box
});