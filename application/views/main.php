<!DOCTYPE HTML>
<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <script type="text/javascript" src="<? echo base_url(); ?>public/js/jquery-1.7.2.min.js"></script>
  <script type="text/javascript" src="<? echo base_url(); ?>public/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="<? echo base_url(); ?>public/js/main.js"></script>
  <link rel="stylesheet" href="<? echo base_url(); ?>public/css/main.css" type="text/css" charset="utf-8">
  <link rel="stylesheet" href="<? echo base_url(); ?>public/css/bootstrap.min.css" type="text/css" charset="utf-8">
  <title>No Name</title>
</head>
<body>
  <div id="wrapper">

  <div id="search">
		<form class="form-search">
  		<input type="text" class="input-medium search-query">
		<button type="submit" class="btn">Search</button>
		</form>
	</div>

  <div class="row">
    <div class="span6">  
	    <div id="definition">
	      <h1>Word</h1>
        <div class="well">
        Definition: 
        </div>
      </div>
    </div>
  </div>

  <div class="row">
          <div class="span3">
          <div id="synonyms">
          <h1>Synonyms</h1>
            <div class="well">
            </div>
          </div>
          </div>
          <div class="span3">
          <div id="rhymes">
            <h1>Rhymes</h1>
            <div class="well">
            </div>
          </div>
          </div>
  </div>

    <div id="notes">
    </div>

    <div id="random">
      <h1>Random</h1>
      <div class="well">
     
      </div>
    </div>

    <div id="pastSearches">
     <h1>Past Searches</h1>
      <div class="well">
      </div>
    </div>

    <div id="domains">
      <h1>Domains</h1>
      <div class="well">
      </div>
    </div>

  </div>
</body>
</html>
