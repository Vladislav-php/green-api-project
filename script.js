async function fetchAPI(url, method = 'GET', data = null) {
    try {
        const response = await axios({ method, url, data });
        document.getElementById('response').textContent = JSON.stringify(response.data, null, 2);
    } catch (error) {
        document.getElementById('response').textContent = JSON.stringify(error.response.data, null, 2);
    }
}

function validateForm() {
    const idInstance = document.getElementById('idInstance').value;
    const apiToken = document.getElementById('apiToken').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
    const url = document.getElementById('url').value;
    
    if (!idInstance || !apiToken) {
        alert('Both idInstance and ApiTokenInstance are required!');
        return false;
    }
    return { idInstance, apiToken, phoneNumber, message, url };
}

function getSettings() {
    const { idInstance, apiToken } = validateForm();
    if (idInstance && apiToken) {
        const url = `https://api.green-api.com/waInstance${idInstance}/getSettings/${apiToken}`;
        fetchAPI(url);
    }
}

function getStateInstance() {
    const { idInstance, apiToken } = validateForm();
    if (idInstance && apiToken) {
        const url = `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiToken}`;
        fetchAPI(url);
    }
}

function sendMessage() {
    const { idInstance, apiToken, phoneNumber, message } = validateForm();
    if (idInstance && apiToken && phoneNumber && message) {
        const url = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiToken}`;
        const data = {
            chatId: `${phoneNumber}@c.us`,
            message: message
        };
        fetchAPI(url, 'POST', data);
    } else {
        alert('Phone number and message are required!');
    }
}

function sendFileByUrl() {
    const { idInstance, apiToken, phoneNumber, url } = validateForm();
    if (idInstance && apiToken && phoneNumber && url) {
        const apiUrl = `https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiToken}`;
        const data = {
            chatId: `${phoneNumber}@c.us`,
            urlFile: url,
            fileName: url.split('/').pop(),
            caption: 'Here is your file'
        };
        fetchAPI(apiUrl, 'POST', data);
    } else {
        alert('Phone number and URL are required!');
    }
}
