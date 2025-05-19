const otpMail = (otp) => {
  return `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>OTP Verification Email</title>
    <style>
      body {
        background-color: #ffffff;
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.4;
        color: #333333;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
      }
      .logo {
        max-width: 200px;
        margin-bottom: 20px;
      }
      .message {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .body {
        font-size: 16px;
        margin-bottom: 20px;
      }
      .cta {
        display: inline-block;
        padding: 10px 20px;
        background-color: #FFD60A;
        color: #000000;
        text-decoration: none;
        border-radius: 5px;
        font-size: 16px;
        font-weight: bold;
        margin-top: 20px;
      }
      .support {
        font-size: 14px;
        color: #999999;
        margin-top: 20px;
      }
      .highlight {
        font-weight: bold;
        font-size: 24px;
        background-color: blue;
        display: inline;
        padding: 2px;
        color: white;
      }
      .underline {
        color: red;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="message"><u class="underline">OTP Verification Email</u></div>
      <div class="body">
        <p>Dear User,</p>
        <p>Welcome to <b>Recruitesy</b>! To finish setting up your account, please enter the following <b>OTP</b> (One-Time Password) to verify your registration:</p>
        <div class="highlight">${otp}</div>
        <p>Your OTP will expire in 5 minutes. If you did not initiate this request, you can safely ignore this message.  
        After successful verification, you’ll be able to explore all the features available on our platform.</p>
      </div>
      <div class="support">
        Have questions or need help? Don’t hesitate to contact us at  
        <a href="mailto:amanverma740895@gmail.com">amanverma740895@gmail.com</a> — we're happy to assist you!
      </div>
    </div>
  </body>
  </html>`;
};

export default otpMail;
