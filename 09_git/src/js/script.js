//TO TOGGLE THE VISIBILITY OF THE COLLAPSIBLE MENU

$(document).ready(function() {
	$(".navigation-toggle").click(function(e) {
		$(this).toggleClass("active");
		$(".navigation-list").toggleClass("hidden");

		e.preventDefault();
	});
});
