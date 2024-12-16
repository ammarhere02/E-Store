const express = require('express');
const router2 = express.Router();
const {getsub_category , getsub_categoryById} = require( "../../controllers/subcatogery.js")

router2.get('/', getsub_category);

router2.get('/:id', getsub_categoryById ,(req , res) => {

    const id = req.params.id;
    if (getsub_categoryById) {
        console.log(`Category ID route works! ID: ${id}`);
    } else {
        res.status(500).send("routecatogid is not defined.");
    }
});

module.exports = router2