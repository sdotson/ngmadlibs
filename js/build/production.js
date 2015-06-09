
(function($) {
	$(document).ready(function() {
		var emailPatt = /\S+@\S+/,
	        zipPatt = /^[0-9]{5}(?:-[0-9]{4})?$/,
	        title = $('#title'),
			fname = $('#fname'),
			lname = $('#lname'),
			email = $('#email'),
			street = $('#street1'),
			city = $('#city'),
			state = $('#state'),
			zip = $('#zip');

		/* Mobile menu */
		$('.mobile-nav').click(function() {
			$(this).toggleClass('active');
			if ($(this).hasClass('active')) {
				$('.nav-header').slideDown();
			} else {
				$('.nav-header').slideUp();
			}
		});

		$('#beanForm').submit(function(e) {
			var valid = true,
				errors = [];

			$('.error').removeClass('error');

			if (title.val() == '') {
	          valid = false;
	          title.parent().addClass('error');
	          errors.push('Please enter a valid Title.');
	        };

	        if (state.val() == '') {
	          valid = false;
	          state.parent().addClass('error');
	          errors.push('Please enter a valid State.');
	        };

			if (fname.val() == '') {
	          valid = false;
	          fname.addClass('error');
	          errors.push('Please enter a valid first name.');
	        };

	        if (lname.val() == '') {
	          valid = false;
	          lname.addClass('error');
	          errors.push('Please enter a valid last name.');
	        };

	        if (street.val() == '') {
	          valid = false;
	          street.addClass('error');
	          errors.push('Please enter a valid street address.');
	        };

	        if (city.val() == '') {
	          valid = false;
	          city.addClass('error');
	          errors.push('Please enter a valid city.');
	        };

	        if (!emailPatt.test(email.val())) {
	          valid = false;
	          email.addClass('error');
	          errors.push('Please enter a valid email address.');
	        };

	        if (!zipPatt.test(zip.val())) {
	          valid = false;
	          zip.addClass('error');
	          errors.push('Please enter a valid ZIP.');
	        };

	        if (valid === false) {
	        	e.preventDefault();
	        	$('.errors').html(errors.join('<br>'));
	        } else {
	        	$(this).find('input[type=submit]').val('Submitting...');
	        };
	    });
	});
})(jQuery);