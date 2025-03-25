import express from "express";
import Bathroom from "../models/Bathroom.js";

const bathroomRouter = express.Router();

////////////////////////////////////////////////////wrap all in try catch so the server doesn't crash if there is an error

/**
 * POST / create a new bathroom
 */
bathroomRouter.post("/", async (req, res) => {  //
  try {
    const bathroom = new Bathroom(req.body);
    await bathroom.save();
    res.json(bathroom);
  } catch (e) {
    console.error(e);
    res.status(400).json({ message: e.message });
  }
  });

/**
 * GET / gets all bathrooms
 */
bathroomRouter.get("/", async (req, res) => {
  try {
    const bathrooms = await Bathroom.find();
  res.json(bathrooms);
} catch (e) {
  console.error(e);
  res.status(400).json({ message: e.message });
}
});

/**
 * GET /:id get a bathroom by the id
 */
bathroomRouter.get("/:id", async (req, res) => {
  try {
    const bathroom = await Bathroom.findById(req.params.id);
  res.json(bathroom);
} catch (e) {
  console.error(e);
  res.status(400).json({ message: e.message });
}
});

/**
 * PUT /:id update a bathroom by the id
 */
bathroomRouter.put("/:id", async (req, res) => {
  try {
    const bathroom = await Bathroom.findByIdAndUpdate(req.params.id, req.body);
  res.json(bathroom);
} catch (e) {
  console.error(e);
  res.status(400).json({ message: e.message });
}
});

/**
 *   DELETE /:id delete a bathroom by the id
 */
bathroomRouter.delete("/:id", async (req, res) => {
  try {
    const bathroom = await Bathroom.findByIdAndDelete(req.params.id);
  res.json(bathroom);
} catch (e) {
  console.error(e);
  res.status(400).json({ message: e.message });
}
});

export default bathroomRouter;