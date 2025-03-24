import express from "express";
import Bathroom from "../models/Bathroom.js";

const bathroomRouter = express.Router();


/**
 * POST / create a new bathroom
 */
bathroomRouter.post("/", async (req, res) => {  //
    const bathroom = new Bathroom(req.body);
    await bathroom.save();
    res.json(bathroom);
  });

/**
 * GET / gets all bathrooms
 */
bathroomRouter.get("/", async (req, res) => {
  const bathrooms = await Bathroom.find();
  res.json(bathrooms);
});

/**
 * GET /:id get a bathroom by the id
 */
bathroomRouter.get("/:id", async (req, res) => {
  const bathroom = await Bathroom.findById(req.params.id);
  res.json(bathroom);
});

/**
 * PUT /:id update a bathroom by the id
 */
bathroomRouter.put("/:id", async (req, res) => {
  const bathroom = await Bathroom.findByIdAndUpdate(req.params.id, req.body);
  res.json(bathroom);
});

/**
 *   DELETE /:id delete a bathroom by the id
 */
bathroomRouter.delete("/:id", async (req, res) => {
  const bathroom = await Bathroom.findByIdAndDelete(req.params.id);
  res.json(bathroom);
});

export default bathroomRouter;