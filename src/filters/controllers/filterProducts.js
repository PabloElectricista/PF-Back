const {findProducts}=require('../../crud/findProducts')
async function filterProducts(req,res){
    try{
        //busca el elemento de la database que coincida con la propiedad pasada por query 
        const foundProducts=await findProducts(req.query);
        res.status(200).send(foundProducts)
    }catch(error){
        console.log(error);
        res.status(404).send({ error: error.message });
    }
}

module.exports={filterProducts}