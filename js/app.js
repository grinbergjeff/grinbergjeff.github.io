document.addEventListener("DOMContentLoaded", function(event) { 
	//introduction();
	displayActive();
	clickMenuActive();
});

/*Functions*/
function introduction() {
	var doNotDisplay = ['contact','portfolio','about-me','menu']
	for (var i=0; i < doNotDisplay.length; i++) {
		document.getElementById(doNotDisplay[i]).style.display='none';
	}
}
function clickMenuActive(clickedButton) {
	//Function to grab information of event/element
	function getEventTarget(e) {
		e = e || window.event;
		return e.target || e.srcElement;
	}
	
	var menuList = document.getElementById('menu-buttons');
	menuList.onclick = function(event) {
		//Remove current active element
		var activeElement = document.getElementsByClassName('active');
		for (var i = 0; i < activeElement.length; i++) {
			activeElement[i].setAttribute('class', '');
		}
		//Make clicked element active
		var target = getEventTarget(event);
		target.setAttribute('class','active');
		displayActive();
	}
}
function displayActive() {
	var activeElement = document.getElementsByClassName('active');
	for (var i = 0; i < activeElement.length; i++) {
		var activeElementID = activeElement[i].getAttribute('id');
		var clickMe = document.body;
		if (activeElementID === 'menu-am') {
			var to = document.querySelector("#about-me").offsetTop;
			scrollTo(clickMe, to, 600);
		}
		else if (activeElementID === 'menu-p') {
			var to = document.querySelector("#portfolio").offsetTop;
			scrollTo(clickMe, to, 600);
		}
		else if (activeElementID === 'menu-c') {
			var to = document.querySelector("#contact").offsetTop;
			scrollTo(clickMe, to, 600);
		}
	}
}
//Function to scroll to section
function scrollTo(element, to, duration) {
    if (duration < 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}