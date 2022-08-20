const Products = require('../../models/Products')
let currentProducts=[];
async function filterProductsByName(req,res){
    try{
        const{name}=req.params;
        const nameRegExp=new RegExp(name,"i")
        currentProducts=currentProducts.length?currentProducts.filter(p=>nameRegExp.test(p.name)):await Products.find({name:nameRegExp})
        res.status(200).send(currentProducts)
    }catch(error){
        console.log(error);
        res.status(404).send({ error: error.message });
    }
}
async function filterProductsByColor(req,res){
    try{
        const{color}=req.params;
        currentProducts=currentProducts.length?currentProducts.filter(p=>p.color===color):await Products.find({color})
        res.status(200).send(currentProducts)
    }catch(error){
        console.log(error);
        res.status(404).send({ error: error.message });
    }
}
async function filterProductsByBrand(req,res){
    try{
        const{brand}=req.params;
        currentProducts=currentProducts.length?currentProducts.filter(p=>p.brand===brand):await Products.find({brand})
        res.status(200).send(currentProducts)
    }catch(error){
        console.log(error);
        res.status(404).send({ error: error.message });
    }
}
async function filterProductsByRangePrice(req,res){
    try{
        const {min,max}=req.query;
        currentProducts=currentProducts.length?currentProducts.filter(p=>p.price>=min&&price<=max):await Products.find({"price":{
            $lte:max||1000,
            $gte:min||0
        }})
        res.send(currentProducts)
    }catch(error){
        console.log(error);
        res.status(404).send({ error: error.message });
    }
}
async function filterProductsByStatus(req,res){
    try{
        const{status}=req.params;
        console.log(status)
        currentProducts=currentProducts.length?currentProducts.filter(p=>p.status===status):await Products.find({status})
        res.status(200).send(currentProducts)
    }catch(error){
        console.log(error);
        res.status(404).send({ error: error.message });
    }
}
async function filterByLocation(req,res){
    // location
    try{
        const{location}=req.params;
        const locationRegExp=new RegExp(location,"i")
        currentProducts=currentProducts.length?currentProducts.filter(p=>locationRegExp.test(p.location)):await Products.find({location:locationRegExp})
        res.status(200).send(currentProducts)
    }catch(error){
        console.log(error);
        res.status(404).send({ error: error.message });
    }    
}
module.exports={filterProductsByName,filterProductsByColor,filterProductsByBrand,filterProductsByRangePrice,filterProductsByStatus,filterByLocation}