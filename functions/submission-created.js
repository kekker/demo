const { API_MESSAGING_AUTH_BASIC_KEY, BASE_BACKEND_URL } = process.env;
const http = require('http');

const messageRoute = '/api/messages';


exports.handler  = async (event, context, callback) => {
    const payload = JSON.parse(event.body).payload.data;
    const { ip, user_agent } = payload;
    const { email, fullName, phone, occupation, comment } = payload;
    const dataForSending = JSON.stringify({
        "email": email,
        "fullName": fullName,
        "phone": phone,
        "occupation": occupation,
        "comment": comment
    });

    const headers = {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(dataForSending),
            "Authorization": "Basic " + API_MESSAGING_AUTH_BASIC_KEY,
    };

    const options = {
        hostname: BASE_BACKEND_URL,
        path: messageRoute,
        method: 'POST',
        headers
    };

    console.log("Received submission from ");
    console.log(`Ip: ${ip}, User Agent: ${user_agent}`);
    console.log(`With payload: ${dataForSending}`);
    console.log('Content-Length: ',  Buffer.byteLength(dataForSending));

    let req = http.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`);

        res.setEncoding('utf8');

        res.on('end', function () {
            callback(null, {
                statusCode: 200
            })
        });

        res.on('data', (d) => {
            process.stdout.write(d);
        })
    });

    req.on('error', (error) => {
        console.log('Problem with request:', error.message);
    });

    req.write(dataForSending);
    req.end();

    callback(null, {
        statusCode: 200,
        data: dataForSending
    })
};
