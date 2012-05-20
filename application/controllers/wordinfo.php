<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Wordinfo extends CI_Controller {

  public function getDef() {
    $WORDNIK_KEY = $this->config->item('wordnik_key');
    $word = $this->input->get('word');
    $defURL = "http://api.wordnik.com/v4/word.json/".$word."/definitions?includeRelated=false&includeTags=false&limit=3&useCanonical=true&api_key=".$WORDNIK_KEY;
    $definitions = json_decode(file_get_contents($defURL));
    echo json_encode($definitions);
  }

  public function getSyns() {
    $WORDNIK_KEY = $this->config->item('wordnik_key');
    $word = $this->input->get('word');
    $synURL = "http://api.wordnik.com/v4/word.json/".$word."/related?limit=12&type=synonym&api_key=".$WORDNIK_KEY;
    $synonyms = file_get_contents($synURL);
    echo $synonyms;
  }

  public function getRand() {
    $WORDNIK_KEY = $this->config->item('wordnik_key');
    $randURL = "http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&minLength=3&api_key=".$WORDNIK_KEY;
    $randomWord = file_get_contents($randURL);
    echo $randomWord;
  }

  public function getDomains() {
    $word = $this->input->get('word');
    $domains = file_get_contents("http://domai.nr/api/json/search?q=".$word);
    echo $domains;
  }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
