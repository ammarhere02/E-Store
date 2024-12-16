const  router1  = require('./categoryroute/catroute.js');
const  router2  = require('./subcatroute/sub_cateogory_route.js');

const express = require('express');
const router = express.Router();


// Use routers with base Apaths
router.use('/categories', router1); // Attach router1 to "/categories"
router.use('/subcategories', router2); // Attach router2 to "/subcategories"

module.exports = router;
