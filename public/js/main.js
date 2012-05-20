$(document).ready(function(){
  var wordForm = $('form#wordForm');

  wordForm.submit(function(){
    event.preventDefault();
    var word = $('form#wordForm input').val();

    $.ajax({
      type: 'GET',
      url: 'wordinfo/',
      data: ('&word=' + word),
      success: function(response){
        console.log(response);
      }
    });
  });
}); //end docReady
