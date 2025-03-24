const express= require("express");

const router= express.Router();
const zod= require("zod");
const {Hotel}= require("../db");

const hotelData= zod.object({
    hotelname: zod.string(),
    price: zod.number(),
    description: zod.string(),
})

router.post("/add", async(req,res) => {
    const {success}= hotelData.safeParse(req.body);
    if(!success) {
        return res.status(411).json({
            error: "Inputs incorrects"
        })
    }

    const hotel= await Hotel.create({
        hotelname: req.body.hotelname,
        price: req.body.price,
        description: req.body.description,
    })
    
    res.json({
        message: "Hotel Added succesfully"
    })
})

router.get("/hotels", async (req, res) => {
    try {
      const hotels = await Hotel.find();
      return res.json({
        hotels
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch hotels" });
    }
});

module.exports = router;