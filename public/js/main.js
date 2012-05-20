$(document).ready(function(){
  var wordForm = $('form#wordForm');
  var rhymeURL = "http://rhymebrain.com/talk?function=getRhymes&maxResults=45&word=";
  var portURL = "http://rhymebrain.com/talk?function=getPortmanteaus&lang=en&maxResults=12&word=";

  wordForm.submit(function(){
    event.preventDefault();
    var word = $('form#wordForm input').val();

    //$.ajax({
      //type: 'GET',
      //url: 'wordinfo/',
      //data: ('&word=' + word),
      //success: function(response){
        //console.log(response);
      //}
    //});
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      jsonp: 'jsonp',
      url: (rhymeURL + word),
      success: function(response){
       var thingy = "";
       for (var i = 0; i < thingy.length; i++) {
         '<a href="#">'+thingy[i]+'</a>';
       };
       console.log("rhyme: " + JSON.stringify(response));

      }
    });
  });

}); //end docReady

