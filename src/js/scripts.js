import $ from 'jquery'

if ($(".awards").text().length == 0) {
	$('.awards').remove();
} 

$('.menu').click(function() {
	$('.custom-cursor').addClass('x');
	console.log('clicked')
});
$('.menu-expanded, .close-container').click(function() {
	$('.custom-cursor').removeClass('x');
	console.log('clicked')
});
