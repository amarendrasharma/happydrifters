<?php

return array(
    'pdf' => array(
        'enabled' => true,
        'binary'  => config('app.env') == 'local' ? '/usr/local/bin/wkhtmltopdf' : '/usr/local/bin/wkhtmltopdf-amd64',
        'timeout' => false,
        'options' => array(),
        'env'     => array(),
    ),
    'image' => array(
        'enabled' => true,
        'binary'  => '/usr/local/bin/wkhtmltoimage',
        'timeout' => false,
        'options' => array(),
        'env'     => array(),
    ),


);
