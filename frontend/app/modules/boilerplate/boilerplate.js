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

	onKeyDown(event) {
		$('.custom-class').text('User is typing...');
	}

	onKeyUp(event) {
		setTimeout(function() {
			$('.custom-class').text('');
		}, 1000);
	}

	render(node) {
		$(node).html(Mustache.render(template, {userInput: this.text}));
		$('#submit').click(this.onSubmit.bind(this));
		$('#user-input').on('keydown', this.onKeyDown.bind(this));
		$('#user-input').on('keyup', this.onKeyUp.bind(this));
	}
}