// javascript document

$(function() {
    // do something
    
    // on scroll change the size of the header
    $(window).scroll(function() {
        var topp = $(window).scrollTop();
        if (topp > 10) {
            // make it small
            $('header').addClass('small');
        } else {
            // make it big
            $('header').removeClass('small');
        }
    });
    
    // collapse
    $('#collapser').click(function(e) {
        $(this).toggleClass('expander');
        $('.tabs-body').toggleClass('collapsed');
        
        e.preventDefault();
    });
    
    // sorting type effect
    $('.tabs-title li a').click(function(e) {
        $('.tabs-title li').removeClass('active');
        $(this).parent().addClass('active');
        
        if ($(this).data('target') == 'all') {
            $('.tabs-body .item').fadeIn();
        } else {
            $('.tabs-body .item').fadeOut();
            $('.tabs-body').find('.' + $(this).data('target')).fadeIn();
        }
        
        e.preventDefault();
    });
    
    // slider
    $('.slider .number a').click(function(e) {
        $('.slider .number a').removeClass('active');
        $('.slider .info li').removeClass('active');
        $('.slider .slides li').fadeOut();
        $('.slider .slides li:nth-child('+$(this).data('target')+')').fadeIn();
        $('.slider .info li:nth-child('+$(this).data('target')+')').addClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
});
