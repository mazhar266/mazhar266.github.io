// jquery dom ready
$(function() {
    // mobile menu starts
    $('.nav-trigger').click(function(e) {
        $('.nav').slideToggle();
        
        e.preventDefault();
    });
    // mobile menu ends
    
    // search starts
    // toggler
    $('.search-form-holder a').click(function(e) {
        $('.real-search').slideToggle();
        
        e.preventDefault();
    });
    
    // closer
    $('.close-search').click(function(e) {
        $('.real-search').slideUp();
        
        e.preventDefault();
    });
    // search ends
    
    // submenu starts here
    $('ul.sub-menu').parent().find('a').not('ul.sub-menu a').append('<span class="glyphicon glyphicon-chevron-down"></span>');
    $('ul.sub-menu').parent().find('a').not('ul.sub-menu a').addClass('sub-menu-sibling');
    
    $('.menu li').mouseenter (function (){
        var margin = ($(this).outerWidth () - $(this).find ('.sub-menu').outerWidth ()) / 2;
        $(this).find ('.sub-menu').css ('margin-left', parseInt (margin) + 'px');
                            
        $(this).find ('.sub-menu').slideDown ();
    });
  
    $('.menu li').mouseleave (function (){
        $(this).find ('.sub-menu').stop ().slideUp ();
    });
    // submenu ends here
    
    // backstretch slider starts here
    $('#mf-slider').backstretch([
        "images/slides/1.jpg",
        "images/slides/2.jpg",
        "images/slides/3.jpg"
      ], {duration: 3000, fade: 750});
    // backstretch slider ends here
});