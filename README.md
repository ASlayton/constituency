# Constituency
## Description
Users can register an account to view the most recent bills on the congress floor.  The user can vote and comment on individual bills, as well as view more info on the bill and the congressman that sponsors it.  The user can compare their votes with the members that represent their congressional district, as well as see official statements on bills from said officials.  This project was created to reduce lobbyist influence in politics so that members of congress can represent their constituents interest.

[View deployed site](https://my-project-1513728693887.firebaseapp.com)
## Features
- View bills on congress floor
- Vote on bills
- Comment on bills
- View most popular bills
- View congress' votes on bills and compare them to your own
- View the top contributors to a representative's campaign
#### Technologies
- React.js
- Firebase (Authentication, Database, Hosting)
- amCharts
- Bootstrap 3.3
- APIs
  - [ProPublica Congress API](https://www.propublica.org/datastore/api/propublica-congress-api)
  - [Google Civic Info API](https://developers.google.com/civic-information/)
  - [OpenSecrets.org API](https://www.opensecrets.org)

## How to Run
1. Clone repo
1. Obtain API keys from links above
1. Rename `src/constants.example.js` to `src/constants.js`
1. Add keys to `src/constants.js`
1. Run `npm install` to install dependencies
1. Run `npm start` to host locally