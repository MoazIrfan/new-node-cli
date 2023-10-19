const welcome = require('cli-welcome');
const {unhandled} = require('./hooks.js');
const pkg = require('./../package.json');

module.exports = ({ clear = true }) => {
	unhandled();
	welcome({
		title: `new-node-cli`,
		tagLine: `by moazirfan.com`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#6cc24a',
		color: '#000000',
		bold: true,
		clear
	});
};
