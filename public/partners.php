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

// Sanitize inputs
$name    = htmlspecialchars(trim($input['name'] ?? ''), ENT_QUOTES, 'UTF-8');
$company = htmlspecialchars(trim($input['company'] ?? ''), ENT_QUOTES, 'UTF-8');
$email   = filter_var(trim($input['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars(trim($input['message'] ?? ''), ENT_QUOTES, 'UTF-8');

// Validate
if (empty($name)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter your name.']);
    exit();
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit();
}

// Setup PHPMailer
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    $mail->Timeout    = 10;
    $mail->SMTPKeepAlive = true;

    $mail->setFrom(SMTP_USER, 'Cloudbox99 Website');
    $mail->addAddress('cs@cloudbox99.com', 'Cloudbox99 CS');
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = "New Partner Application from $name" . ($company ? " ($company)" : '');
    $mail->Body = "
        <h3 style='color:#1a1a2e;'>New Partner Program Application</h3>
        <table style='border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;'>
            <tr><td style='padding:8px;border:1px solid #ddd;'><strong>Name</strong></td><td style='padding:8px;border:1px solid #ddd;'>$name</td></tr>
            <tr><td style='padding:8px;border:1px solid #ddd;'><strong>Company</strong></td><td style='padding:8px;border:1px solid #ddd;'>$company</td></tr>
            <tr><td style='padding:8px;border:1px solid #ddd;'><strong>Email</strong></td><td style='padding:8px;border:1px solid #ddd;'>$email</td></tr>
            <tr><td style='padding:8px;border:1px solid #ddd;'><strong>Message</strong></td><td style='padding:8px;border:1px solid #ddd;'>$message</td></tr>
        </table>
    ";
    $mail->AltBody = "Name: $name\nCompany: $company\nEmail: $email\nMessage: $message";

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Application submitted successfully.']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mailer error: ' . $mail->ErrorInfo]);
}
?>
