<?php
 
require 'vendor/autoload.php';

$app = new \Slim\Slim();
 
$app->get('/api/v1/posts/', function() use($app) {
	$app->response->setStatus(200);

	// on se connecte à MySQL 
	$db = mysql_connect('localhost:3306', 'root', ''); 

	// on sélectionne la base 
	mysql_select_db('test',$db); 
	
	$req = mysql_query('SELECT * FROM POST')  or die('Erreur SQL ! '.mysql_error());
	
	$result = [];
	
	while ($row = mysql_fetch_assoc($req)) {
		$result[] = array_change_key_case ($row);
	}
	
	//$data = array_change_key_case (mysql_fetch_assoc($req));
	//error_log(implode(',', $result));
	
	$app->response->body(json_encode($result));
	
	return $app->response;
});

$app->get('/api/v1/posts/:id', function($id) use($app) {
	$app->response->setStatus(200);

	// on se connecte à MySQL 
	$db = mysql_connect('localhost:3306', 'root', ''); 

	// on sélectionne la base 
	mysql_select_db('test',$db); 
	
	$req = mysql_query('SELECT * FROM POST WHERE ID = '.$id)  or die('(id: '.$id.') Erreur SQL ! '.mysql_error());
	
	$row = mysql_fetch_assoc($req);
	
	//$data = array_change_key_case (mysql_fetch_assoc($req));
	//error_log(implode(',', $result));
	
	$app->response->body(json_encode(array_change_key_case ($row)));
	
	return $app->response;
});

$app->get('/api/v1/comments', function() use($app) {
	$app->response->setStatus(200);

	$app->response->body(json_encode([]));
	
	return $app->response;
});

$app->get('/api/v1/', function() use($app) {
	$app->response->setStatus(200);
	
	$app->response->body('Bienvenue sur l\'API d\'Ikare');
	
	return $app->response;
}); 

$app->run();

?>