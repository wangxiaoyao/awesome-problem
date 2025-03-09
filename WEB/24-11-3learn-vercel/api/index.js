const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const app = express()
app.use(express.json())

app.use(express.static('public'));

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://apiok.us/api/cbea';

// API 路由
app.get('/api/hello', async (req, res) => {
    try {
        const result = {
            code: 200,
            result: 'hello world',
            message: 'success'
        }
        res.json(result);
    } catch (error) {
        console.error('API Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to generate email' });
    }
});

app.get('/api/generate-email', async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/generate/v1`, {
            params: { apikey: API_KEY, type: '*' }
        });
        res.json(response.data);
    } catch (error) {
        console.error('API Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to generate email' });
    }
});

module.exports = app;

// export default function handle(req,res){
//     if(req.method === 'GET'){
//         res.status(200).json('数据')
//     }
// }
