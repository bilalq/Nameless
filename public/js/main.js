$(document).ready(function(){
  var wordForm = $('form#wordForm');
  var rhymeURL = "http://rhymebrain.com/talk?function=getRhymes&maxResults=45&word=";
  var portURL = "http://rhymebrain.com/talk?function=getPortmanteaus&lang=en&maxResults=12&word=";
  var formInput = $('form#wordForm input');

  wordForm.submit(function(){
    event.preventDefault();
    var word = formInput.val();
      $('div#definition h1').html(word);
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
        for(var i = 0; i < response.length && i < 12; i++){
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
       for (var i = 0; i < response.length && i < 12; i++) {
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
        var defs = JSON.parse(response);
        var entries = '';

        for (var i = 0; i < defs.length; i++) {
          var curr = defs[i];
          entries += '<small>'+curr.partOfSpeech+'</small><p class="def">'+curr.text+'</p>'; 
        }

        $('div#definition div').html(entries);
      }
    });

    //Thesaurus Collection
    $.ajax({
      type: 'GET',
      data: {'word': word},
      url: 'index.php/wordinfo/getSyns',
      success: function(response){
        var syns = JSON.parse(response)[0].words;
        var entries = '';

        for (var i = 0; i < syns.length; i++) {
          var curr = syns[i];
          entries += '<a href="#" class="validWord">'+curr+'</a>'; 
        }

        $('div#synonyms div').html(entries);
      }
    });
  });

  $('div#wrapper').on('click', 'a.validWord', function(e){
    e.preventDefault();
    var searchTerm = $(this).text();
    
    formInput.val(searchTerm);
    
    wordForm.submit();
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

