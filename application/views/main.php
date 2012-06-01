<!DOCTYPE HTML>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <script type="text/javascript" src="/js/jquery-1.7.2.min.js"></script>
    <script type="text/javascript" src="/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/main.js"></script>
    <link rel="stylesheet" href="/css/bootstrap.min.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="/css/main.css" type="text/css" charset="utf-8">
    <title>No Name</title>
  </head>
  <body>
    <div class="navbar navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="brand" href="#">Nameless</a>
          <div id="search">
            <form id="wordForm" class="form-search">
              <input type="text" class="input-medium search-query" />
              <button href="#" type="submit" class="btn"><i class="icon-search"></i></button>
            </form>
          </div>
          <!--<a href="#" id="save" class="pull-right btn btn-success">Save</a>-->
        </div>
      </div>
    </div>

    <div id="wrapper">

      <div class="row">
        <div class="span6">  
          <div id="definition">
            <h1>Word</h1>
            <div class="well">
            </div>
          </div>
        </div>

        <div class="span3">
          <div id="pastSearches">
            <h2>Past Searches</h2>
            <div class="well">
            </div>
          </div>
        </div>

        <div class="span3">
          <h2>Notes</h2>
          <textarea name="notes" rows=5></textarea>
        </div>
      </div>

      <div class="row">
        <div class="span3"> 
          <div id="synonyms">
            <h2>Synonyms</h2>
            <div class="well">
            </div>
          </div>
        </div>

        <div class="span3">
          <div id="rhymes">
            <h2>Rhymes</h2>
            <div class="well">
            </div>
          </div>
        </div>

        <div class="span3">
          <div id="combined">
            <h2>Portmanteaus</h2>
            <div class="well">
            </div>
          </div>
        </div>

        <div class="span3">      
          <div id="domains">
            <h2>Available Domains</h2>
            <div class="well">
            </div>
          </div>
        </div>

      </div>

    <div class="row">
      <div class="span3 offset9">
        <div id="random">
          <h2>Random</h2>
          <div class="well">
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
