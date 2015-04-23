$(document).ready(function() {
	$('#tweet-submit, #char-count').hide()
	//step 1 above, Initially, the Tweet button and the character count button should be hidden (CSS).

	$('.tweet-compose').on('click', function() {
		$(this).css("height", "5em")
		$('#tweet-submit, #char-count').show()
		})
	//step 2 above, When the user clicks on the textarea, the textarea should double in size and the character count and Tweet buttons should be revealed.

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

        //step 3, 4, 5 user types, character count decrease, 10 or less chars, text turns red, more than 140 chars input, tweet button disabled/re-enabled when greater

   $('.button').on('click', function(){
		var newTweet = $('.tweet:first').clone();
		var newTweetText = $('.tweet-compose').val();
		newTweet.find('.avatar').attr('src', 'img/alagoon.jpg');
		newTweet.find('.fullname').html('Your Name Here');
		newTweet.find('.username').html('@yourusername');
		newTweet.find('.tweet-text').text(newTweetText);
		newTweet.prependTo('#stream');
	})

   		//step 6 above, add tweet to tweet-stream

   		//begin part two

   	$('.tweet-actions').hide();
	$('.tweet').hover(function(){
			$(this).find('.tweet-actions').show();
		}, function(){
			$(this).find('.tweet-actions').hide();
		})

		//p2 step 1 above, only tweet that is hovered/clicked over will show tweet options

	/*$('.stats').hide();
	$('.reply').hide();
	$('.tweet').on('click', function(){
		$('.stats').hide();
		$('.reply').hide();
		$(this).find('.stats').show();
		$(this).find('.reply').show();
	})*/   
		//p2 step 2, clicking another tweet will hide previously clicked tweet options

}) //ending