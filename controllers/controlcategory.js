const {categories} = require ( "../models/seeders/seeders.js")

//send the data to the router so routes can be seen clean
console.log(categories)
 const routecatog = async(req, res ) => {


    const getcatog = await categories.findAll()
    res.status(200).json(getcatog)
    console.log(getcatog)

}

 const routecatogid = async(req, res) => {
    const id = req.params.id;
    const getcatogid = await  categories.findByPk(id)
     res.status(200).json(getcatogid)
    console.log("successfully got the id of the category" , getcatogid)
}

module.exports = {routecatog, routecatogid}
