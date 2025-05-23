const express = require('express');
const sendSMS = require('./sendSMS');
const mongoose = require('mongoose');
const router = require('./routes')
const workOrder = require('./dataSchema/workOrderScheme');
require('dotenv').config();

const app = express();
app.use(express.json());

const port = 3001;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/incoming-messages', (req, res) => {
    const data = req.body;
    console.log(`Received message: \n ${data}`);
    res.sendStatus(200);
});

app.use('/', router)

sendSMS();
let questions = [
  "Are you wearing your full PPE?",
  "Have you inspected your tools & equipment?",
  "Are there any new hazards observed today? ",
  "Are all safety barriers and signage in place? ", 
  
]
let count = 0;
let feedback = {
  "phoneNumber": "",
  "sessionId":"",
  "feedbacks": [

  ]
}
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
  }else if(text == '2'){
    response = `END bye ${phoneNumber} `; 
  }else if(count === 4){
    answer=text;
    const arr = answer.split('*');
    arr.forEach((element,index) => {
      feedback.feedbacks.push(
        {
          "id": index,
          "question": questions[index],
          "answer": element
        }
      )
    });
    feedback.phoneNumber = phoneNumber;
    feedback.sessionId = sessionId;
    console.log(feedback)
    response = `END bye ${phoneNumber} `; 
  }else if ( text == '1') {
      // Business logic for first level response
      response = `CON ${questions[count]}
      1. yes
      2. no`; 
      count++;
  }else if ( text.split('*')[count] == '1') {      
    // Business logic for first level response
    response = `CON ${questions[count]}
    1. yes
    2. no`; 
    count++;
  }else if ( text.split('*')[count] == '2') {      
    // Business logic for first level response
    response = `CON ${questions[count]}
    1. yes
    2. no`; 
    count++;
  }else{
    response = `END bye ${phoneNumber} `; 
  };
  // Send the response back to the API
  res.set('Content-Type: text/plain');
  res.send(response);
});
 


app.post('/ussd/job', async(req, res) =>{

  let response = '';

  const {
    sessionId,
    serviceCode,
    phoneNumber,
    text,
  } = req.body;
  if (text == '') { 
    response = `CON would you like to request job details?
    yes: enter user-number
    2. No`


    count = 0; 
  }
  else if(text == 2) {

    response = `END goodbye!`

  }
  else if(!(text == 2)){

    console.log("testing to see if it got to this point...")
    
    const workorderDetails = await workOrder.find({userNumber: text});

    if (workorderDetails.length===0) {
      response = `END you have no work orders!`
    }else{
      response = `END ${workorderDetails.map((order)=>{
        return `${order.description}-${order.status}`;
      })}`
    }
    
  }
 
  res.set('Content-Type: text/plain');
  res.send(response);
})
 
module.exports = app;