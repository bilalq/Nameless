$(document).ready(function(){
  var wordForm = $('form#wordForm');

  wordForm.submit(function(){
    event.preventDefault();
    var word = $('form#wordForm input').val();

    $.ajax({
      type: 'GET',
      url: 'wordinfo/',
      data: ('&word=' + word),
    });
  });
}); //end docReady

//Rhymes: "http://rhymebrain.com/talk?function=getRhymes&lang=en&maxResults=12&word="+word
//Ports: "http://rhymebrain.com/talk?function=getPortmanteaus&lang=en&maxResults=12&word=" + word
