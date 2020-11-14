var html = document.documentElement, body = document.body;
window.onscroll = function () {
	navScroll();
};
window.onresize = navScroll;
window.onload = function() {
	navScroll();
	var d = document.getElementById('nav_bar');
	var d2 = document.getElementById('m-nav-sp');
	d.addEventListener('click', function() {
		d2.classList.toggle('active');
		d.classList.toggle('open');
	});
	d2.onclick = function(e) {
		console.log(e);
		d2.classList.toggle('active');
		d.classList.toggle('open');
	}
};
function navScroll() {
	if (html.clientWidth > 991 || body.clientWidth > 991) {
		var BlkStyle = document.getElementById('nav');
		if(html.scrollTop>20||body.scrollTop>49) {
			BlkStyle.classList.add('active');
		} else {
			BlkStyle.classList.remove('active');
		}
	}
};
$(document).ready(function(){
  $("#package-slider").owlCarousel({
		items:2,
		responsive: {
			0: {items: 1},
			768: {items: 1},
			960: {items: 2},
			1000: {items: 2}
		},
		pagination:true,
		navigation:false,
		slideSpeed:1000,
		autoPlay:false
	});
  $("#discount-slider").owlCarousel({
		items:3,
		responsive: {
			0: {items: 1},
			768: {items: 1},
			960: {items: 2},
			992: {items: 3}
		},
		pagination:true,
		navigation:false,
		slideSpeed:1000,
		autoPlay:false
	});
  $("#gallery-slider").owlCarousel({
		items:1,
		pagination:true,
		navigation:false,
		slideSpeed:1000,
		autoPlay:false
	});
  $("#testimonial-slider").owlCarousel({
		items:3,
		responsive: {
			0: {items: 1},
			768: {items: 1},
			960: {items: 2},
			992: {items: 3}
		},
		pagination:true,
		navigation:false,
		slideSpeed:1000,
		autoPlay:false
	});
});
// alert(screen.width + ' x ' +screen.height);