<?php
$host = 'localhost';
$dbuser = 'salesfro_fu';
$dbpw = 'Hpxwi37Gd2hC9Ng';
$dbname = 'salesfro_test';
$link = mysqli_connect($host,$dbuser,$dbpw,$dbname);
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];

if($link){
    mysqli_query($link, 'SET NAMES utf8');
    echo "連線success";
}else{
    echo "第二次不成功".mysqli_connect_error();
}
$sql = "INSERT INTO `ora2_test`(`name`,`tel`,`email`)VALUE('$name','$tel','$email');";
$result = mysqli_query($link,$sql);

if(mysqli_affected_rows($link)>0){
    $new_id = mysqli_insert_id($link);
    echo "新增成功 id是{$new_id}";
}elseif(mysqli_affected_rows($link)==0){
    "無新增";
}else{
    echo "{$sql}失效". mysqli_error($link);
}


mysqli_close($link);

?>