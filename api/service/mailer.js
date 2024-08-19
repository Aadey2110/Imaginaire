const nodemailer = require("nodemailer");

// Setup Nodemailer transport using environment variables
const transporter = nodemailer.createTransport({
  service: "Gmail", // or 'Outlook', 'Yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send email
async function sendEmail(receiverEmail, message) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: receiverEmail,
    subject: "Your OTP from Imaginaire",
    html: `
        <html>
          <head>
            <style>
              body {
                font-family: 'Montserrat', sans-serif;
                background-color: #333333;
                color: #999999;
                margin: 0;
                padding: 0;
                text-align: center;
              }
              .container {
                width: 80%;
                margin: auto;
                padding: 20px;
                background-color: #444444;
                border-radius: 8px;
              }
              h1 {
                color: #ffffff;
                margin-bottom: 10px;
              }
              p {
                margin: 10px 0;
              }
              .footer {
                margin-top: 20px;
                font-size: 12px;
                color: #666666;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Imaginaire</h1>
              <p>Your OTP is:</p>
              <p><strong>${message}</strong></p>
              <p>It is valid for 30 minutes.</p>
              <div class="footer">
                <p>Imaginaire Inc.</p>
                <p>1234 Fantasy Road, Dreamland</p>
                <p>Email: ${process.env.EMAIL_USER}</p>
              </div>
            </div>
          </body>
        </html>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to:", receiverEmail);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

module.exports = { sendEmail };
