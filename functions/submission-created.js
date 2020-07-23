/* eslint-disable camelcase */
const { API_MESSAGING_AUTH_BASIC_KEY, BASE_BACKEND_URL } = process.env;
const http = require('http');

const messageRoute = '/api/messages';
const questionRoute = '/api/feedbacks';

const dispatchForm = payload => {
  const { form_name } = payload;
  const options = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${API_MESSAGING_AUTH_BASIC_KEY}`,
    hostname: BASE_BACKEND_URL,
    method: 'POST',
  };

  if (form_name === 'invitation') {
    const { email, name } = payload;
    const dataForSending = JSON.stringify({
      email,
      fullName: name,
    });
    options['Content-Length'] = Buffer.byteLength(dataForSending);
    options.path = messageRoute;
    return [dataForSending, options];
  }

  if (form_name === 'question') {
    const {
      fullName, email, subject, comment
    } = payload;
    const dataForSending = JSON.stringify({
      email,
      fullName,
      theme: subject,
      text: comment
    });
    options['Content-Length'] = Buffer.byteLength(dataForSending);
    options.path = questionRoute;
    return [dataForSending, options];
  }

  throw new Error('Undefined form name');
};

const logNewSubmission = data => {
  console.log('Received submission from ');
  console.log(`With payload: ${data}`);
  console.log('Content-Length: ', Buffer.byteLength(data));
};


exports.handler = async (event, context, callback) => {
  const payload = JSON.parse(event.body).payload.data;

  try {
    const [dataForSending, options] = dispatchForm(payload);
    logNewSubmission(dataForSending);

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
  } catch (err) {
    console.log('Error Occured:', err);
  }
};
