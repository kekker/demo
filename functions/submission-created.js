const { API_MESSAGING_AUTH_BASIC_KEY } = process.env;
const http = require('http');

const baseBackendUrl = 'demoplatform1.kekker.com';
const messageRoute = '/api/messages';


exports.handler  = async (event, context, callback) => {
    const payload = JSON.stringify(JSON.parse(event.body).payload);
    const headers = {
            "Content-Type": "application/json",
            "Content-Length": payload.length,
            "Authorization": "Basic " + API_MESSAGING_AUTH_BASIC_KEY,
    };
    const options = {
        hostname: baseBackendUrl,
        path: messageRoute,
        method: 'POST',
        headers
    };

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

    req.write(payload);
    req.end();

    callback(null, {
        statusCode: 200
    })
};
