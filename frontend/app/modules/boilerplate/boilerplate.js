import $ from 'jquery';
import Mustache from 'mustache';
import template from './boilerplate.html';
import './boilerplate.scss';
import 'bootstrap-loader';


export default class Boilerplate {
	constructor(text) {
		this.text = text;
	}

	onSubmit(event) {
		event.preventDefault();
		const text = $('#user-input').val();
		$('.custom-class').text(text);

		$('#user-input').val('');
	}

	render(node) {
		$(node).html(Mustache.render(template, {userInput: this.text}));
		$('#submit').click(this.onSubmit.bind(this));
	}
}