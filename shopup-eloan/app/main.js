$(function() {
    // recommendation slider
    $('.recommendations .slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // recommendation slider
    // $('.mobile-steps .slider').slick({
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // });
    

    // select2
    // $('#sell-selector').select2({
    //     width: '443px',
    //     minimumResultsForSearch: -1
    // });

    // expandables
    $('.inner-expandable li').click(function(e) {
        $(this).toggleClass('expanded');
        e.preventDefault();
    });

    $('.collapable .head').click(function(e) {
        $(this).parent().toggleClass('expanded');
        e.preventDefault();
    });
    
});
