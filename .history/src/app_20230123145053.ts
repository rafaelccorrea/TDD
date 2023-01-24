import express from 'express';

export const app = express();

app.use(express.json());

app.post('/lesson', (req, res) => {
    return res
});

