const express = require('express')
const app = express();
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/ussd/post', (req, res) => {
  return res.status(200).send('Hello Post')
})

app.post('/ussd', (req, res) => {
  // Read the variables sent via POST from our API
  console.log(req.body)
  const {
      sessionId,
      serviceCode,
      phoneNumber,
      text,
  } = req.body;

  let response = '';

  if (text == '') {
      // This is the first request. Note how we start the response with CON
      response = `CON What would you like to check
      1. My account
      2. My phone number`;
  } else if ( text == '1') {
      // Business logic for first level response
      response = `CON Choose account information you want to view
      1. Account number`;
  } else if ( text == '2') {
      // Business logic for first level response
      // This is a terminal request. Note how we start the response with END
      response = `END Your phone number is ${phoneNumber}`;
  } else if ( text == '1*1') {
      // This is a second level response where the user selected 1 in the first instance
      const accountNumber = 'ACC100101';
      // This is a terminal request. Note how we start the response with END
      response = `END Your account number is ${accountNumber}`;
  }

  // Send the response back to the API
  res.set('Content-Type: text/plain');
  res.send(response);
});
 
module.exports = app;