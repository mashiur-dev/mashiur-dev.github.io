jQuery(document).ready(function(){

/*	jQuery('#bportfolio-view').embedBehance({

	  // behance API Key
	  apiKey: 'HR1ZYYO258Jr4ckEDJbDz6nF1SLQIqYa',

	  // Behance Username
	  userName: 'shoyebzz',

	});
*/

/*	var api = "http://behance.net/v2/users/matiascorea",
		apiId = "HR1ZYYO258Jr4ckEDJbDz6nF1SLQIqYa",
		$order = $("#bportfolio-view");

		//start ajexing
		jQuery.ajax({
			dataType: "jsonp",
			type: "GET",
			url: "http://behance.net/v2/users/shoyebzz/projects/?api_key=HR1ZYYO258Jr4ckEDJbDz6nF1SLQIqYa",
			success: function myCallbackFunction(order){
				
				console.log("sucess", order.projects);
				$.each(order, function(i, item){
					var i = 0;
					console.log("sucess", order.projects[i].name);

					$order.append(order.name);

					i++;
				});
			}
		});*/

var getElement = $('.my-resume');

$('#resume-caller').click(function(e){
	e.preventDefault();
	getElement.toggleClass("active");
});

		
});