

const baseBackendUrl = 'http://demoplatform1.kekker.com';
const messageRoute = '/api/messages';

export default class BackendFetcher {
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

