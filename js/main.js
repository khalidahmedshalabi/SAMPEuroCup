$(".header").css('display', 'none');
$(".header").fadeIn(1000);

$(".header_button").click(function(event) {
	$(".header_button").css('background-color', 'transparent');
	$(".header_button").css('color', '#109DCC');

	$(this).css('background-color', '#1593BD');
	$(this).css('color', '#ffffff');
});

function ShowSection(class_name)
{
	$("section").css('display', 'none');
	$(class_name).fadeIn(800);
}

$(".button_matches").click(function(event) {

	ShowSection(".section_matches");
});

$(".button_teams").click(function(event) {

	ShowSection(".section_teams");
});

$(".button_stats").click(function(event) {

	ShowSection(".section_stats");
});

$(".button_fans").click(function(event) {

	ShowSection(".section_fans");
});

$(".button_video").click(function(event) {

	ShowSection(".section_video");
});


$(".button_video").trigger('click');
