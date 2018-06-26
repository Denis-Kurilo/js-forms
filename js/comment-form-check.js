$(document).ready(function() {
// init modul
	var commentFormCheck = (function () {
		// Переменные модуля
		var _form = $('#form-add-comment');
		var _commentText = $('#comment-text');
		var _commentError = $('#comment-error');

		// Метод инициализации
		var init = function(){
			_setUpListeners();
		}

		// Метод прослушки событий

		var _setUpListeners = function() {
			_form.on('submit', function(event) {
				_formValidate(event);
			});
		}

		// Приватные методы

		var _formValidate = function (event) {
	    		event.preventDefault();
				if ( _commentText.val() == "" ) {

					_commentError.fadeIn(800);

					_commentText.on('focus', function() {
					_commentError.fadeOut(500);
					});
				}
				else {
					_form.unbind('submit').submit();
					_commentError.fadeOut;
				}
			}
		return {
			init
		}
	}());
	commentFormCheck.init();

});


