$(function() {
	var data = $.get('/data/cards.json');
	var tmpl = $.get('/template/card.template');
	var container = $('.container');

	$.when(data, tmpl).done(function(data, template) {
		console.time('rendering');
		var compiled = _.template(template[0]);	
		data[0].forEach(function(item, index) {
			var html = compiled(item);
			container.append(html);
		});
		console.timeEnd('rendering');
	})

	container.on('click', '.simple-card', function() {
		console.log($('.card-title', this).text().trim());
	});
});