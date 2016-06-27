var sound = document.getElementById("EuroMusic");
sound.currentTime = 0;
sound.volume = 0.7;
sound.play();

$(".signup_title").css('display', 'none');
$(".signup_title").fadeIn(2000);

var EuroMusicPlaying = true;

$(".volumeon").click(function(event) {
    $(".volumeon").css('display', 'none');
    $(".volumeoff").fadeIn(500);
    sound.pause();
});

$(".volumeoff").click(function(event) {
    $(".volumeoff").css('display', 'none');
    $(".volumeon").fadeIn(500);
    sound.play();
});
