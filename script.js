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
    if (!idInstance || !apiToken) {
        alert('Both idInstance and ApiTokenInstance are required!');
        return false;
    }
    return { idInstance, apiToken };
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
    const { idInstance, apiToken } = validateForm();
    if (idInstance && apiToken) {
        const url = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiToken}`;
        const data = {
            chatId: "123456789@c.us", // Replace with actual chat ID
            message: "Hello from GREEN-API"
        };
        fetchAPI(url, 'POST', data);
    }
}

function sendFileByUrl() {
    const { idInstance, apiToken } = validateForm();
    if (idInstance && apiToken) {
        const url = `https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiToken}`;
        const data = {
            chatId: "123456789@c.us", // Replace with actual chat ID
            urlFile: "https://example.com/file.pdf",
            fileName: "file.pdf",
            caption: "Here is your file"
        };
        fetchAPI(url, 'POST', data);
    }
}
