const Review = require("../../models/Review");

const addReview = async (req, res, next) => {
    try {
        const newReview = new Review(req.body);
        const reviewSaved = await newReview.save();
        console.log(reviewSaved);
        res.status(201).json(reviewSaved);
    } catch (error) {
        console.log(error);
        res.send({ error: error.message });

    }
}

module.exports = addReview;