const {findProducts}=require('../../crud/findProducts')

async function filterProducts(req,res){
    try{
        const currentProducts=await findProducts(req.query)
        res.status(200).send(currentProducts)
    }catch(error){
        console.log(error);
        res.status(404).send({ error: error.message });
    }
}

module.exports={filterProducts}




