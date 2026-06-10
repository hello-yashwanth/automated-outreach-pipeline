const axios = require("axios");
require("dotenv").config();

async function testOppora() {
  try {
    const response = await axios.get(
      "https://api.oppora.ai/api/v1/public/me",
      {
        headers: {
          Authorization: `Bearer ${process.env.OPPORA_API_KEY}`
        }
      }
    );

    console.log(response.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}

testOppora();