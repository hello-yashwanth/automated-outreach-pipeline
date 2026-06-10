const axios = require("axios");
require("dotenv").config();

async function findPeople() {
  try {
    const response = await axios.post(
      "https://api.oppora.ai/api/v1/public/discover/people",
      {
        title: ["CEO", "Founder", "VP Sales"],
        company_name: ["PandaDoc"]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPPORA_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log(Object.keys(response.data));
    response.data.data.forEach((person, index) => {
  console.log(`\n${index + 1}. ${person.full_name}`);
  console.log(`Title: ${person.title}`);
  console.log(`LinkedIn: ${person.linkedin_url}`);
  console.log(`Location: ${person.location}`);
});

  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}

module.exports = { findPeople };