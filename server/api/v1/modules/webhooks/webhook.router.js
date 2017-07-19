const express = require('express');

const router = express.Router();
const webhookcontroller = require('./webhook.controller');

router.post('/tools/:token', (req, res) => {
    console.log('1.Webhook called');
    const token = req.params.token;
    try {
        webhookcontroller.handleToolEvent(token, req.body, (err, result) => {
            if (err) {
                res.status(500).send('Internal Server Error');
            }
            else {
                res.send('successfully sent');
            }
        });
    }
    catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;