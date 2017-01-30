<?php
require 'vendor/autoload.php';

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
	
	$req = mysqli_query ( $db, 'SELECT * FROM POST WHERE ID = "' . $id . '"' );
	
	$row = mysqli_fetch_assoc ( $req );
	
	// $data = array_change_key_case (mysql_fetch_assoc($req));
	// error_log(implode(',', $result));
	
	$app->response->body ( json_encode ( array_change_key_case ( $row ) ) );
	
	$req->close ();
	
	return $app->response;
} );

$app->get ( '/api/v1/comments', function () use ($app) {
	$app->response->setStatus ( 200 );
	
	$app->response->body ( json_encode ( [ ] ) );
	
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