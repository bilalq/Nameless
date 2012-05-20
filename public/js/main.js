$(document).ready(function(){
  var wordForm = $('form#wordForm');
  var rhymeURL = "http://rhymebrain.com/talk?function=getRhymes&maxResults=45&word=";
  var portURL = "http://rhymebrain.com/talk?function=getPortmanteaus&lang=en&maxResults=12&word=";

  wordForm.submit(function(){
    event.preventDefault();
    var word = $('form#wordForm input').val();
    
    if(isUnique(word)){
      $('div#pastSearches div').append('<a href="#" class="validWord">' + word + '</a>'); 
      }

    //Portmanteau Collection
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      jsonp: 'jsonp',
      url: (portURL + word),
      success: function(response){
        var port = '';
        for(var i = 0; i < response.length && i < 15; i++){
          var parsePort = response[i].combined.split(',')[0];
          port+= '<p>' + parsePort + '</p>';
          }
        $('div#combined div').html(port);
      //console.log("port: " + JSON.stringify(response));
      }
    });

    //Rhyme Collection
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      jsonp: 'jsonp',
      url: (rhymeURL + word),
      success: function(response){
       var rhymes = '';
       for (var i = 0; i < response.length && i < 15; i++) {
         if(response[i].score > 260){
          rhymes+='<a href="#" class="validWord">'+response[i].word+'</a>';
          }
       };
       //console.log("rhyme: " + rhymes);
        $('div#rhymes div').html(rhymes);
      }
    });

    //Definition Collection
    $.ajax({
      type: 'GET',
      data: {'word': word},
      url: 'index.php/wordinfo/getDef',
      success: function(response){
        console.log('DEFINITION: ' + (response));
      }
    });

    //Thesaurus Collection
    $.ajax({
      type: 'GET',
      data: {'word': word},
      url: 'index.php/wordinfo/getSyns',
      success: function(response){
        console.log('Synonyms: ' + (response));
      }
    });
  });

  function isUnique(target) {
    var entries = $('div#pastSearches div').html();
    if(entries.indexOf(target) != -1){
      return false;
    }else{
      return true;
    }
  }

}); //end docReady



