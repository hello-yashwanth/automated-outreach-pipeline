const axios = require("axios");
require("dotenv").config();

async function sendEmail() {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Yaswanth",
          email: "your_verified_email@example.com"
        },
        to: [
          {
            email: "your_test_email@gmail.com"
          }
        ],
        subject: "Automated Outreach Test",
        htmlContent: "<h1>Hello from Brevo API</h1>"
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );
console.log("Brevo Key Loaded:", !!process.env.BREVO_API_KEY);
console.log(process.env.BREVO_API_KEY?.substring(0, 8));
    console.log(response.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}

sendEmail();