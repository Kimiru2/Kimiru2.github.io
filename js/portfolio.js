'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here

$(".img-thumbnail").click(projectClick);
function projectClick(e) {
e.preventDefault();
$(this).css("background-color", "#f77700");
$(this).parent().next().toggle();
	}
$(".nav-item").click(NavActive);
function NavActive() {
	$(this).toggleClass("nav-item active");
	$("li.nav-item").removeClass("nav-item active")

}
}
