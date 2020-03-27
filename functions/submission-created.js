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
    try {
        await BackendFetcher.post('api/messages/', {payload, headers});

        return {
            statusCode: 200,
            body: 'Request send'
        }
    } catch (error) {
        return {
            statusCode: e.code,
            body: e.message
        }
    }
};
