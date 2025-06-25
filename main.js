$(document).ready(function() {
  $('#contactForm').on('submit', function(e) {
    let valid = true;
    // Remove previous validation
    $(this).find('input').removeClass('is-invalid');

    // Validate first name
    if (!$('#firstName').val().trim()) {
      $('#firstName').addClass('is-invalid');
      valid = false;
    }
    // Validate last name
    if (!$('#lastName').val().trim()) {
      $('#lastName').addClass('is-invalid');
      valid = false;
    }
    // Validate email
    const email = $('#email').val().trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      $('#email').addClass('is-invalid');
      valid = false;
    }
    // Validate phone
    const phone = $('#phone').val().trim();
    if (!phone || phone.length < 7) {
      $('#phone').addClass('is-invalid');
      valid = false;
    }
    if (!valid) {
      e.preventDefault();
    } else {
      e.preventDefault();
      alert('Submitted successfully');
      this.reset();
    }
  });
}); 