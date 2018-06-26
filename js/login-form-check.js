$(document).ready(function(){

	var loginFormCheck = (function(){

		// приватные переменные модуля
		var _form = $('#login-form');
		var _input = _form.find('.input');

		// метод инициализации
		var init = function(){
			_setUpListeners();
		}

		// метод прослушки событий
		var _setUpListeners = function(){
			_form.on('submit', function(e){
				_validateForm(e);
			});
		}

		// приватные методы
		var _validateForm = function(e){
			e.preventDefault();
			var emailVal = _form.find('#email').val().trim().toLowerCase();
			var passwordVal = _form.find('#password').val().trim();

			// проверка инпутов на заполненность
			$.each(_input, function(index, val){
				var input = $(val);
				var value = input.val().trim();
				var textError = input.attr('data-error');
				var errorMessage = $('<div class="error error-one-string">' + textError + '</div>');
				var errorMessageData = $('<div class="error error--with-desc">Неверный email или пароль</div>' 
					+ '<div class="error-description">' 
					+ '<p>Введите верные данные для входа или воспользуйтесь <a href="#">восстановлением пароля, </a>чтобы войти на сайт.</p>' 
					+ '</div>');
				var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;


				if (value.length === 0) {
					input.next('.error-one-string').slideUp(500);
					errorMessage.insertAfter(input).hide().slideDown(500);
				} else {
					input.next('.error-one-string').slideUp(500);
				}

				// проверка email на соответствие формату и значению
				if (input.attr('id') === 'email') {
					if (pattern.test(value)) {
						if (emailVal == 'mail@mail.com' && passwordVal == '123') {
							_form.unbind('submit').submit();
						} else if (passwordVal.length > 0){
							input.siblings('.error--with-desc, .error-description').slideUp(500);
							errorMessageData.insertBefore(_form.find('.plate__links')).hide().slideDown(500);
						}
					} else if (value.length > 0) {
						input.next('.error-one-string').slideUp(500);
						textError = input.attr('data-error-format');
						errorMessage = $('<div class="error error-one-string">' + textError + '</div>');
						errorMessage.insertAfter(input).hide().slideDown(500);
					}
				} 	

				// скрыть ошибки 
				input.on('focus', function(){
					input.next('.error-one-string').slideUp(500);
					input.siblings('.error--with-desc, .error-description').slideUp(500);
				});
			});
		}

		return { init }
	}());

	loginFormCheck.init();
});