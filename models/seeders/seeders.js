const {Sequelize, DataTypes} = require( 'sequelize')

const sequelizeConnect = new Sequelize("shope" , "root" , "ammar12345678" ,
    {
        host: "127.0.0.1",
        dialect: "mysql",
    })

//
// sequelizeConnect.authenticate()
// .then(()=>
// {
//     console.log("successfully authenticated");
// })
// .catch((err)=>{
//     console.log("authentication failed" , err);
// })


 const categories = sequelizeConnect.define("categories", {

    category_id:
        {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    category_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
})

 const sub_category = sequelizeConnect.define("sub_category", {

    sub_category_id:
        {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    sub_category_name:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category_id:
            {
                type: DataTypes.INTEGER,
            },


})

 const products = sequelizeConnect.define("products", {

    id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    name:
        {
            type: DataTypes.STRING,
        },
    sub_category_id:
        {
            type: DataTypes.INTEGER,
        }
})
//creating relations with foreign keys

categories.hasMany(sub_category)
sub_category.belongsTo(categories)


sub_category.hasMany(products)
products.belongsTo(sub_category)

module.exports = {categories , sub_category , products}