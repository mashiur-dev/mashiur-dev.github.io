jQuery(document).ready(function(){

var getElement = $('.my-resume');

$('#resume-caller').click(function(e){
	e.preventDefault();
	getElement.toggleClass("active");
});


$("#contact-form").on("submit", function(event) {
    event.preventDefault(); // prevent reload
    var respondDiv = $('.mailResponds');
    var errorDiv = $('.mailError');
    var formData = new FormData(this);
    formData.append('service_id', 'mrzxmail');
    formData.append('template_id', 'template_O4j9hSiD');
    formData.append('user_id', 'user_1W4h48uUnwy2aD4HEKmAT');
 	
 	if( $('#fEmail1').val() != '' && $('#fName').val() != '' && $('#fMessage').val() != '' ){

 		$.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
	        type: 'POST',
	        data: formData,
	        contentType: false, // auto-detection
	        processData: false // no need to parse formData to string
	    }).done(function() {
	    	errorDiv.addClass('hide');
	    	respondDiv.removeClass('hide');
	        respondDiv.text('Thank you, we will contact you soon!');
	        $('#contact-form').find("input[type=text], input[type=email], textarea").val("");
	    }).fail(function(error) {
	        //alert('Oops... ' + JSON.stringify(error));
	        respondDiv.removeClass('hide');
	        respondDiv.text('Oops... ' + JSON.stringify(error));
	    });

 	}else{
 		respondDiv.addClass('hide');
 		errorDiv.removeClass('hide');
 		errorDiv.text('Please give vlaid information');
 	}
    
});


/*// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
  form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    //event.preventDefault();
    form.classList.add('was-validated');
    formSubmit();
  }, false);
});
*/
		
});


/*// Example starter JavaScript for disabling form submissions if there are invalid fields
  window.addEventListener('load', function() {
    
  }, false);*/