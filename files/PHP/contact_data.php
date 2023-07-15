<?php

// Connection Detail
$server_name = "localhost";
$username = "root";
$password = "";
$database = "portfolio";

// Create connection
$conn = mysqli_connect($server_name, $username, $password, $database);

// Check connection
if (!$conn) {

    // When Connection Failed
    die ("Connection Failed : " . mysqli_connect_error());

}

// When established Connection 

// Work - When Click on Submit button which name is save 
if(isset($_POST['save'])) {

    // Some initialization
    $org_name = $_POST['org_name'];
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $phone = $_POST['phone'];
    $msg = $_POST['msg'];

    //SQL Query
    $sql_query = "INSERT INTO contact (Organization_name,Sender_Name,Email,Mobile,Note) 
    VALUES ('$org_name','$name','$mail','$phone','$msg')";

    //Sql code error free
    if (mysqli_query($conn, $sql_query)) 
    {
        echo '<script type="text/javascript">';
        echo 'alert("Successfully Shared!");';
        echo '</script>';

    } else {
        echo "Some error in SQL Code";
    }
} 
else 
{
    // Error in Sql Query 
    echo "Error : " . $sql . "" . mysqli_error($conn);
}
mysqli_close($conn);
?>