const { API_MESSAGING_AUTH_BASIC_KEY, BASE_BACKEND_URL } = process.env;
const http = require('http');

const feedbackRoute = '/api/feedback';


exports.handler = async (event, context, callback) => {
  const payload = JSON.parse(event.body).payload.data;
  const { ip, user_agent } = payload;
  const {
    fullName,
    email,
    theme,
    text
  } = payload;
  const dataForSending = JSON.stringify({
    fullName,
    email,
    theme,
    text
  });

  const headers = {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(dataForSending),
    Authorization: `Basic ${API_MESSAGING_AUTH_BASIC_KEY}`,
  };

  const options = {
    hostname: BASE_BACKEND_URL,
    path: feedbackRoute,
    method: 'POST',
    headers
  };

  console.log('Received question from ');
  console.log(`Ip: ${ip}, User Agent: ${user_agent}`);
  console.log(`With payload: ${dataForSending}`);
  console.log('Content-Length: ', Buffer.byteLength(dataForSending));

  const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.setEncoding('utf8');

    res.on('end', () => {
      callback(null, {
        statusCode: 200
      });
    });

    res.on('data', (d) => {
      process.stdout.write(d);
    });
  });

  req.on('error', (error) => {
    console.log('Problem with request:', error.message);
  });

  req.write(dataForSending);
  req.end();

  callback(null, {
    statusCode: 200,
    data: dataForSending
  });
};
