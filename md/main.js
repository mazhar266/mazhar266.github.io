// make the title from the slug
function makeTitle(slug) {
    var words = slug.split('-');

    for(var i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }

    return words.join(' ');
}

// gets the parameter from the url
function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
}

$(function (){
	// body load
	console.log ('js file loaded');
	$.get (getURLParameter('file'), function (x){
		// insert the html
		$('#maze-loader').html (x);
		console.log ('md file loaded');
	});
});