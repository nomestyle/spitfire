import { testString } from '../settings';
const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>
        res.status(200).json({message: testString})
);

module.exports = router;
