const { API_MESSAGING_AUTH_BASIC_KEY } = process.env;
const baseBackendUrl = 'http://demoplatform1.kekker.com';
const messageRoute = '/api/messages';

class BackendFetcher {
    static getBackendUrl(url) {
        return `${baseBackendUrl}${url}`;
    }

    static setup() {
        // Get a CSRF Token from a db with Cookies
    }

    static post(url, params = {}) {
        const {
            payload: data,
            headers,
            serialize = true,
        } = params;

        // Get CSRFToken
        return fetch(this.getBackendUrl(url), {
            method: 'POST',
            // credentials: 'include',
            // mode: 'cors',
            headers: {
                ...headers,
                // 'X-CSRFToken': CSRFToken,
            },
            body: serialize ? JSON.stringify({ data }) : data,
        }).then((response) => response.json())
    }
}

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
