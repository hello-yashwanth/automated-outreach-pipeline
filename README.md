# Automated Outreach Pipeline

## Overview

This project automates the process of discovering potential leads and decision makers for outreach campaigns.

## Workflow

1. Input a company domain.
2. Fetch similar companies using Ocean.io.
3. Discover decision makers using Oppora.
4. Retrieve LinkedIn profile information.
5. Optionally find emails and send outreach emails through Brevo.

## Technologies Used

* Node.js
* Ocean.io API
* Oppora API
* Brevo API
* Axios
* Dotenv

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file:

```env
OCEAN_API_KEY=your_key
OPPORA_API_KEY=your_key
BREVO_API_KEY=your_key
```

## Run

```bash
node index.js
```

## Output

* Similar companies
* Decision makers
* LinkedIn profile URLs
* Outreach workflow results
