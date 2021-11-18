const express = require("express");
const router = express.Router();
const {addPage} = require('../views')
//const addPage = require(''../view/addPage) does the same this as line 3

router.get('/', (req, res) =>{
    res.send('got to Get /wiki/')
})
router.post('/', (req, res) =>{
    res.send('got to POST /wiki/')
})
router.get('/add', (req, res) =>{
    res.send(addPage())
})

module.exports = router;