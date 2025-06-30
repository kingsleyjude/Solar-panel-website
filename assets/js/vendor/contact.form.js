
(function ($) {
    'use strict';
    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
            .done(function (response) {

                // SweetAlert Success popup
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: response,
                    confirmButtonColor: '#3085d6'
                });

                // Clear the form
                $(form)[0].reset();


            })
            .fail(function (data) {
                // SweetAlert Error popup
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: data.responseText !== '' ? data.responseText : 'An error occurred. Please try again.',
                    confirmButtonColor: '#d33'
                });

            });
    });

})(jQuery);