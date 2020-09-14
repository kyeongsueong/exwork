<!DOCTYPE html>
<html>
<head>
	<title>search</title>
	<meta charset="utf-8">
	<meta name="viewport" content="user-scalable=no, width=device-width">
	<link rel="stylesheet" type="text/css" href="./index.css">
	<style type="text/css">
		body{
			background-color: #e6f0ff;
		}
		button{
			margin-top: 7px;
			background-color: #0066ff;
			color: white;
			border-radius: 15px;
		}
		.views{
			display: flex;
			flex-direction: column-reverse;
		}
		.yerar{
			text-align: center;
		}
	</style>
</head>
<body>
	<form action="./search.php" method="POST" id="fom">
		<input type="number" name="nY" class="yerar" id="ny" style="width: 55%;">년
		<input type="number" name="nM" class="yerar" id="nm" style="width: 55%;">월
		<input type="number" name="nD" class="yerar" id="nd" style="width: 55%;">일
		<p>
			<input type="text" name="searchs" style="width: 55%;" id="searchs">
			<button onclick="user_Search()">검색</button>
			<br>
			<span id="suer_finde"></span>
		</p>
		
	</form>
	
	<br>
	<div class="views">
		<?php
			$servername = "localhost";
			$username = "root";
			$password = "123456";
			$dbname = "patrol";

			// Create connection
			$conn = new mysqli($servername, $username, $password, $dbname);
			// Check connection
			if ($conn->connect_error) {
			  die("Connection failed: " . $conn->connect_error);
			}
			
			$search = $_POST[searchs];
			$nY = $_POST[nY];
			$nM = $_POST[nM];
			$nD = $_POST[nD];
			if ($search != "") {
				//$sql = "SELECT * FROM exwork WHERE findecontent LIKE '%$search%'";
				$sql = "SELECT * FROM exwork WHERE nY='$nY' AND nM='$nM' AND nD='$nD' AND findecontent LIKE '%$search%'";
			}else{
				$sql = "SELECT no, nY, nM, nD, worktime, patrolcontent, nosun FROM exwork";
			}
			$result = $conn->query($sql);

			if ($result->num_rows > 0) {
			  // output data of each row
			  while($row = $result->fetch_assoc()) {
			    echo "<button onclick='dataloadf(". json_encode($row["patrolcontent"]) .")'>" . "ID ".$row["no"]." : " . $row["nY"]. " 년 " . $row["nM"]. " 월 " . $row["nD"]. " 일 " . $row["worktime"]. " " . $row["nosun"] ."</button>" . "<br>";
			  }
			} else {
			  echo "0 검색결과";
			}
			$conn->close();
		?>
	</div>
</body>
	<script type="text/javascript">
		function dataloadf(data) {
			localStorage.setItem("now_save_data", data);
			console.log(localStorage.getItem("now_save_data"));
			sessionStorage.setItem("searchBt", "inBt");
		}
	</script>

	<script type="text/javascript">
		class dates{
			constructor(){
				this.day = new Date();
				this.nE = this.day.getDate();
				this.nY = this.day.getFullYear();
				this.nM = this.day.getMonth();
				this.nHours = this.day.getHours();
				this.nMinut = this.day.getMinutes();
			}
			dtSet(){
				document.getElementById('ny').value = this.nY;
				document.getElementById('nm').value = this.nM + 1;
				document.getElementById('nd').value = this.nE;
			}
		}
		const mydate = new dates();
		mydate.dtSet();

		function user_Search() {
			let user_search = document.getElementById('searchs').value;
			sessionStorage.setItem("user_search", user_search);
		}
		let a = sessionStorage.getItem("user_search");
		if (a != null) {
			document.getElementById('suer_finde').innerHTML = `이전 검색 내용: ${a}`;
		}
	</script>
</html>