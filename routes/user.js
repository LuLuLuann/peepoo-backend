import express from "express";
import User from "../models/User.js";

const userRouter = express.Router();

/**
 * POST / create a new user
 */
userRouter.post("/", async (req, res) => {
    try {
        const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
} catch (e) {
    console.error(e);
    res.status(400).json({ message: e.message });
  }
});

/**
 * GET / gets all users
 */
userRouter.get("/", async (req, res) => {
    try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    console.error(e);
    res.status(400).json({ message: e.message });
  }
  });


/**
 * GET /:id get a user by the id
 */
userRouter.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
  res.json(user);
} catch (e) {
  console.error(e);
  res.status(400).json({ message: e.message });
}
});

/**
 * PUT /:id update a user by the id
 */
userRouter.put("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
  res.json(user);
} catch (e) {
  console.error(e);
  res.status(400).json({ message: e.message });
}
});

/**
 *   DELETE /:id delete a user by the id
 */
userRouter.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
  res.json(user);
} catch (e) {
  console.error(e);
  res.status(400).json({ message: e.message });
}
});

export default userRouter;