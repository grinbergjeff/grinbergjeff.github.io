$(document).ready(function() {
	introduction();
	displayActive();
	$('.thumbs').portfolio({
                    cols: 4,
                    transition: 'slideDown'
                });
});

document.addEventListener("DOMContentLoaded", function(event) { 
	whereIsScrollBar();
	//displayActive();
	clickMenuActive();
});

/*Functions*/
function introduction() {
	document.getElementById('menu').style.display='none';
	document.getElementById('contact-div').style.display='none';
	$('#down').on('click',function() {
		$('body, html').animate({
			scrollTop: $('#about-me').offset().top}, 1000);
	});
}

function scrollActive(section, menuSelector) {
			var sectionID = document.getElementById(section);
			var sectionPos = sectionID.offsetTop;
			var menuID = document.getElementById(menuSelector);
			var scrollPos = window.pageYOffset;
			if (scrollPos >= sectionPos) {
				var activeElement = document.getElementsByClassName('active');
				for (var i = 0; i < activeElement.length; i++) {
					activeElement[i].setAttribute('class', '');
				}
				menuID.setAttribute('class', 'active');
			}
		}

function whereIsScrollBar() {
	document.addEventListener("scroll",function() {
		var scrollPos = window.pageYOffset;
		var menuSelector = document.getElementById('menu');
		var menuStyle = menuSelector.style;
		var contactDiv = document.getElementById('contact-div');
		var contactStyle = contactDiv.style;
		//Display menu when not in intro-section
		function displayMenu() {
			var mainLogoHeight = document.getElementById("logo-canvas").offsetTop;
			if (scrollPos >= mainLogoHeight) {
				if(menuStyle.display === 'inline') {
					menuStyle.display='inline'; // Counteract the constant re-animation on a new scroll
					contactStyle.display='inline';
				}
				else {
					fadeIn(menuSelector,'inline');	
					fadeIn(contactDiv,'inline');
				}
			}
			else {
					fadeOut(menuSelector);
					fadeOut(contactDiv);
			}
		}
		displayMenu();
		//Change active section when scrolled to it
		scrollActive('about-me', 'menu-am');
		scrollActive('portfolio', 'menu-p');
	})
}

//Pure JS version of fadeOut
function fadeOut(element) {
	element.style.opacity = 1;
	
	(function fade() {
    if ((element.style.opacity -= .1) < 0) {
      element.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

//Pure JS version of FadeIn
function fadeIn(element, display) {
	element.style.opacity = 0;
	element.style.display = display || "block";
	
	(function fade() {
    var val = parseFloat(element.style.opacity);
    if (!((val += .1) > 1)) {
      element.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
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
		$('body, html').animate({
			scrollTop: $('#about-me').offset().top}, 1000);
		}
		else if (activeElementID === 'menu-p') {
		$('body, html').animate({
			scrollTop: $('#portfolio').offset().top}, 1000);
		}
	}
}

//Function to scroll to section
/*function scrollTo(element, to, duration) {
    if (duration < 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}*/