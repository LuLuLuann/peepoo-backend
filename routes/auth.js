// auth.js route (route to sign in a user)

import express from "express";
import User from "../models/User.js";

const authRouter = express.Router();

/**
 * POST / sign in user
 * params {email, password}
 */
authRouter.post("/", async (req, res) => {
  const dbUser = User.findOne({ email: req.params.email }); // search to see if their is a user with that name

  if (!dbUser) {
    return res.status(404).send("user not found");
  }

  if (dbUser.password !== req.body.password) {
    return res.status(401).send("invalid password");
  }

  res.json(dbUser);
});

export default authRouter;