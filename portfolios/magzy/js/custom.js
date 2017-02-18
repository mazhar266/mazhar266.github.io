$(function () {
    $(document).foundation();

    // start footer masonry gallery
    var footer_masonrygallery = $('.footer_masonrygallery');
    // initialize
    footer_masonrygallery.masonry({
//        columnWidth: 154,
        itemSelector: '.item',
        "isFitWidth": true
        // "percentPosition": true
    });
    // end footer masonry gallery

    //submit button
    var submitIcon = $('.sb-icon-search');
    var submitInput = $('.sb-search-input');
    var searchBox = $('.sb-search');
    var isOpen = false;


    submitIcon.click(function () {
        if (isOpen == false) {
            $('.sb-search').animate({
                width: "250px"
            }, {
                queue: false,
                duration: 450
            });
            //searchBox.addClass('sb-search-open');
            isOpen = true;
        } else {
            $('.sb-search').animate({
                width: "0px"
            }, {
                queue: false,
                duration: 450
            });
            //searchBox.removeClass('sb-search-open');
            isOpen = false;
        }
    });
    //    end submit button

    //pappo

    // fix
//    var c = 0;
//
//    $('#togs-test').click(function () {
//    });
//
//
//    $('#togs-test').click(function () {
//        if (c == 0) {
//            $('.right-off-canvas-menu').css({
//                position: 'relative',
//                // marginTop: '45px',
//                float: 'right'
//
//            });
//            c = 1;
//        }
//        else {
//            $('.right-off-canvas-menu').css({
//                // position: 'absolute',
//                // marginTop: '0px',
//
//            });
//            c = 0;
//        }
//    });
//
//    $('.off-canvas-list a, .exit-off-canvas ').click(function () {
//
//        $('.right-off-canvas-menu').css({
//            // position: 'absolute',
//            // marginTop: '0px',
//        });
//        c = 0;
//    });


});
// sticky nav
//var sw = window.screen.width;

//$(window).scroll(function () {
//    //if you hard code, then use console
//    //.log to determine when you want the
//    //nav bar to stick.
//    //console.log($(window).scrollTop())
//
//
//    console.log(sw);
//
//    if (sw <= 640) {
//        if ($(window).scrollTop() > 237) {
//            $('.hybrid-bar').addClass('fixed');
//        }
//        if ($(window).scrollTop() < 238) {
//            $('.hybrid-bar').removeClass('fixed');
//        }
//    }
//    else if (sw > 640) {
//        if ($(window).scrollTop() > 237) {
//            $('.main_menu').addClass('fixed');
//        }
//        if ($(window).scrollTop() < 238) {
//            $('.main_menu').removeClass('fixed');
//        }
//    }
////    end sticky nav
//
//});

//start sticky menu
//var s = $(".hybrid-bar");
//var s = $(".main_menu");
//var top_menu = $(".top_menu");
//var pos = s.position();
//$(window).scroll(function () {
//
//    var windowpos = $(window).scrollTop();
//    if (windowpos >= pos.top) {
//        s.addClass("fixed");
//    } else {
//        s.removeClass("fixed");
//    }
//});

//start sticky menu
$(window).bind('scroll', function () {
    var mainHeight = $('.fixed_3:visible').height() + $('.fixed_1:visible').height() + $('.fixed_2:visible').height();
    var mainMenuVisibleHeight = $('.main_menu:visible').height() + 27;
    if ($(window).scrollTop() >= (mainHeight)) {
        $('header').css('margin-bottom', mainMenuVisibleHeight);
        $('.main_menu').addClass('fixed');
    }
    else {
        $('header').css('margin-bottom', '0px');
        $('.main_menu').removeClass('fixed');
    }
});
//end sticky menu

//    start show/hide top menu
$('.sub_menu a').click(function () {
    $(".top_menu").slideToggle("medium", function () {
        if ($('.sub_menu a').find('i').hasClass('fa-angle-up')) {
            $('.sub_menu a').find('i').removeClass('fa-angle-up');
            $('.sub_menu a').find('i').addClass('fa-angle-down');
        }
        else {
            $('.sub_menu a').find('i').removeClass('fa-angle-down');
            $('.sub_menu a').find('i').addClass('fa-angle-up');
        }
    });
});
//    end show/hide top menu


