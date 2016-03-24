import $ from 'jquery';
import template from './boilerplate.html';
import css from './boilerplate.scss';
import 'bootstrap-loader';
import riot from 'riot';

riot.tag('boilerplate', template, css, function(opts) {
	var self = this;
	self.displayText = '';

	self.setDisplayText = (e) => {
		self.displayText = self.input.value;
		return true;
	}
});