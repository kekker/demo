const { API_MESSAGING_AUTH_BASIC_KEY } = process.env;

import BackendFetcher from "../managers/BackendFetcher";

exports.handler  = function(event, context, callback) {
    const payload = JSON.parse(event.body).payload;
    const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Basic " + API_MESSAGING_AUTH_BASIC_KEY,
    };
    console.log('Submission-created lambda triggered');
    BackendFetcher.post('api/messages/', {payload, headers})
        .then((body) => {
            const { data } = body;
            const { errors } = data;
            if (errors) {
                console.log('failed');
                return callback(null, {
                    statusCode: error.status,
                    body: JSON.stringify({
                        message: error.message,
                        error: error,
                    })
                })
            }
            console.log('saved');
            return callback (null, {
                statusCode: 200,
                body: 'Submission saved successfully'
            })
        }
    )
};
