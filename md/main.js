// make the title from the slug
function makeTitlefromSlugMaze (slug) {
    var words = slug.split ('-');

    for (var i = 0; i < words.length; i++) {
      var word = words [i];
      words [i] = word.charAt (0).toUpperCase () + word.slice (1);
    }

    return words.join(' ');
}

// gets the parameter from the url
function getURLParameterMaze (name) {
    return decodeURIComponent ((new RegExp ('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec (location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
}

// removes the ext from the last
function removeExtMaze (name)
{
	return name.substr (0, name.lastIndexOf ('.'));
}

$(function (){
	// body load
	console.log ('js file loaded');
	var filename = getURLParameterMaze ('file');
	// update the title
	document.title = removeExtMaze (makeTitlefromSlugMaze (filename));

	$.get (filename, function (x){
		// insert the html
		$('#maze-loader').html (x);
		console.log ('md file loaded');

		console.log ("markdown: \n" + x)

		document.write ('<script src="strapdown.js"><\/script>');
	});
});