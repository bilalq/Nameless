<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Wordinfo extends CI_Controller {

  public function getDef() {
    $WORDNIK_KEY = $this->config->item('wordnik_key');
    $word = $this->input->get('word');
    $defURL = "http://api.wordnik.com/v4/word.json/".$word."/definitions?includeRelated=false&includeTags=false&limit=3&useCanonical=true&api_key=".$WORDNIK_KEY;
    $definitions = json_decode(file_get_contents($defURL));
    echo json_encode($definitions);
  }

  public function getSyns()
  {
    $WORDNIK_KEY = $this->config->item('wordnik_key');
    $word = $this->input->get('word');
    $synURL = "http://api.wordnik.com//v4/".$word.".json/word/related?limit=15&type=synonym&api_key=".$WORDNIK_KEY;
    $synonyms = file_get_contents($synURL);
    echo $synonyms;
  }

  public function getDomains($word)
  {

  }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
