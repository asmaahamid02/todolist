<?php
//pass cors
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding');

//create mock data
$users = array(
    array(
        'id' => 1,
        'name' => 'Asmaa Hamid',
        'email' => 'asmaa@gmail.com',
        'password' => '123456',
        'token' => '',
        'expiration' => '',
    ),
    array(
        'id' => 1,
        'name' => 'John Doe',
        'email' => 'john.doe@example.com',
        'password' => '123456',
        'token' => '',
        'expiration' => '',
    ),
    array(
        'id' => 2,
        'name' => 'Jane Doe',
        'email' => 'jane.doe@example.com',
        'password' => '123456',
        'token' => '',
        'expiration' => '',
    ),
);

if (isset($_POST['email']) && isset($_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    //check if user exists
    $user = array_filter($users, function ($user) use ($email, $password) {
        return $user['email'] == $email && $user['password'] == $password;
    });

    if (count($user) > 0) {
        $user = array_values($user)[0];
        $user['token'] = md5($user['email'] . $user['password']);
        $user['expiration'] = date('Y-m-d H:i:s', strtotime('+1 day'));

        echo json_encode(
            array(
                'status' => 'success',
                'data' => array(
                    'id' => $user['id'],
                    'name' => $user['name'],
                    'email' => $user['email'],
                    'token' => $user['token'],
                    'expiration' => $user['expiration'],
                ),
            ),
        );
    } else {
        echo json_encode(array('status' => 'error', 'data' => 'Invalid email or password'));
    }
} else {
    echo json_encode(array('status' => 'error', 'data' => 'You must provide email and password'));
}
