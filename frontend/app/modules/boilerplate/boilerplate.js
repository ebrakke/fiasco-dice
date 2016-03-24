import template from './boilerplate.html';
import './boilerplate.scss';
import 'bootstrap-loader';
import riot from 'riot';

riot.tag('boilerplate', template, function(opts) {
	var self = this;
	self.displayText = '';

	self.setDisplayText = (e) => {
		self.displayText = self.input.value;
		return true;
	}
});