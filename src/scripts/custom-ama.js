function initMenuNav(){
    $('.js-menu-nav li.hover_open')
      .on('mouseenter',function(){
        $(this).addClass('active');
        $(this).find('.sub-menu-nav').addClass('opened')
    })
      .on('mouseleave',function(){
        $(this).removeClass('active');
        $(this).find('.sub-menu-nav').removeClass('opened')
    });
}
function initFooter(){
    if($('body').innerHeight() < $(window).innerHeight()){
        $('body').addClass('footer-fixed');
    }
}
var amawrap=window.amawrap||{};



// Avoid `console` errors in browsers that lack a console.
(function () {
	var method;
	var noop = function () {
	};
	var methods = [
	'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
	'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
	'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
	'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};



$(document).ready(function () {
	initFooter();

	initMenuNav();
});

