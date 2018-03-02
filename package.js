Package.describe({
	name: 'djk:clndr',
	version: '1.4.6',
	summary: 'Load kylestetz/CLNDR into your Meteor project.',
	git: 'https://github.com/djkmiles/meteor-clndr.git',
	documentation: 'README.md'
});


Package.onUse(function(api) {
	api.versionsFrom('1.2.1')
	api.use('momentjs:moment')
	api.mainModule('clndr.js', 'client');
});
