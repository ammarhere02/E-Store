
const {sub_category}= require ( "../models/seeders/seeders.js")



 const getsub_category = async (req, res) => {
    const  categoryId  = req.params.id;

    const subcat = await sub_category.findAll({
        where: { category_id: categoryId },
    });

    console.log("Success", subcat);
    res.status(200).json(subcat);
};

 const getsub_categoryById = async (req, res) => {

     const id = req.params.id;

     const subcatid = await sub_category.findByPk(id);
     console.log("Success in finding subcategory ID", subcatid);
     res.status(200).json(subcatid);
 }


 module.exports = {getsub_category , getsub_categoryById}