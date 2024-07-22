import { expect } from 'chai';
import axios from 'axios';

const instanceId = '1103960929';  // ваш реальный idInstance
const token = '0ba2e6b91dfe4f70b40c62a7f6638bd44e725615c48e48ac8d';  // ваш реальный apiTokenInstance

describe('GREEN-API Tests', function() {
    it('should get settings', async function() {
        const response = await axios.get(`https://1103.api.green-api.com/waInstance${instanceId}/getSettings/${token}`);
        expect(response.status).to.equal(200);
    });

    it('should get state instance', async function() {
        const response = await axios.get(`https://1103.api.green-api.com/waInstance${instanceId}/getStateInstance/${token}`);
        expect(response.status).to.equal(200);
    });

    it('should send message', async function() {
        const response = await axios.post(`https://1103.api.green-api.com/waInstance${instanceId}/sendMessage/${token}`, {
            chatId: '123456789@c.us',
            message: 'Hello from GREEN-API'
        });
        expect(response.status).to.equal(200);
    });

    it('should send file by URL', async function() {
        const response = await axios.post(`https://1103.api.green-api.com/waInstance${instanceId}/sendFileByUrl/${token}`, {
            chatId: '123456789@c.us',
            urlFile: 'https://example.com/file.pdf',
            fileName: 'file.pdf',
            caption: 'Here is your file'
        });
        expect(response.status).to.equal(200);
    });
});
