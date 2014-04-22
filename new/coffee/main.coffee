# coffee script file

# $.backstretch ([
#      "http://dl.dropbox.com/u/515046/www/outside.jpg"
#    , "http://dl.dropbox.com/u/515046/www/garfield-interior.jpg"
#    , "http://dl.dropbox.com/u/515046/www/cheers.jpg"
#  ], {duration: 3000, fade: 750});


# Using $ instead of just $ to be more specific
$ = jQuery
# slider object
slider = $ '.hero'

# jquery dom ready
$ ->
  # here is my code

  # alert 'hi'

  slider.backstretch ["img/slides/1.jpg", "img/slides/3.jpg", "img/slides/4.jpg", "img/slides/6.jpg"], {duration: 3000, fade: 750}