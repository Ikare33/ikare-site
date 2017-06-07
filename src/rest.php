<?php
require 'vendor/autoload.php';

class Post implements JsonSerializable
{

    public $id;
    public $title;
    public $description;
    public $body;
    public $image;
    public $oldurl;
    public $comments;

    public function __construct($id, $title, $description, $body, $image, $oldurl)
    {
        $this->id = $id;
        $this->title = $title;
        $this->description = $description;
        $this->body = $body;
        $this->image = $image;
        $this->oldurl = $oldurl;
    }
    
    public function addComment($comment){
    	$this->comments[] = $comment;
    }
   

   	public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'body' => $this->body,
            'image' => $this->image,
            'oldurl' => $this->oldurl,
            'comments' => $this->comments
        ];
    }
}

class Comment implements JsonSerializable
{

	public $name;
	public $text;
	public $date;

	public function __construct($name, $text, $date)
	{
		$this->name = $name;
		$this->text = $text;
		$this->date = $date;
	}
	 

	public function jsonSerialize()
	{
		return [
				'name' => $this->name,
				'text' => $this->text,
				'date' => $this->date
		];
	}
}

$app = new \Slim\Slim ();

$app->get ( '/api/v1/trello/technique', function () use ($app) {
	
	$adresse = 'https://trello.com/b/OnG9cP32.js';
	// $proxy='http://proxyaws.unedic.fr:8080';
	stream_context_set_default ( array (
			'http' => array (
					// 'proxy' => "http://proxyaws.unedic.fr:8080",
					'request_fulluri' => true 
			) 
	)
	// 'header' => "Proxy-Authorization: Basic $auth"
	// Remove the 'header' option if proxy authentication is not required
	
	 );
	
	// $sFile = file_get_contents($adresse);
	
	$curl = curl_init ();
	
	curl_setopt ( $curl, CURLOPT_URL, $adresse );
	curl_setopt ( $curl, CURLOPT_COOKIESESSION, true );
	curl_setopt ( $curl, CURLOPT_RETURNTRANSFER, true );
	
	$data = curl_exec ( $curl );
	curl_close ( $curl );
	
	if ($data === false) {
		$app->response->setStatus ( 500 );
		$app->response->body ( 'file_get_contents error: ' . curl_error ( $curl ) );
	} else {
		$app->response->setStatus ( 200 );
		$app->response->body ( $data );
	}
} );

$app->get ( '/api/v1/trello/nekogami', function () use ($app) {
	
	$adresse = 'https://trello.com/b/uJfhaQPf.js';
	// $proxy='http://proxyaws.unedic.fr:8080';
	stream_context_set_default ( array (
			'http' => array (
					// 'proxy' => "http://proxyaws.unedic.fr:8080",
					'request_fulluri' => true 
			) 
	) )
	// 'header' => "Proxy-Authorization: Basic $auth"
	// Remove the 'header' option if proxy authentication is not required
	
	;
	
	// $sFile = file_get_contents($adresse);
	
	$curl = curl_init ();
	
	curl_setopt ( $curl, CURLOPT_URL, $adresse );
	curl_setopt ( $curl, CURLOPT_COOKIESESSION, true );
	curl_setopt ( $curl, CURLOPT_RETURNTRANSFER, true );
	
	$data = curl_exec ( $curl );
	curl_close ( $curl );
	
	if ($data === false) {
		$app->response->setStatus ( 500 );
		$app->response->body ( 'file_get_contents error: ' . curl_error ( $curl ) );
	} else {
		$app->response->setStatus ( 200 );
		$app->response->body ( $data );
	}
} );

$app->get ( '/api/v1/trello/autres', function () use ($app) {
	
	$adresse = 'https://trello.com/b/AdJDswC1.js';
	// $proxy='http://proxyaws.unedic.fr:8080';
	stream_context_set_default ( array (
			'http' => array (
					// 'proxy' => "http://proxyaws.unedic.fr:8080",
					'request_fulluri' => true 
			) 
	) )
	// 'header' => "Proxy-Authorization: Basic $auth"
	// Remove the 'header' option if proxy authentication is not required
	
	;
	
	// $sFile = file_get_contents($adresse);
	
	$curl = curl_init ();
	
	curl_setopt ( $curl, CURLOPT_URL, $adresse );
	curl_setopt ( $curl, CURLOPT_COOKIESESSION, true );
	curl_setopt ( $curl, CURLOPT_RETURNTRANSFER, true );
	
	$data = curl_exec ( $curl );
	curl_close ( $curl );
	
	if ($data === false) {
		$app->response->setStatus ( 500 );
		$app->response->body ( 'file_get_contents error: ' . curl_error ( $curl ) );
	} else {
		$app->response->setStatus ( 200 );
		$app->response->body ( $data );
	}
} );

