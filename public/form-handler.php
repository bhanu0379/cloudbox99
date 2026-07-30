<?php
header('Content-Type: application/json');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/config.php';  // Load SMTP credentials
require __DIR__ . '/vendor/autoload.php';  // Use Composer autoloader

$mail = new PHPMailer(true); 

try {
    $mail->SMTPDebug = 0;

    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = SMTP_USER;
    $mail->Password = SMTP_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;  // Changed to 587 for STARTTLS (465 is for SSL)
    $mail->Timeout = 10; // Set timeout to prevent long waiting
    $mail->SMTPKeepAlive = true; // Keep connection open for batch emails

    // Detect if PHP discarded POST data because the uploaded file exceeded `post_max_size`
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && empty($_POST) && empty($_FILES) && isset($_SERVER['CONTENT_LENGTH']) && $_SERVER['CONTENT_LENGTH'] > 0) {
        echo json_encode(["error" => "File Too Large. The uploaded file exceeds the server limit. Please upload a smaller file (Max 1MB)."]);
        exit;
    }

    // Validate and sanitize form data
    $name = isset($_POST['name']) ? filter_var($_POST['name'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : 'N/A';
    $email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone'], ENT_QUOTES, 'UTF-8') : 'N/A';

    // Validate email
    if (!$email) {
        echo json_encode(["error" => "Invalid Email Format. Please provide a valid email address."]);
        exit;
    }

    // Sender & Recipient
    $mail->setFrom(SMTP_USER, $name);
    $mail->addAddress('hr@cloudbox99.com');
    $mail->addReplyTo($email);

    // Email Content
    $mail->isHTML(true);
    $mail->Subject = "New Job Application from " . htmlspecialchars($name);
    $mail->Body = "<h3>New Job Application Details</h3>
                   <p><strong>Full Name:</strong> " . htmlspecialchars($name) . "</p>
                   <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
                   <p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>
                   <p>Attached is the applicant's resume for your review.</p>";

    // ✅ Ensure File Upload Security with File Size Limit
    if (isset($_FILES['resume']) && $_FILES['resume']['error'] == UPLOAD_ERR_OK) {
        $allowed_extensions = ['pdf', 'doc', 'docx'];
        $file_extension = strtolower(pathinfo($_FILES['resume']['name'], PATHINFO_EXTENSION));

        // 🔹 Limit File Size (1MB Max)
        $maxFileSize = 1 * 1024 * 1024; // 1MB
        if ($_FILES['resume']['size'] > $maxFileSize) {
            echo json_encode(["error" => "File size exceeds 1MB limit."]);
            exit;
        }

        if (!in_array($file_extension, $allowed_extensions)) {
            echo json_encode(["error" => "Invalid file type. Only PDF, DOC, and DOCX are allowed."]);
            exit;
        }

        // Attach file
        $mail->addAttachment($_FILES['resume']['tmp_name'], $_FILES['resume']['name']);
    }

    // Send Email
    $mail->send();
    echo json_encode(["success" => true, "message" => "Your application has been submitted successfully."]);

} catch (Exception $e) {
    echo json_encode(["error" => "Mailer Error: " . $mail->ErrorInfo]);
}
?>
