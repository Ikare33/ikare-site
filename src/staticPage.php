<?php 

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

$id = $_GET['id'];      

// on se connecte à MySQL
        $db = mysqli_connect ( 'localhost:3306', 'root', '', 'ikare' );
    
        // on sélectionne la base
        // mysql_select_db('ikare',$db);
    
        $req = mysqli_query ( $db, 'SELECT * FROM post WHERE ID = "' . $id . '"' );
    
        if($req != false){
            $result = mysqli_fetch_object ( $req );
    
            $post = new Post($result->id, $result->title, $result->description, $result->body, $result->image, $result->oldurl);
    
        }
    
        $req->close ();
        
        makePage($post, "http://test.i-kare.fr");
    
 function makePage($data, $siteRoot) {
    ?>
    <!DOCTYPE html>
    <html>
    <head>
        <meta property="og:url" content="<?php echo $siteRoot . "/post/" . $data->id; ?>" />
        <meta property="og:title" content="<?php echo $data->title; ?>" />
        <meta property="og:description" content="<?php echo $data->description; ?>" />
        <meta property="og:image" content="<?php echo $siteRoot . $data->image; ?>" />
        <meta property="og:width" content="200px" />
        <meta property="og:height" content="200px" />
        <!-- etc. -->
    </head>
    <body>
        <p><?php echo $data->title; ?></p>
        <img src="<?php echo $siteRoot . $data->image; ?>">
        <div><?php echo $data->body; ?></div>
    </body>
    </html>
<?php
}