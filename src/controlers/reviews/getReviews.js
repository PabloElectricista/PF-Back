const Review = require("../../models/Review");

const getReviews = async (req, res, next) => {
    try {
        const reviews = await Review.find()
        console.log(reviews);
        res.json(reviews)
    } catch (error) {
        console.log(error);
        res.send({ error: error.message });
    }
}

module.exports = getReviews;