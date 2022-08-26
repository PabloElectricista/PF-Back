const Review = require("../../models/Review");

const getReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        res.json(review);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('error al buscar el review')
    }
}

module.exports = getReview;