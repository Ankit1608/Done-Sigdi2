const AWS = require('aws-sdk');
const https = require('https');
exports.handler = (event, context, callback) => {
  //Create a random number for otp
  const challengeAnswer = Math.random().toString(10).substr(2, 4);
  const phoneNumber = event.request.userAttributes.phone_number;
  const phone = phoneNumber.substring(3);
  //sns sms
  // const sns = new AWS.SNS({region: 'ap-south-1'});
  // sns.publish(
  //   {
  //     Message: 'your otp: ' + challengeAnswer,
  //     PhoneNumber: phoneNumber,
  //     MessageStructure: 'string',
  //     MessageAttributes: {
  //       'AWS.SNS.SMS.SenderID': {
  //         DataType: 'String',
  //         StringValue: 'AMPLIFY',
  //       },
  //       'AWS.SNS.SMS.SMSType': {
  //         DataType: 'String',
  //         StringValue: 'Transactional',
  //       },
  //     },
  //   },
  //   function (err, data) {
  //     if (err) {
  //       console.log(err.stack);
  //       console.log(data);
  //       return;
  //     }
  //     return data;
  //   },
  // );

  // const rawResponse = fetch(
  //   'https://www.fast2sms.com/dev/bulkV2?authorization=GabAh3ZmD8WTyLQOYq9NftRoUcuC6gepwjzskJHXd74FKlEB51knNVuRZsTbagpLl8JHmDSiUzAXco97&route=dlt&sender_id=SGDHOM&message=123259&variables_values=1111%7C&flash=0&numbers=8686959744',
  //   {
  //     method: 'GET',
  //   },
  // )
  //   .then((data) => {
  //     return data.json();
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     return;
  //   });

  https
    .get(
      `https://www.fast2sms.com/dev/bulkV2?authorization=GabAh3ZmD8WTyLQOYq9NftRoUcuC6gepwjzskJHXd74FKlEB51knNVuRZsTbagpLl8JHmDSiUzAXco97&route=dlt&sender_id=SGDHOM&message=123259&variables_values=${challengeAnswer}%7C&flash=0&numbers=${phone}`,
      (res) => {
        console.log(res.statusCode);
        return;
      },
    )
    .on('error', (e) => {
      console.log(error);
      return;
    });
  //set return params
  event.response.privateChallengeParameters = {};
  event.response.privateChallengeParameters.answer = challengeAnswer;
  event.response.challengeMetadata = 'CUSTOM_CHALLENGE';
  callback(null, event);
};
