const Products = require('../models/Products')
//const currentProducts=new Products;


async function findProducts(property){
    const foundProducts=await Products.find(property);
    //await currentProducts.collection.bulkWrite(foundProducts)
   // console.log(foundProducts)

    return foundProducts;
}
module.exports={findProducts}