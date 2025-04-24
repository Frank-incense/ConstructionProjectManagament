const express = require('express')
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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

app.post('/ussd', (req, res) => {
  let questions = [
    "Are you wearing your full PPE?",
    "Have you inspected your tools & equipment?",
    "Are there any new hazards observed today? ",
    "Are all safety barriers and signage in place? ", 
  ]
  let count = 0
  let canA = false
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
      2. leave`;
      count = 0;
      canA = true;
  } else if ( text == '1') {
      // Business logic for first level response
      response = `CON ${questions[count]}
      1. yes
      2. no`; 
      count++
  }else if ( text == '2') {
    // Business logic for first level response
    response = `CON ${questions[count]}
    1. yes
    2. no`; 
    count++
  }else{
    console.log('did not get to the end!!1')
    return res.status(500).send('did not get to the end!!1')
  }

  // Send the response back to the API
  res.set('Content-Type: text/plain');
  return res.send(response);
});
 
module.exports = app;