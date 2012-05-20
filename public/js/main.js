$(document).ready(function(){
  var wordForm = $('form#wordForm');
  var rhymeURL = "http://rhymebrain.com/talk?function=getRhymes&lang=en&maxResults=12&word=";
  var portURL = "http://rhymebrain.com/talk?function=getPortmanteaus&lang=en&maxResults=12&word=";

  wordForm.submit(function(){
    event.preventDefault();
    var word = $('form#wordForm input').val();

    $.ajax({
      type: 'GET',
      url: 'wordinfo/',
      data: ('&word=' + word),
    });
  });

  $.getJSON("http://rhymebrain.com/talk?function=getRhymes&lang=en&maxResults=12&word="+word+"
  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    jsonp: 'jsonp',
    url: (rhymeURL + word)
    success: function(response){
     console.log("rhyme: " + response); 
    }
  });
}); //end docReady

