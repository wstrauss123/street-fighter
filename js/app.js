$(document).ready(function() {
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-throwing').hide();
        $('.ryu-cool').hide();
        $('.ryu-ready').show();
    }) .mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-throwing').hide();
        $('.ryu-cool').hide();
        $('.ryu-still').show();
    }) .mousedown(function() {
        playHadouken();
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function() {
                $(this).hide();
                $(this).css('left', '520px');
            })
    }) .mouseup(function() {
        $('.ryu-still').hide();
        $('.ryu-throwing').hide();
        $('.ryu-cool').hide();
        $('.ryu-ready').show();
    })

    function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.6;
        $('#hadouken-sound')[0].play();
    }

    function playCool() {
	$('#cool-sound')[0].volume = 0.5;
        $('#cool-sound')[0].play();
    }

    function stopCool() {
        $('#cool-sound')[0].pause();
        $('#cool-sound')[0].currentTime = 0;
    }

    $(document).keydown(function(e) {
        if (e.keyCode == 88) {
	    playCool();
            $('.ryu-ready').hide();
            $('.ryu-still').hide();
            $('.ryu-throwing').hide();
            $('.ryu-cool').show();
        }   
    }) .keyup(function(e) {
        if (e.keyCode == 88) {
            stopCool();
            $('.ryu-cool').hide();
            $('.ryu-ready').hide();
            $('.ryu-still').show();
        }
    })
});
