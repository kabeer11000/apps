<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$baseURL = $_REQUEST['url'];

function getRequestMethod() {
  return $_SERVER["REQUEST_METHOD"];
}

function getPostData() {
  return http_build_query($_POST);
}


function makeGetRequest($baseURL) {
  $ch = curl_init();
  $fullURL = $baseURL;

  curl_setopt($ch, CURLOPT_URL, $fullURL);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

  $response = curl_exec($ch);
  curl_close($ch);

    if($e = curl_error($ch)) {
        echo $e;
    } else {
    $json = json_decode($response, true);
    return print_r($json);
    }
}

function makePostRequest($baseURL) {
  $ch = curl_init();
  $data = http_build_query($_POST);

  curl_setopt($ch, CURLOPT_URL, $baseURL);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

  $response = curl_exec($ch);
  curl_close($ch);

    if($e = curl_error($ch)) {
        echo $e;
    } else {
    $json = json_decode($response, true);
    return print_r($json);
    }
}

$response = "";
switch (getRequestMethod()) {
  case 'GET':
    $response = makeGetRequest($baseURL);
    break;
  case 'POST':
    $response = makePostRequest($baseURL);
    break;
  default:
    echo "There has been an error";
    return;
}

echo $response;