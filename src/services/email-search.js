const axios = require("axios");
require("dotenv").config();

async function findEmail() {
  try {
    const response = await axios.post(
      "https://api.oppora.ai/api/v1/public/email/search",
      {
        first_name: "Sergey",
        last_name: "Barysiuk",
        domain: "pandadoc.com"
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPPORA_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log(response.data);

  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}

findEmail();