(function ($, window, document, undefined) {
    'use strict';

    Foundation.libs.offcanvas = {
        name: 'offcanvas',

        version: '5.2.2',

        settings: {
            open_method: 'overlap',
            close_on_click: false
        },

        init: function (scope, method, options) {
            this.bindings(method, options);
        },

        events: function () {
            var self = this,
                S = self.S;
            if (this.settings.open_method === 'move') {
                S(this.scope).off('.offcanvas')
                    .on('click.fndtn.offcanvas', '.left-off-canvas-toggle', function (e) {
                        self.click_toggle_class(e, 'move-right');
                    })
                    .on('click.fndtn.offcanvas', '.left-off-canvas-menu a', function (e) {
                        var settings = self.get_settings(e)
                        if (settings.close_on_click)
                            S(".off-canvas-wrap").removeClass("move-right");
                    })
                    .on('click.fndtn.offcanvas', '.right-off-canvas-toggle', function (e) {
                        self.click_toggle_class(e, 'move-left');
                    })
                    .on('click.fndtn.offcanvas', '.right-off-canvas-menu a', function (e) {
                        var settings = self.get_settings(e)
                        if (settings.close_on_click)
                            S(".off-canvas-wrap").removeClass("move-left");
                    })
                    .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
                        self.click_remove_class(e, 'move-left');
                        self.click_remove_class(e, 'move-right');
                    })
            } else if (this.settings.open_method === 'overlap') {
                S(this.scope).off('.offcanvas')
                    .on('click.fndtn.offcanvas', '.left-off-canvas-toggle', function (e) {
                        self.click_toggle_class(e, 'offcanvas-overlap');
                    })
                    .on('click.fndtn.offcanvas', '.left-off-canvas-menu a', function (e) {
                        var settings = self.get_settings(e)
                        if (settings.close_on_click)
                            S(".off-canvas-wrap").removeClass("offcanvas-overlap");
                    })
                    .on('click.fndtn.offcanvas', '.right-off-canvas-toggle', function (e) {
                        self.click_toggle_class(e, 'offcanvas-overlap');
                    })
                    .on('click.fndtn.offcanvas', '.right-off-canvas-menu a', function (e) {
                        var settings = self.get_settings(e)
                        if (settings.close_on_click)
                            S(".off-canvas-wrap").removeClass("offcanvas-overlap");
                    })
                    .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
                        self.click_remove_class(e, 'offcanvas-overlap');
                        self.click_remove_class(e, 'offcanvas-overlap');
                    })
            } else {
                return;
            }
        },

        click_toggle_class: function (e, class_name) {
            e.preventDefault();
            this.S(e.target).closest('.off-canvas-wrap').toggleClass(class_name);
        },

        click_remove_class: function (e, class_name) {
            e.preventDefault();
            this.S('.off-canvas-wrap').removeClass(class_name);

            setTimeout(function () {
                $('.right-off-canvas-menu').css({
                    position: 'absolute'
                    // marginTop: '0px',
                });

            }, 500);

        },

        get_settings: function (e) {
            var offcanvas = this.S(e.target).closest('[' + this.attr_name() + ']')
            return offcanvas.data(this.attr_name(true) + '-init') || this.settings;
        },

        reflow: function () {
        }
    };
}(jQuery, window, window.document));

// menu fix
$(document).ready(function () {
    var c = 0;

    $('#togs-test').click(function () {

        // alert(1);
    });


    $('#togs-test').click(function () {

        console.log(c);
        // alert("Hi");
        if (c == 0) {
            $('.right-off-canvas-menu').css({
                position: 'relative',
                // marginTop: '45px',
                float: 'right'

            });
            c = 1;
        }
        else {
            $('.right-off-canvas-menu').css({
                // position: 'absolute',
                // marginTop: '0px',

            });
            c = 0;
        }
    });

    $('.off-canvas-list a, .exit-off-canvas ').click(function () {

        $('.right-off-canvas-menu').css({
            // position: 'absolute',
            // marginTop: '0px',
        });
        c = 0;
    });

});
