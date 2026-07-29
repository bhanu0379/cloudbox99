<?php
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

    // Validate and sanitize form data
    $name = isset($_POST['name']) ? filter_var($_POST['name'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : 'N/A';
    $email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone'], ENT_QUOTES, 'UTF-8') : 'N/A';

    // Validate email
    if (!$email) {
        die("Invalid email format.");
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
            die("File size exceeds 1MB limit.");
        }

        if (!in_array($file_extension, $allowed_extensions)) {
            die("Invalid file type. Only PDF, DOC, and DOCX are allowed.");
        }

        // Attach file
        $mail->addAttachment($_FILES['resume']['tmp_name'], $_FILES['resume']['name']);
    }

    // Send Email
    $mail->send();
    echo '<div style="
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    font-family: Arial, sans-serif;">
    <div style="
        background-color: #d4edda;
        color: #155724;
        padding: 20px;
        border-radius: 10px;
        border: 1px solid #c3e6cb;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        max-width: 400px;">
        <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" width="50" height="50" alt="Success">
        <h2 style="margin-top: 10px;">Success!</h2>
        <p>Your application has been submitted successfully.</p>
        <a href="/" style="
            display: inline-block;
            margin-top: 10px;
            padding: 10px 15px;
            background-color: #28a745;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;">Back to Home</a>
    </div>
</div>';

} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
}
?>
