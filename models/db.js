const {Sequelize} = require( 'sequelize')
const {categories, sub_category , products} = require( "./seeders/seeders.js")

const sequelizeConnect = new Sequelize("shope" , "root" , "ammar12345678" ,
    {
        host: "127.0.0.1",
        dialect: "mysql",
    })

 const categoryData = [
    { category_id: 1, category_name: 'TV & Home Appliances' },
    { category_id: 2, category_name: 'Men Fashion' },
    { category_id: 3, category_name: 'Women Fashion' },
    { category_id: 4, category_name: 'Sports & Outdoors' }
];

for(const cat of categoryData)
{
  const catog = categories.create(cat)
    console.log(catog)
}
const sub_categoriesData = [
    { sub_category_id: 1, sub_category_name: 'Washing Machine', category_id: 1 },
    { sub_category_id: 2, sub_category_name: 'TV Accessories', category_id: 1 },
    { sub_category_id: 3, sub_category_name: 'Home Audio Theater', category_id: 1 },
    { sub_category_id: 4, sub_category_name: 'Shirts', category_id: 2 },
    { sub_category_id: 5, sub_category_name: 'T-Shirts', category_id: 2 },
    { sub_category_id: 6, sub_category_name: 'Shoes', category_id: 2 },
    { sub_category_id: 7, sub_category_name: 'Makeup', category_id: 3 },
    { sub_category_id: 8, sub_category_name: 'Evening Gown', category_id: 3 },
    { sub_category_id: 9, sub_category_name: 'Cricket Equipment', category_id: 4 },
];

const productData = [
    { name: 'Samsung Washer', sub_category_id: 1 },
    { name: 'LG Refrigerator', sub_category_id: 2 },
    { name: 'Sony TV Remote', sub_category_id: 3 },
    { name: 'Bose Sound System', sub_category_id: 3 },
    { name: 'Formal Shirt', sub_category_id: 4 },
    { name: 'Casual T-Shirt', sub_category_id: 5 },
    { name: 'Nike Shoes', sub_category_id: 6 },
    { name: 'Lipstick', sub_category_id: 7 },
    { name: 'Evening Gown', sub_category_id: 8 },
    { name: 'Cricket Bat', sub_category_id: 9 },
    { name: 'Hiking Backpack', sub_category_id: 9 },
    { name: 'Indesit Washer', sub_category_id: 1 },
    { name: 'Whirlpool Refrigerator', sub_category_id: 2 },
    { name: 'Universal TV Stand', sub_category_id: 2 },
    { name: 'JBL Speakers', sub_category_id: 3 },
    { name: 'Checkered Shirt', sub_category_id: 4 },
    { name: 'Graphic T-Shirt', sub_category_id: 5 },
    { name: 'Adidas Shoes', sub_category_id: 6 },
    { name: 'Foundation', sub_category_id: 7 },
    { name: 'Party Dress', sub_category_id: 8 },
];


for (const sub of sub_categoriesData)
{
   export const createdSubCategory = await sub_category.create(sub);
    console.log(createdSubCategory.toJSON());
}

for (const prod of productData) {
    const createdProduct = await products.create(prod);
    console.log(createdProduct.toJSON());
}
//LOOP TO ACCESS THE VALUES OF SUB_CATEGORIES

sequelizeConnect.sync()
    .then(()=> {
        console.log("Database synced successfully");
    })
