const Products = require('../models/Products')

async function findProductsByName(name){
    const foundProducts=await Products.find({name}) 
    return foundProducts;
}
async function findProducts(property){
    console.log(property)
    const foundProducts=await Products.find(property) 
    console.log("Desde searchProducts")
    return foundProducts;
}
module.exports={findProductsByName,findProducts}