const axios = require("axios");

async function getLookalikeCompanies() {
  const response = await axios.post(
    "https://api.ocean.io/v3/search/companies",
    {
      companiesFilters: {
        industries: {
          industries: ["SaaS"]
        }
      },
      size: 10
    },
    {
      headers: {
        "x-api-token": process.env.OCEAN_API_KEY,
        "Content-Type": "application/json"
      }
    }
  );

  return response.data.companies;
}

module.exports = { getLookalikeCompanies };