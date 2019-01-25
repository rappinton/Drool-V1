//dropdown
$('.ui.dropdown').dropdown('show');

//sidebar
$('.ui.sidebar').sidebar('attach events','.toc.item');

$('.menu .item').tab();

$('.font-div').click(function(){
    $('.collapse').collapse('hide');
  });

$( document ).ready(function() {
	$('.ui.card .image').dimmer({on: 'hover'});
});


$(document).ready(function () {
	$('select').formSelect();
});