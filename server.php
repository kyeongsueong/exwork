<?php 
	if (isset($_FILES['Emergency_img1'])) {
		ini_set("display_errors","1");
		$uploaddir = './img/';
		$uploadfile = $uploaddir . basename($_FILES['Emergency_img1']['name']);
		move_uploaded_file($_FILES['Emergency_img1']['tmp_name'] , $uploadfile);
	}

	if (isset($_FILES['Emergency_img2'])) {
		ini_set("display_errors","1");
		$uploaddir1 = './img/';
		$uploadfile1 = $uploaddir1 . basename($_FILES['Emergency_img2']['name']);
		move_uploaded_file($_FILES['Emergency_img2']['tmp_name'] , $uploadfile1);
	}
?>
<?php
	if (isset($_POST["Emergency_Datas"])) {
		$datas = $_POST["Emergency_Datas"];
		$dataArry = explode("^,*",$datas);
		$dataName = $dataArry[0]."txt";
		echo file_put_contents("./data/".$dataName,$datas);
		header('Location: ./index.html');
	}
	
 ?>