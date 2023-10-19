const welcome = require('cli-welcome');
const {unhandled} = require('./hooks.js');
const pkg = require('./../package.json');

module.exports = ({ clear = true }) => {
	unhandled();
	welcome({
		title: `{{name}}`,
		tagLine: `by {{authorName}}`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#36BB09',
		color: '#000000',
		bold: true,
		clear
	});
};
