<?php echo "string2"; ?>
<?php
$nY = $_POST[nY];
$nM = $_POST[nM];
$nD = $_POST[nD];
$worktime = $_POST[worktime];
$userNames = $_POST[userNames];
$userName2 = $_POST[userName2];
$patrolcontent = $_POST[patrolcontent];
$findecontent = $_POST[findecontent];
$nosun = $_POST[nosun];

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

$sql = "INSERT INTO exwork (nY, nM, nD, worktime, userNames, userName2, patrolcontent, findecontent, nosun)
VALUES ('$nY', '$nM', '$nD', '$worktime', '$userNames', '$userName2', '$patrolcontent', '$findecontent', '$nosun')";

if ($conn->query($sql) === TRUE) {
  echo "data save";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>

<script type="text/javascript">
	window.location.href='../index.html';
</script>