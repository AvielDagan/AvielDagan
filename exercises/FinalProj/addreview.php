<?php
   include "config.php";

  $rank = $_POST('rank');
  $comment = $_POST('comment');
  $title = $_POST('title');
  
  $model = mysqli_query($connection, $query);
  if(!$model){
      echo "NULL";
  }
  else{
    $result = [];
    while ($row = mysqli_fetch_assoc($model)) {
        $result[] = $row;
    }

    $res = json_encode($result);
    echo $res;

  }
  mysqli_close($connection);
?>