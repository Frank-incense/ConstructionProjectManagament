const express = require('express')
const app = express();
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.post('/incoming-messages', (req, res) => {
    const data = req.body;
    console.log(`Received message: \n ${data}`);
    res.sendStatus(200);
});

const sendSMS = require('./sendSMS');

sendSMS();
let questions = [
  "Are you wearing your full PPE?",
  "Have you inspected your tools & equipment?",
  "Are there any new hazards observed today? ",
  "Are all safety barriers and signage in place? ", 
  
]
let count = 0
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
      1. Safety standup;
      2. leave`
      count = 0;
  } else if ( text == '1') {
      // Business logic for first level response
      response = `CON${questions[count]}
      1. yes
      2. no`; 
      count++
  }
  // } else if ( text == '1*1') {
  //     // This is a second level response where the user selected 1 in the first instance
  //     const accountNumber = 'ACC100101';
  //     // This is a terminal request. Note how we start the response with END
  //     response = `END Your account number is ${accountNumber}`;
  //     count++
  // }

  // Send the response back to the API
  res.set('Content-Type: text/plain');
  res.send(response);
});
 
module.exports = app;