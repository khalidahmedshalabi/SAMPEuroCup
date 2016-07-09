$(".section_matches_tab_button").click(function(event) {
	$(".section_matches_tab_button").css('background-color', '#111111');
	$(".section_matches_tab_button").css('color', '#ffffff');

	$(this).css('background-color', '#ffffff');
	$(this).css('color', '#111111');
});

function ShowMatchSubSection(class_name)
{
	$(".match_sub_section").css('display', 'none');
	$(class_name).fadeIn(800);
}

$(".button_qualification").click(function(event) {

	ShowMatchSubSection(".sub_section_qualification");
});

$(".button_groups").click(function(event) {

	ShowMatchSubSection(".sub_section_groups");
});

$(".button_finals").click(function(event) {

	ShowMatchSubSection(".sub_section_finals");
});


$(".button_groups").trigger('click');

$(".group_box").css('display', 'none');;
$(".group_box").slideDown(1000);

var UEFASound = document.getElementById("UEFAMusic");
UEFASound.currentTime = 0;
UEFASound.volume = 0.7;

$(".group_box").hover(function(event) {
    UEFASound.play();
},
function(event)
{
	UEFASound.pause();
	/*setTimeout(function(){
	    UEFASound.pause();
	}, 2000);*/
});
