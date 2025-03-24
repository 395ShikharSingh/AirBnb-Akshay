const express= require("express");
const hotelRouter= require("./addHotel");

const router= express.Router();

router.use("/hotel", hotelRouter)

module.exports = router;