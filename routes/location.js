import express from "express";
import Location from "../models/Location.js";

const locationRouter = express.Router();

/**
 * GET / gets all locations
 */
locationRouter.get("/", async (req, res) => {
  const locations = await Location.find();
  res.json(locations);
});

/**
 * POST / create a new location
 */
locationRouter.post("/", async (req, res) => {
  const location = new Location(req.body);
  await location.save();
  res.json(location);
});

/**
 * GET /:id get a location by the id
 */
locationRouter.get("/:id", async (req, res) => {
  const location = await Location.findById(req.params.id);
  res.json(location);
});

/**
 * PUT /:id update a location by the id
 */
locationRouter.put("/:id", async (req, res) => {
  const location = await Location.findByIdAndUpdate(req.params.id, req.body);
  res.json(location);
});

/**
 *   DELETE /:id delete a location by the id
 */
locationRouter.delete("/:id", async (req, res) => {
  const location = await Location.findByIdAndDelete(req.params.id);
  res.json(location);
});

export default locationRouter;