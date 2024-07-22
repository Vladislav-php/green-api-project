const { expect } = require('chai');
const axios = require('axios');

describe('GREEN-API Tests', function() {
    it('should get settings', async function() {
        const response = await axios.get('https://api.green-api.com/waInstance/testInstance/getSettings/testToken');
        expect(response.status).to.equal(200);
    });

    it('should get state instance', async function() {
        const response = await axios.get('https://api.green-api.com/waInstance/testInstance/getStateInstance/testToken');
        expect(response.status).to.equal(200);
    });

    it('should send message', async function() {
        const response = await axios.post('https://api.green-api.com/waInstance/testInstance/sendMessage/testToken', {
            chatId: '123456789@c.us',
            message: 'Hello from GREEN-API'
        });
        expect(response.status).to.equal(200);
    });

    it('should send file by URL', async function() {
        const response = await axios.post('https://api.green-api.com/waInstance/testInstance/sendFileByUrl/testToken', {
            chatId: '123456789@c.us',
            urlFile: 'https://example.com/file.pdf',
            fileName: 'file.pdf',
            caption: 'Here is your file'
        });
        expect(response.status).to.equal(200);
    });
});
