const  express = require ('express')
const router1 = express.Router();
const {routecatog , routecatogid} = require( "../../controllers/controlcategory.js")
const {getsub_categoryById} = require("../../controllers/subcatogery");

router1.get("/", routecatog);

router1.get('/:id', routecatogid ,(req , res) => {

    const id = req.params.id;
    if (getsub_categoryById) {
        console.log(`Category ID route works! ID: ${id}`);
    } else {
        res.status(500).send("routecatogid is not defined.");
    }
});

module.exports = router1