$app->get ( '/api/v1/posts/', function () use ($app) {
	
	$result = [ ];
	
	// on se connecte à MySQL
	try {
		$db = mysqli_connect ( "localhost:3306", "root", "", "ikare" );
		
		$req = mysqli_query ( $db, 'SELECT * FROM post' );
		
		while ( $row = mysqli_fetch_assoc ( $req ) ) {
			$result [] = array_change_key_case ( $row );
		}
		
		$req->close ();
		
		$app->response->setStatus ( 200 );
		
		$app->response->body ( json_encode ( $result ) );
	} catch ( Exception $e ) {
		$app->response->setStatus ( 500 );
		echo mysqli_connect_error ();
		echo $db->error;
	}
	
	// $data = array_change_key_case (mysql_fetch_assoc($req));
	// error_log(implode(',', $result));
	
	return $app->response;
} );


$app->get ( '/api/v1/posts/:id', function ($id) use ($app) {
	$app->response->setStatus ( 200 );
    
    // on se connecte à MySQL
	$db = mysqli_connect ( 'localhost:3306', 'root', '', 'ikare' );
	
	// on sélectionne la base
	// mysql_select_db('ikare',$db);
	
	$req = mysqli_query ( $db, 'SELECT * FROM post WHERE ID = "' . $id . '"' );
	
        if($req != false){
		    $result = mysqli_fetch_object ( $req );
		    
		    $post = new Post($result->id, $result->title, $result->description, $result->body, $result->image, $result->oldurl);
	    	
        }else{
            $app->response->body ($id);
            return $app->response;
        }
	
	$req->close ();
	
	// $data = array_change_key_case (mysql_fetch_assoc($req));
	// error_log(implode(',', $result));
	
    $req = mysqli_query ( $db, 'SELECT * FROM comment WHERE post_id = "' . $id . '" ORDER BY date ASC');
	
    if($req != false){
    	while($comment = mysqli_fetch_object($req))
    	{
    		$post->addComment(new Comment($comment->name, $comment->text, $comment->date)); 
    	}    
    	
    }
    
  	$app->response->body ( json_encode($post)  );
	
	$req->close ();
	
	return $app->response;
} );

$app->get ( '/api/v1/comments', function () use ($app) {
	$app->response->setStatus ( 200 );
	
	$app->response->body ( json_encode ( [ ] ) );
	
	return $app->response;
} );

$app->post ( '/api/v1/comments', function () use ($app) {
	$app->response->setStatus ( 200 );

	$comment = json_decode($app->request->getBody());
	
	$db = mysqli_connect ( 'localhost:3306', 'root', '', 'ikare' );
	$text = 'INSERT INTO comment (name,text,date,post_id) VALUES ("' . $comment->name . '","'  . $comment->text . '","' . $comment->date . '","' . $comment->post_id . '")';
	$req = mysqli_query ( $db, 'INSERT INTO comment (name,text,date,post_id) VALUES ("' . $comment->name . '","'  . $comment->text . '","' . $comment->date . '","' . $comment->post_id . '")');
	
	if(!$req){
		$app->response->setStatus ( 500 );
		$app->response->body(mysqli_error($db) . " " . $text);
	}else{
		$req = mysqli_query ( $db, 'SELECT * FROM comment WHERE id='.mysqli_insert_id($db));
		$app->response->body(json_encode(mysqli_fetch_assoc ( $req )));
	
		$req->close ();
	}
	
	return $app->response;
} );

$app->get ( '/api/v1/', function () use ($app) {
	$app->response->setStatus ( 200 );
	
	$app->response->body ( 'Bienvenue sur l\'API d\'Ikare' );
	
	return $app->response;
} );

$app->run ();

$app->error ( function (Exception $e) use ($app) {
	echo "my exception print here : " . $e;
} );
?>