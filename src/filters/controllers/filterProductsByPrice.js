const Products=require('../../models/Products')

async function filterByRangePrice(req,res){
    try{
        const {min,max}=req.query;
        const foundProducts=await Products.find({"price":{
            $lte:max||1000,
            $gte:min||0
        }})
        console.log(min+"-"+max)
        res.send(foundProducts)
    }catch(error){
        console.log(error);
        res.status(404).send({ error: error.message });
    }

}

module.exports=filterByRangePrice;