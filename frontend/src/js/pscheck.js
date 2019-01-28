$('form').validate();

$('#password, #password_confirm').on('keyup', function() {
  if ($('#password').val() == $('#password_confirm').val()) {
    $('#submit').css('backgroundColor', 'green');
    $('#submit').prop('disabled', false);
  } else {
    $('#submit').css('backgroundColor', 'red');
    $('#submit').prop('disabled', true);
  }
});