$(function () {
    //  start  gallery show by category
    $('.gallery_category').on('click', function () {
        if ($(this).hasClass('custom_active')) {
            return false;
        }
//        var display_category_body = $(this).attr('id');
//        display_category_body = display_category_body + "_gallery_body";
        $('.gallery_category').removeClass('custom_active');
        $(this).addClass('custom_active');
//        $(".category_body").fadeOut('slow', 'swing');
//        $('#' + display_category_body).fadeIn(1000, 'linear');
    });
    // end  gallery show by category

    // Instantiate MixItUp:

    $('#all_gallery_body').mixItUp();
});