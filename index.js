require("dotenv").config();

const { getLookalikeCompanies } = require("./src/services/ocean");
const { findPeople } = require("./src/services/oppora");

const { log } = require("./src/utils/logger");

log("Starting Outreach Pipeline...");
async function runPipeline() {
  try {
    console.log("Starting Outreach Pipeline...\n");

  
    const companies = await getLookalikeCompanies();

    console.log("Companies Found:");
    companies.forEach((company, index) => {
      console.log(
        `${index + 1}. ${company.company?.name} - ${company.company?.domain}`
      );
    });

  
    console.log("\nFinding Decision Makers...\n");

    await findPeople();

    console.log("\n Pipeline Completed Successfully!");

  } catch (error) {
    console.error("Pipeline Error:", error.message);
  }
}

runPipeline();