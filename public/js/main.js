$(document).ready(function(){
  var wordForm = $('form#wordForm');
  var rhymeURL = "http://rhymebrain.com/talk?function=getRhymes&maxResults=45&word=";
  var portURL = "http://rhymebrain.com/talk?function=getPortmanteaus&lang=en&maxResults=12&word=";

  wordForm.submit(function(){
    event.preventDefault();
    var word = $('form#wordForm input').val();

    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      jsonp:'jsonp',
      url: (portURL + word),
      success: function(response){
       console.log(response);
      }
    });

    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      jsonp: 'jsonp',
      url: (rhymeURL + word),
      success: function(response){
       var rhymes = '';
       for (var i = 0; i < response.length; i++) {
         rhymes+='<a href="#" class="validWord">'+response[i].word+'</a>';
       };
       console.log("rhyme: " + rhymes);

      }
    });
  });

}); //end docReady

