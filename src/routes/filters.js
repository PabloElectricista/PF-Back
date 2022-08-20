const router = require('express').Router();
const {filterProductsByName,filterProductsByColor,filterProductsByBrand,filterProductsByRangePrice,filterProductsByStatus,filterByLocation}=require('../controlers/filters/filters')

router.get('/name/:name',filterProductsByName);
router.get('/color/:color',filterProductsByColor);
router.get("/brand/:brand",filterProductsByBrand);
router.get("/price",filterProductsByRangePrice);
router.get("/status/:status",filterProductsByStatus);
router.get("/location/:location",filterByLocation)

module.exports = router;