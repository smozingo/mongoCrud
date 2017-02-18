$(() => {

  $('#doSignup').on('click', () => {

    $.ajax({
      method: 'POST',
      url:'/signup',

    });
  });

});

