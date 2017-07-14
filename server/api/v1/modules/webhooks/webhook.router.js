const express = require('express');

const router = express.Router();
const webhookcontroller = require('./webhook.controller');


router.post('/:token', (req, res) => {

    const token = req.params.token;
    try {

        webhookcontroller.sendToolDataToCommunity(token, (err, result) => {

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