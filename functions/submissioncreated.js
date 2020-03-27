const { API_MESSAGING_AUTH_BASIC_KEY } = process.env;

import BackendFetcher from "../managers/BackendFetcher";

exports.handler  = async (event, context, callback) => {
    const payload = JSON.parse(event.body).payload;
    const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Basic " + API_MESSAGING_AUTH_BASIC_KEY,
    };
    console.log('Submission-created lambda triggered');
    let response;
    try {
        response = await BackendFetcher.post('api/messages/', {payload, headers});
    } catch (error) {
        console.log('Error sending form', error);
        return {
            statusCode: e.code || 500,
            body: JSON.stringify({
                error: e.message
            })
        }
    }

    return {
        statusCode: 200,
        body: 'Request send'
    }
};
