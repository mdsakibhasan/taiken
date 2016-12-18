$(function(){
	var win = window.location.href;
	var winhref = win.substring(win.lastIndexOf('?'));
	$('.selecter').mobilyselect({
		collection: 'all',
		animation: 'fade',
		duration: 100,
		listClass: 'selecterContent',
		btnsClass: 'selecterBtns',
		btnActiveClass: 'active',
		elements: 'li',
		onChange: function(){},
		onComplete: function(){}
	});
});
