$(function () {
    ////////////////Masonry Gallery//////////////
    var $container = $('#masonrygallery');
    // initialize
    $container.masonry({
        columnWidth: 154,
        itemSelector: '.item',
        "isFitWidth": true
        // "percentPosition": true
    });
});