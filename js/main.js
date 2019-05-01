jQuery(document).ready(function(){

var getElement = $('.my-resume');

$('#resume-caller').click(function(e){
	e.preventDefault();
	getElement.toggleClass("active");
});

		
});