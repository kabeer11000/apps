<?php

require_once '../vendor/autoload.php';
require_once './crawler/Scraper.php';
header("content-type: application/json");
// Create a Router
$router = new \Bramus\Router\Router();
$gplay = new \Nelexa\GPlay\GPlayApps();
$router->get('/app/{package}', function($package) use ($gplay) {
    /* Get App Info */
    $appInfo = $gplay->getAppInfo($package);
    $v2Info = $appInfo->jsonSerialize();
    $google = new GooglePlay();
    $app = $google->parseApplication($package);
    $permissions = $google->parsePerms($package);
    $app['poster'] = null; // $v2Info['cover'];
    echo json_encode(array('app' => $app, 'app_v2' => $v2Info, 'permissions' => $permissions));
});
$router->get('/home', function () use ($gplay) {
    $apps = $gplay->getTopSellingFreeApp();
    $response = [];
    foreach ($apps as $app) {
        $response[] = $app->jsonSerialize();
    }
    echo json_encode($response);
});
$router->get('/similar/{package}', function($package) use ($gplay) {
    /* Get category */
    $similarApps = $gplay->getSimilarApps($package, $limit = isset($_GET['l']) ? (int) $_GET['l'] : \Nelexa\GPlay\GPlayApps::UNLIMIT);
    $response = [];
    foreach ($similarApps as $app) {
        $response[] = $app->jsonSerialize();
    }
    echo json_encode($response);
});
$router->get('/search/{query}', function($query) use ($gplay) {
    /* Get category */
    $apps = $gplay->search($query, $limit = isset($_GET['l']) ? (int) $_GET['l'] : 50);
    $response = [];
    foreach ($apps as $app) {
        $response[] = $app->jsonSerialize();
    }
    echo json_encode($response);
});

$router->run();
