/**
 *
 * File: main.js
 * Author: Mazhar Ahmed
 *
 */

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

// loads a script on the fly
function loadScriptMaze (url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

$(function (){
	// body load
	console.log ('js file loaded');
	var filename = getURLParameterMaze ('file');
	// update the title
	document.title = removeExtMaze (makeTitlefromSlugMaze (filename));
	// get the file
	$.get (filename, function (x){
		// insert the html
		$('#maze-loader').html (x);
		console.log ('md file loaded');

		console.log ("markdown: \n" + x)
		// now load the parser
		loadScriptMaze ("strapdown.js", function (){
			console.log ('js file laoded');
		});
	});
});