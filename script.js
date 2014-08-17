$(document).ready(function(){
	console.log("Script included!");

	$('li').on('click', function(){
	$(this).css("text-decoration", "line-through");
	console.log("test line-through on click");
	});
	
	$('#img1').on('click', function(){
	$(this).hide('fast');
	$('#hiddenStep1').show('fast');
	console.log("test click");
	});

	$('#img2').on('click', function(){
	$(this).hide('fast');
	$('#hiddenStep2').show('fast');
	console.log("test click");
	});


	$('#img3').on('click', function(){
	$(this).hide('fast');
	$('#hiddenStep3').show('fast');
	console.log("test click");
	});

	$('#img4').on('click', function(){
	$(this).hide('fast');
	$('#hiddenStep4').show('fast');
	console.log("test click");
	});

	$('#img5').on('click', function(){
	$(this).hide('fast');
	$('#hiddenStep5').show('fast');
	console.log("test click");
	});

});