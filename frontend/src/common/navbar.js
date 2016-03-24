var riot = require('riot');
var $ = require('jquery');

var Nav = {
	init: function() {
		this.links = [{name:'One'}, {name:'Two'}, {name:'Three'}];
	},
	getLinks: function() {
		var link = $('.link');
		link.html(links[0].name);
	}
};

module.exports = Nav;