<?php if ( ! deined('BASEPATH')) exit('No direct script access allowed');

class Wordinfo extends CI_Controller {

	public function index()
	{
    $this->config->load('secrets');
    $response = array();

    $word = $this->input->$get('word');
    $word = explode(' ', $word);
    $word = $word[0];


    $rhymes = getRhymes($word);

    array_push($response['rhymes'], $rhymes);
    array_push($response[''], $rhymes);

    return json_encode($response);
	}

  public function getRhymes($word)
  {
    $rhymingWords = json_decode((file_get_contents("http://rhymebrain.com/talk?function=getRhymes&word=".$word)));
    return $rhymingWords;
  }

  public function getDef($word)
  {
          
  }

  public function getDomains($word)
  {

  }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
