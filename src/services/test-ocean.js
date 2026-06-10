const axios = require("axios");
const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
});

async function test() {
  try {
    console.log(process.env.OCEAN_API_KEY ? "Token Found" : "Token Missing");
const response = await axios.post(
  "https://api.ocean.io/v3/search/companies",
  {
    companiesFilters: {
      industries: {
        industries: ["SaaS"]
      }
    },
    size: 5
  },
  {
    headers: {
      "x-api-token": process.env.OCEAN_API_KEY,
      "Content-Type": "application/json"
    }
  }
);

  console.log("Total Companies:", response.data.total);

response.data.companies.forEach((item, index) => {
  console.log(
    `${index + 1}.`,
    item.company?.name,
    "-",
    item.company?.domain
  );
});

  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}

test();