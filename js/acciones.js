// JavaScript Document

$(document).ready(function(e) {
document.addEventListener("deviceready", function() {
	
	$('#beep').tap(function() {
	navigator.notification.beep(1);
	} ); // tap beep
	
	$('#vibrar').tag(function () {
		navigator.notification.vibrate(1000);
	} ); // vibrar
	
}, false); //deviceready
}) //ready