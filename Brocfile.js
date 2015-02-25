/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
	fingerprint: {
		prepend: 'spotifindassets.s3-website-us-east-1.amazonaws.com'
	},
	minifyCSS: {
		enabled: true,
		options: {}
	},
	autoprefixer: {
		browsers: ['last 2 versions'],
		cascade: false
	},
});

var pickFiles = require('broccoli-static-compiler');

app.import('bower_components/jquery/dist/jquery.js');
app.import('bower_components/ember-localstorage-adapter/localstorage_adapter.js');

module.exports = app.toTree();
