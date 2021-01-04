$('.drop-click').on('click', function(e) {
	e.preventDefault();

	var dataElem = $(this).attr('data-element');
	var elems = $(dataElem);

	elems.toggle(100);
});