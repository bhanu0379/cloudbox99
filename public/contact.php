<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/config.php';
require __DIR__ . '/vendor/autoload.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Read JSON body (from fetch) or fallback to POST form data
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    $input = $_POST;
}

// Sanitize inputs — matching old contact.php fields exactly
$first_name   = htmlspecialchars(trim($input['first_name'] ?? ''), ENT_QUOTES, 'UTF-8');
$last_name    = htmlspecialchars(trim($input['last_name']  ?? ''), ENT_QUOTES, 'UTF-8');
$email        = filter_var(trim($input['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone        = htmlspecialchars(trim($input['phone']   ?? ''), ENT_QUOTES, 'UTF-8');
$select_price = htmlspecialchars(trim($input['select_price'] ?? $input['need'] ?? ''), ENT_QUOTES, 'UTF-8');
$company      = htmlspecialchars(trim($input['company'] ?? ''), ENT_QUOTES, 'UTF-8');
$comments     = htmlspecialchars(trim($input['comments'] ?? $input['message'] ?? ''), ENT_QUOTES, 'UTF-8');

// Validate — same rules as old contact.php
if (empty($first_name)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter your first name.']);
    exit();
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit();
}
if (empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter your phone number.']);
    exit();
}
if (empty($comments)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter your message.']);
    exit();
}

// Setup PHPMailer — same SMTP settings as old contact.php
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;
    $mail->Timeout    = 10;
    $mail->SMTPKeepAlive = true;

    $mail->setFrom(SMTP_USER, $first_name);
    $mail->addAddress('cs@cloudbox99.com');          // same recipient as old contact.php
    $mail->addReplyTo($email, $first_name);

    // Email content — same structure/labels as old contact.php
    $mail->isHTML(true);
    $mail->Subject = "New Contact Form Submission from $first_name";
    $mail->Body = "
        <h3>Contact Details</h3>
        <p><strong>First Name:</strong> $first_name</p>
        <p><strong>Last Name:</strong> $last_name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Plan / Interest:</strong> $select_price</p>
        <p><strong>Company:</strong> $company</p>
        <p><strong>Message:</strong> $comments</p>
    ";
    $mail->AltBody = "First Name: $first_name\nLast Name: $last_name\nEmail: $email\nPhone: $phone\nPlan/Interest: $select_price\nCompany: $company\nMessage: $comments";

    if ($mail->send()) {
        echo json_encode(['success' => true, 'message' => 'Email sent successfully.']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Error! Unable to send email.']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mailer Error: ' . $mail->ErrorInfo]);
}
?>
