<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitf2c11798feba6222bbc921aef5f6697a
{
    public static $files = array (
        '7b11c4dc42b3b3023073cb14e519683c' => __DIR__ . '/..' . '/ralouphie/getallheaders/src/getallheaders.php',
        'c964ee0ededf28c96ebd9db5099ef910' => __DIR__ . '/..' . '/guzzlehttp/promises/src/functions_include.php',
        '6e3fae29631ef280660b3cdad06f25a8' => __DIR__ . '/..' . '/symfony/deprecation-contracts/function.php',
        '37a3dc5111fe8f707ab4c132ef1dbc62' => __DIR__ . '/..' . '/guzzlehttp/guzzle/src/functions_include.php',
        'ec85479731216c5e754c5df3e8b335d0' => __DIR__ . '/..' . '/nelexa/enum/src/functions.php',
    );

    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'Psr\\SimpleCache\\' => 16,
            'Psr\\Log\\' => 8,
            'Psr\\Http\\Message\\' => 17,
            'Psr\\Http\\Client\\' => 16,
        ),
        'N' => 
        array (
            'Nelexa\\GPlay\\' => 13,
            'Nelexa\\' => 7,
        ),
        'K' => 
        array (
            'Kabeersnetwork\\AppstoreScraper\\' => 31,
        ),
        'G' => 
        array (
            'GuzzleHttp\\Psr7\\' => 16,
            'GuzzleHttp\\Promise\\' => 19,
            'GuzzleHttp\\' => 11,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Psr\\SimpleCache\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/simple-cache/src',
        ),
        'Psr\\Log\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/log/src',
        ),
        'Psr\\Http\\Message\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-factory/src',
            1 => __DIR__ . '/..' . '/psr/http-message/src',
        ),
        'Psr\\Http\\Client\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-client/src',
        ),
        'Nelexa\\GPlay\\' => 
        array (
            0 => __DIR__ . '/..' . '/nelexa/google-play-scraper/src',
        ),
        'Nelexa\\' => 
        array (
            0 => __DIR__ . '/..' . '/nelexa/enum/src',
        ),
        'Kabeersnetwork\\AppstoreScraper\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'GuzzleHttp\\Psr7\\' => 
        array (
            0 => __DIR__ . '/..' . '/guzzlehttp/psr7/src',
        ),
        'GuzzleHttp\\Promise\\' => 
        array (
            0 => __DIR__ . '/..' . '/guzzlehttp/promises/src',
        ),
        'GuzzleHttp\\' => 
        array (
            0 => __DIR__ . '/..' . '/guzzlehttp/guzzle/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'B' => 
        array (
            'Bramus' => 
            array (
                0 => __DIR__ . '/..' . '/bramus/router/src',
            ),
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitf2c11798feba6222bbc921aef5f6697a::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitf2c11798feba6222bbc921aef5f6697a::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInitf2c11798feba6222bbc921aef5f6697a::$prefixesPsr0;
            $loader->classMap = ComposerStaticInitf2c11798feba6222bbc921aef5f6697a::$classMap;

        }, null, ClassLoader::class);
    }
}
