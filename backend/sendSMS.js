const AfricasTalking = require('africastalking');

// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
  apiKey: 'atsk_b0ea29764cf597ff0c28cb43f4748abd8447352d89637f632170e62815934105ad5a9938', 
  username: 'sandbox'
});


module.exports = async function sendSMS() { 
    // TODO: Send message
    try {
        const result = await africastalking.SMS.send({
          to: '+254745411366', 
          message: 'second try',
          from: '45411'
        });
        console.log(result);
      } catch(ex) {
        console.error(ex);
      } 

};