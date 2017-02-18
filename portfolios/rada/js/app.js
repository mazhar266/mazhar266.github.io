$(function() {
    $(document).foundation();
    
    $('footer').width($('.main-body').outerWidth());
    
    $( window ).resize(function() {
        $('footer').width($('.main-body').outerWidth());
    });
});
