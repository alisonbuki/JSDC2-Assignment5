//Model

var n = 0;



//View

window.onload = function() {
	// Add GifLinks to all anchor tags on the page!
    var element = document.querySelector( 'a' );
    GifLinks( element );
}

function render() {

$('#count').toggleClass('red', n > 100);
$('#count').toggleClass('purple', n < 0);

$('#count').html(n.toString());

var source = $('#count-template').html();
var template = Handlebars.compile(source);

}


//Controller

function setup() {

	//setup view
	render();

	//setup event listeners
	$('#counter').on('click', '#plus', increment);
	$('#counter').on('click', '#minus', decrement);
	$('#counter').on('click', '#clear', clear);

}

function increment() {
	n++;

	render();
}

function decrement() {
	n--;

	render();
}

function clear() {
	n = 0;

	render();
}


$(document).ready(setup);