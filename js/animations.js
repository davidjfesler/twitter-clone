$(document).ready(function() {
	$('#tweet-submit, #char-count').hide()

	//step 1 above, hide tweet-submit and char-count initially

	$('.tweet-compose').on('click', function() {
		$(this).css("height", "5em")
		$('#tweet-submit, #char-count').show()
		})
	var characters = 140;
	$('.tweet-compose').keyup(function() {
		if($(this).val().length > characters) {
			$(this).val($(this).val().substr(0, characters));	
		}
		$('#char-count').text(characters - $('.tweet-compose').val().length);
		if(Number($('#char-count').text()) <= 10) {
        	$('#char-count').css("color","red");
    	} else {
    		$('#char-count').css("color","initial");
    	}
    	if(Number($('#char-count').text()) <= 0) {
    		$('#tweet-submit').prop("disabled", true);	
    	}
    	if(Number($('#char-count').text()) > 0) {
    		$('#tweet-submit').prop("disabled", false);
    	}
    })

        //step 2 above, character decrease and char count changes

   $('.button').on('click', function(){
		var newTweet = $('.tweet:first').clone();
		var newText = $('.tweet-compose').val();
		newTweet.find('.avatar').attr('src', 'img/alagoon.jpg');
		newTweet.find('.fullname').html('Your Name Here');
		newTweet.find('.username').html('@yourusername');
		newTweet.find('.tweet-text').text(newText);
		newTweet.prependTo('#stream');
	})

   		//step 3 above, add tweet to tweet-stream

   	$('.tweet-actions').hide();
	$('.tweet').hover(function(){
			$(this).find('.tweet-actions').show();
		}, function(){
			$(this).find('.tweet-actions').hide();
		})

		//step 4 above, only tweet that is hovered/clicked over will show tweet options

	/*$('.stats').hide();
	$('.reply').hide();
	$('.tweet').on('click', function(){
		$('.stats').hide();
		$('.reply').hide();
		$(this).find('.stats').show();
		$(this).find('.reply').show();
	})*/   
		//step 5, clicking another tweet will hide previously clicked tweet options

}) //ending