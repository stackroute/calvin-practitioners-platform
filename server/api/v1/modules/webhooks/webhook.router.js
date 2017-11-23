const express = require('express');

const router = express.Router();
const webhookcontroller = require('./webhook.controller');

router.post('/tools/:domain/:toolid/:token', (req, res) => {
    console.log('Webhook called for ', req.params.domain, ' for tool ', req.params.toolid, ' got header ',req.headers);
    const token = req.params.token;
    try {
        webhookcontroller.handleToolEvent(token, req.body, (err, result) => {
            if (err) {
                console.log('error is ',err);
                res.status(500).send('Internal Server Error');
            }
            else {
                res.send('successfully sent');
            }
        });
    }
    catch (err) {
        console.log('err is catch',err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;